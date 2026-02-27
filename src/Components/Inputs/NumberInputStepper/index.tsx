import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type NumberInputStepperProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange'> & {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
}

const Root = newStyled.div<{ borderColor: string; surfaceColor: string }>`
  display: inline-flex;
  align-items: stretch;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.35rem;
  background: ${({ surfaceColor }) => surfaceColor};
  overflow: hidden;
`

const Action = newStyled.button<{ textColor: string; borderColor: string }>`
  width: 2rem;
  border: none;
  border-right: 1px solid ${({ borderColor }) => borderColor};
  background: transparent;
  color: ${({ textColor }) => textColor};
  cursor: pointer;

  &:last-of-type {
    border-right: none;
    border-left: 1px solid ${({ borderColor }) => borderColor};
  }
`

const Input = newStyled.input<{ textColor: string; surfaceColor: string }>`
  width: 4rem;
  border: none;
  outline: none;
  text-align: center;
  background: ${({ surfaceColor }) => surfaceColor};
  color: ${({ textColor }) => textColor};
`

const clamp = (value: number, min?: number, max?: number) => {
  if (min !== undefined && value < min) return min
  if (max !== undefined && value > max) return max
  return value
}

const NumberInputStepper = (props: NumberInputStepperProps) => {
  const { value, defaultValue = 0, min, max, step = 1, onValueChange, ...rest } = props
  const colorConfig = useStyleSystem().colors
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const currentValue = value ?? internalValue

  const update = (next: number) => {
    const clamped = clamp(next, min, max)
    if (value === undefined) setInternalValue(clamped)
    onValueChange?.(clamped)
  }

  return (
    <Root borderColor={getBorderColor(colorConfig, 0.55)} surfaceColor={getSurfaceColor(colorConfig)}>
      <Action type="button" textColor={getTextColor(colorConfig)} borderColor={getBorderColor(colorConfig, 0.55)} onClick={() => update(currentValue - step)}>
        -
      </Action>
      <Input
        {...rest}
        type="number"
        value={currentValue}
        min={min}
        max={max}
        step={step}
        textColor={getTextColor(colorConfig)}
        surfaceColor={getSurfaceColor(colorConfig)}
        onChange={(event) => update(Number(event.target.value))}
      />
      <Action type="button" textColor={getTextColor(colorConfig)} borderColor={getBorderColor(colorConfig, 0.55)} onClick={() => update(currentValue + step)}>
        +
      </Action>
    </Root>
  )
}

export default React.memo(NumberInputStepper)
