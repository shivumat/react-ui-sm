import newStyled from '@emotion/styled'
import React from 'react'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'
import { SpacingScaleType } from '@/Mixins/Spacing'

type InlineProps = {
  children: React.ReactNode
  gap?: string
  gapSize?: SpacingScaleType
  align?: React.CSSProperties['alignItems']
  justify?: React.CSSProperties['justifyContent']
  wrap?: React.CSSProperties['flexWrap']
  className?: string
}

const StyledInline = newStyled.div<{
  resolvedGap: string
  align?: React.CSSProperties['alignItems']
  justify?: React.CSSProperties['justifyContent']
  wrap?: React.CSSProperties['flexWrap']
}>`
  display: inline-flex;
  gap: ${({ resolvedGap }) => resolvedGap};
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  flex-wrap: ${({ wrap = 'wrap' }) => wrap};
`

const InlineBase = (props: InlineProps & WithStyleSystemProps) => {
  const { styleSystem, gap, gapSize = 's', ...rest } = props
  const resolvedGap = gap ?? styleSystem.spacing.scale[gapSize]
  return <StyledInline {...rest} resolvedGap={resolvedGap} />
}

export default React.memo(withStyleSystem(InlineBase))
