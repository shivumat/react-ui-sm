import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getTextColor } from '@/Mixins/Color'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'

type PaginationProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

const Root = newStyled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`

const PageButton = newStyled.button<{ isActive?: boolean; borderColor: string; textColor: string }>`
  min-width: 2rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  background: ${({ isActive, textColor }) => (isActive ? textColor : 'transparent')};
  color: ${({ isActive, textColor }) => (isActive ? '#fff' : textColor)};
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`

const PaginationBase = (props: PaginationProps & WithStyleSystemProps) => {
  const { page, totalPages, onPageChange, className, styleSystem } = props
  const borderColor = getBorderColor(styleSystem.colors, 0.45)
  const textColor = getTextColor(styleSystem.colors)

  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <Root className={className}>
      <PageButton borderColor={borderColor} textColor={textColor} onClick={() => onPageChange(Math.max(1, page - 1))}>
        Prev
      </PageButton>
      {pages.map((p) => (
        <PageButton
          key={p}
          isActive={p === page}
          borderColor={borderColor}
          textColor={textColor}
          onClick={() => onPageChange(p)}
        >
          {p}
        </PageButton>
      ))}
      <PageButton borderColor={borderColor} textColor={textColor} onClick={() => onPageChange(Math.min(totalPages, page + 1))}>
        Next
      </PageButton>
    </Root>
  )
}

export default React.memo(withStyleSystem(PaginationBase))
