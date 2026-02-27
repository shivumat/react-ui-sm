import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type ColorPickerProps = {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
  label?: React.ReactNode
}

const Root = newStyled.label<{ textColor: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ textColor }) => textColor};
`

const SwatchInput = newStyled.input<{ borderColor: string; surfaceColor: string }>`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.35rem;
  padding: 0.15rem;
  background: ${({ surfaceColor }) => surfaceColor};
`

const ColorPicker = (props: ColorPickerProps) => {
  const { value, defaultValue = '#0052cc', onChange, className, label } = props
  const colorConfig = useStyleSystem().colors
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const selected = value ?? internalValue

  return (
    <Root className={className} textColor={getTextColor(colorConfig)}>
      <SwatchInput
        type="color"
        value={selected}
        borderColor={getBorderColor(colorConfig, 0.45)}
        surfaceColor={getSurfaceColor(colorConfig)}
        onChange={(event) => {
          const next = event.target.value
          if (value === undefined) setInternalValue(next)
          onChange?.(next)
        }}
      />
      {label ?? selected}
    </Root>
  )
}

export default React.memo(ColorPicker)
