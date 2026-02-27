import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type DateTimePickerProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const Input = newStyled.input<{ borderColor: string; textColor: string; surfaceColor: string }>`
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.375rem;
  padding: 0.45rem 0.65rem;
  background: ${({ surfaceColor }) => surfaceColor};
  color: ${({ textColor }) => textColor};
  outline: none;
`

const DateTimePicker = (props: DateTimePickerProps) => {
  const colorConfig = useStyleSystem().colors
  return (
    <Input
      {...props}
      type="datetime-local"
      borderColor={getBorderColor(colorConfig, 0.45)}
      textColor={getTextColor(colorConfig)}
      surfaceColor={getSurfaceColor(colorConfig)}
    />
  )
}

export default React.memo(DateTimePicker)
