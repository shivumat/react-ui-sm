import newStyled from '@emotion/styled'
import React from 'react'
import { getSurfaceColor } from '@/Mixins/Color'
import { getSpacing, SpacingProps } from '@/Mixins/Spacing'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'

type SectionProps = {
  children: React.ReactNode
  padding?: SpacingProps
  margin?: SpacingProps
  background?: string
  className?: string
}

const StyledSection = newStyled.section<SectionProps & { surfaceColor: string }>`
  ${({ padding }) => getSpacing({ spacingProps: padding, size: 'm', key: 'padding' })}
  ${({ margin }) => getSpacing({ spacingProps: margin, size: 'm', key: 'margin' })}
  background: ${({ background, surfaceColor }) => background ?? surfaceColor};
`

const SectionBase = (props: SectionProps & WithStyleSystemProps) => {
  const { styleSystem, ...rest } = props
  return <StyledSection {...rest} surfaceColor={getSurfaceColor(styleSystem.colors)} />
}

export default React.memo(withStyleSystem(SectionBase))
