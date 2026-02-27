import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getColor, getSurfaceColor, getTextColor, ColorFamilyType } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type IconButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  icon: React.ReactNode
  colorFamily?: ColorFamilyType
  color?: string
  size?: number
}

const StyledButton = newStyled.button<{
  size: number
  colorValue: string
  surfaceColor: string
  borderColor: string
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid ${({ borderColor }) => borderColor};
  background: ${({ surfaceColor }) => surfaceColor};
  color: ${({ colorValue }) => colorValue};
  cursor: pointer;
  transition: 160ms ease;

  &:hover {
    border-color: ${({ colorValue }) => colorValue};
  }
`

const IconButton = (props: IconButtonProps) => {
  const { icon, colorFamily, color, size = 36, ...rest } = props
  const colorConfig = useStyleSystem().colors
  const colorValue = color ?? (colorFamily ? getColor({ colorFamily, color, colorConfig }) : getTextColor(colorConfig))

  return (
    <StyledButton
      {...rest}
      size={size}
      colorValue={colorValue}
      surfaceColor={getSurfaceColor(colorConfig)}
      borderColor={getBorderColor(colorConfig, 0.55)}
    >
      {icon}
    </StyledButton>
  )
}

export default React.memo(IconButton)
