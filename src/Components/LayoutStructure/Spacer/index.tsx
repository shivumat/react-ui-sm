import newStyled from '@emotion/styled'
import React from 'react'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'
import { SpacingScaleType } from '@/Mixins/Spacing'

type SpacerProps = {
  axis?: 'vertical' | 'horizontal'
  size?: string
  sizeKey?: SpacingScaleType
  className?: string
}

const StyledSpacer = newStyled.div<{ axis: 'vertical' | 'horizontal'; value: string }>`
  width: ${({ axis, value }) => (axis === 'horizontal' ? value : '1px')};
  min-width: ${({ axis, value }) => (axis === 'horizontal' ? value : '1px')};
  height: ${({ axis, value }) => (axis === 'vertical' ? value : '1px')};
  min-height: ${({ axis, value }) => (axis === 'vertical' ? value : '1px')};
  flex-shrink: 0;
`

const SpacerBase = (props: SpacerProps & WithStyleSystemProps) => {
  const { axis = 'vertical', size, sizeKey = 'm', styleSystem, className } = props
  const value = size ?? styleSystem.spacing.scale[sizeKey]
  return <StyledSpacer className={className} axis={axis} value={value} aria-hidden />
}

export default React.memo(withStyleSystem(SpacerBase))
