import newStyled from '@emotion/styled'
import React from 'react'

type AspectRatioProps = {
  ratio?: number
  children: React.ReactNode
  className?: string
}

const Wrapper = newStyled.div<{ ratio: number }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ ratio }) => ratio};
`

const Inner = newStyled.div`
  position: absolute;
  inset: 0;
`

const AspectRatio = (props: AspectRatioProps) => {
  const { ratio = 16 / 9, children, className } = props
  return (
    <Wrapper ratio={ratio} className={className}>
      <Inner>{children}</Inner>
    </Wrapper>
  )
}

export default React.memo(AspectRatio)
