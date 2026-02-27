import newStyled from '@emotion/styled'
import React from 'react'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'
import { SpacingScaleType } from '@/Mixins/Spacing'

type GridProps = {
  children: React.ReactNode
  columns?: number
  minColumnWidth?: string
  gap?: string
  gapSize?: SpacingScaleType
  className?: string
}

const StyledGrid = newStyled.div<{
  template: string
  resolvedGap: string
}>`
  display: grid;
  grid-template-columns: ${({ template }) => template};
  gap: ${({ resolvedGap }) => resolvedGap};
`

const GridBase = (props: GridProps & WithStyleSystemProps) => {
  const { styleSystem, columns, minColumnWidth, gap, gapSize = 'm', ...rest } = props
  const resolvedGap = gap ?? styleSystem.spacing.scale[gapSize]
  const template = minColumnWidth ? `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))` : `repeat(${columns ?? styleSystem.layout.grid.columns}, minmax(0, 1fr))`
  return <StyledGrid {...rest} template={template} resolvedGap={resolvedGap} />
}

export default React.memo(withStyleSystem(GridBase))
