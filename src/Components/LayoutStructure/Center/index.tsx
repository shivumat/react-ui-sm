import newStyled from '@emotion/styled'
import React from 'react'

type CenterProps = {
  children: React.ReactNode
  inline?: boolean
  className?: string
}

const StyledCenter = newStyled.div<{ inline?: boolean }>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
`

export default React.memo((props: CenterProps) => <StyledCenter {...props} />)
