import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getColor, getTextColor, ColorFamilyType } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

export type RadioOption = {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

type RadioGroupProps = {
  name: string
  options: RadioOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  colorFamily?: ColorFamilyType
  color?: string
  direction?: 'row' | 'column'
  className?: string
}

const Root = newStyled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 0.6rem;
`

const Item = newStyled.label<{ disabled?: boolean; textColor: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: ${({ textColor }) => textColor};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

const Dot = newStyled.span<{ selected: boolean; borderColor: string; activeColor: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  border: 1px solid ${({ borderColor }) => borderColor};
  background: radial-gradient(circle at center, ${({ selected, activeColor }) => (selected ? activeColor : 'transparent')} 45%, transparent 46%);
`

const HiddenInput = newStyled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`

const RadioGroup = (props: RadioGroupProps) => {
  const { name, options, value, defaultValue, onChange, colorFamily, color, direction = 'column', className } = props
  const colorConfig = useStyleSystem().colors
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const selectedValue = value ?? internalValue
  const activeColor = color ?? (colorFamily ? getColor({ colorFamily, color, colorConfig }) : colorConfig.primary)

  return (
    <Root direction={direction} className={className} role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <Item key={option.value} disabled={option.disabled} textColor={getTextColor(colorConfig)}>
          <HiddenInput
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            disabled={option.disabled}
            onChange={() => {
              if (value === undefined) setInternalValue(option.value)
              onChange?.(option.value)
            }}
          />
          <Dot selected={selectedValue === option.value} borderColor={getBorderColor(colorConfig, 0.55)} activeColor={activeColor} />
          {option.label}
        </Item>
      ))}
    </Root>
  )
}

export default React.memo(RadioGroup)
