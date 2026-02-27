import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

export type ButtonGroupItem = {
  key: string
  label: React.ReactNode
  disabled?: boolean
}

type ButtonGroupProps = {
  items: ButtonGroupItem[]
  value?: string
  defaultValue?: string
  onChange?: (key: string) => void
  className?: string
}

const Root = newStyled.div<{ borderColor: string }>`
  display: inline-flex;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.375rem;
  overflow: hidden;
`

const Btn = newStyled.button<{ active: boolean; textColor: string; surfaceColor: string; borderColor: string }>`
  border: none;
  border-right: 1px solid ${({ borderColor }) => borderColor};
  padding: 0.45rem 0.75rem;
  background: ${({ active, textColor, surfaceColor }) => (active ? textColor : surfaceColor)};
  color: ${({ active, textColor, surfaceColor }) => (active ? surfaceColor : textColor)};
  cursor: pointer;

  &:last-child {
    border-right: none;
  }
`

const ButtonGroup = (props: ButtonGroupProps) => {
  const { items, value, defaultValue, onChange, className } = props
  const colorConfig = useStyleSystem().colors
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? items[0]?.key)
  const selected = value ?? internalValue

  const borderColor = getBorderColor(colorConfig, 0.5)
  const textColor = getTextColor(colorConfig)
  const surfaceColor = getSurfaceColor(colorConfig)

  return (
    <Root className={className} borderColor={borderColor} role="group" aria-label="button-group">
      {items.map((item) => (
        <Btn
          key={item.key}
          type="button"
          active={selected === item.key}
          textColor={textColor}
          surfaceColor={surfaceColor}
          borderColor={borderColor}
          disabled={item.disabled}
          onClick={() => {
            if (item.disabled) return
            if (value === undefined) setInternalValue(item.key)
            onChange?.(item.key)
          }}
        >
          {item.label}
        </Btn>
      ))}
    </Root>
  )
}

export default React.memo(ButtonGroup)
