import newStyled from '@emotion/styled'
import React from 'react'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'
import { SpacingScaleType } from '@/Mixins/Spacing'

type StackProps = {
  children: React.ReactNode
  direction?: 'vertical' | 'horizontal'
  gap?: string
  gapSize?: SpacingScaleType
  align?: React.CSSProperties['alignItems']
  justify?: React.CSSProperties['justifyContent']
  wrap?: React.CSSProperties['flexWrap']
  className?: string
}

type StackStyleProps = StackProps & {
  resolvedGap: string
}

const StyledStack = newStyled.div<StackStyleProps>`
  display: flex;
  flex-direction: ${({ direction = 'vertical' }) => (direction === 'vertical' ? 'column' : 'row')};
  gap: ${({ resolvedGap }) => resolvedGap};
  align-items: ${({ align = 'stretch' }) => align};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
`

const StackBase = (props: StackProps & WithStyleSystemProps) => {
  const { styleSystem, gap, gapSize = 'm', ...rest } = props
  const resolvedGap = gap ?? styleSystem.spacing.scale[gapSize]
  return <StyledStack {...rest} resolvedGap={resolvedGap} />
}

export default React.memo(withStyleSystem(StackBase))
