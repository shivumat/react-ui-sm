import newStyled from '@emotion/styled'
import React from 'react'

type FlexHelpersProps = {
  children: React.ReactNode
  direction?: React.CSSProperties['flexDirection']
  align?: React.CSSProperties['alignItems']
  justify?: React.CSSProperties['justifyContent']
  wrap?: React.CSSProperties['flexWrap']
  grow?: number
  shrink?: number
  basis?: string
  gap?: string
  className?: string
}

const StyledFlex = newStyled.div<FlexHelpersProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: ${({ align = 'stretch' }) => align};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  flex-grow: ${({ grow = 0 }) => grow};
  flex-shrink: ${({ shrink = 1 }) => shrink};
  flex-basis: ${({ basis = 'auto' }) => basis};
  gap: ${({ gap = '0' }) => gap};
`

export default React.memo((props: FlexHelpersProps) => <StyledFlex {...props} />)
