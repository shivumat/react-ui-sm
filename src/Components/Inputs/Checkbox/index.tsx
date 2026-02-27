import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getColor, getTextColor, ColorFamilyType } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  label?: React.ReactNode
  colorFamily?: ColorFamilyType
  color?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Root = newStyled.label<{ textColor: string; disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ textColor }) => textColor};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const Box = newStyled.span<{ checked: boolean; borderColor: string; activeColor: string }>`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.2rem;
  background: ${({ checked, activeColor }) => (checked ? activeColor : 'transparent')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 120ms ease;
`

const HiddenInput = newStyled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`

const Checkbox = (props: CheckboxProps) => {
  const {
    label,
    colorFamily,
    color,
    checked,
    defaultChecked,
    disabled,
    onCheckedChange,
    ...rest
  } = props

  const colorConfig = useStyleSystem().colors
  const [internalChecked, setInternalChecked] = React.useState(Boolean(defaultChecked))
  const isControlled = checked !== undefined
  const value = isControlled ? checked : internalChecked
  const activeColor = color ?? (colorFamily ? getColor({ colorFamily, color, colorConfig }) : colorConfig.primary)

  return (
    <Root textColor={getTextColor(colorConfig)} disabled={disabled}>
      <HiddenInput
        {...rest}
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={(event) => {
          if (!isControlled) setInternalChecked(event.target.checked)
          onCheckedChange?.(event.target.checked)
        }}
      />
      <Box checked={Boolean(value)} borderColor={getBorderColor(colorConfig, 0.55)} activeColor={activeColor}>
        {value ? '✓' : ''}
      </Box>
      {label}
    </Root>
  )
}

export default React.memo(Checkbox)
