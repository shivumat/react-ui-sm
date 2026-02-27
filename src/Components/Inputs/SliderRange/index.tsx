import newStyled from '@emotion/styled'
import React from 'react'
import { getColor, ColorFamilyType, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type SliderRangeProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
  colorFamily?: ColorFamilyType
  color?: string
  showValue?: boolean
}

const Root = newStyled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
`

const Slider = newStyled.input<{ activeColor: string }>`
  accent-color: ${({ activeColor }) => activeColor};
`

const Value = newStyled.span<{ textColor: string }>`
  min-width: 2.5rem;
  text-align: right;
  color: ${({ textColor }) => textColor};
`

const SliderRange = (props: SliderRangeProps) => {
  const {
    value,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    onValueChange,
    colorFamily,
    color,
    showValue = true,
    ...rest
  } = props

  const colorConfig = useStyleSystem().colors
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const currentValue = value ?? internalValue
  const activeColor = color ?? (colorFamily ? getColor({ colorFamily, color, colorConfig }) : colorConfig.primary)

  return (
    <Root>
      <Slider
        {...rest}
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        activeColor={activeColor}
        onChange={(event) => {
          const next = Number(event.target.value)
          if (value === undefined) setInternalValue(next)
          onValueChange?.(next)
        }}
      />
      {showValue && <Value textColor={getTextColor(colorConfig)}>{currentValue}</Value>}
    </Root>
  )
}

export default React.memo(SliderRange)
