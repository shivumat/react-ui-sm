import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor } from '@/Mixins/Color'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'

type DividerSeparatorProps = {
  orientation?: 'horizontal' | 'vertical'
  color?: string
  thickness?: string
  className?: string
}

const StyledDivider = newStyled.div<{
  orientation: 'horizontal' | 'vertical'
  colorValue: string
  thickness: string
}>`
  background: ${({ colorValue }) => colorValue};
  width: ${({ orientation, thickness }) => (orientation === 'horizontal' ? '100%' : thickness)};
  min-width: ${({ orientation, thickness }) => (orientation === 'horizontal' ? '100%' : thickness)};
  height: ${({ orientation, thickness }) => (orientation === 'vertical' ? '100%' : thickness)};
  min-height: ${({ orientation, thickness }) => (orientation === 'vertical' ? '100%' : thickness)};
  flex-shrink: 0;
`

const DividerSeparatorBase = (props: DividerSeparatorProps & WithStyleSystemProps) => {
  const { orientation = 'horizontal', color, thickness = '1px', styleSystem, className } = props
  const colorValue = color ?? getBorderColor(styleSystem.colors)
  return <StyledDivider className={className} orientation={orientation} thickness={thickness} colorValue={colorValue} role="separator" />
}

export default React.memo(withStyleSystem(DividerSeparatorBase))
