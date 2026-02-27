import newStyled from '@emotion/styled'
import React from 'react'
import { getTextColor } from '@/Mixins/Color'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'

export type BreadcrumbItem = {
  key: string
  label: React.ReactNode
  href?: string
  onClick?: () => void
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
}

const List = newStyled.ol<{ textColor: string }>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ textColor }) => textColor};
`

const BreadcrumbsBase = (props: BreadcrumbsProps & WithStyleSystemProps) => {
  const { items, separator = '/', className, styleSystem } = props
  const textColor = getTextColor(styleSystem.colors)

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <List textColor={textColor}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <React.Fragment key={item.key}>
              <li>
                {item.href ? (
                  <a href={item.href} onClick={item.onClick}>{item.label}</a>
                ) : (
                  <button type="button" onClick={item.onClick} disabled={isLast}>{item.label}</button>
                )}
              </li>
              {!isLast && <li aria-hidden>{separator}</li>}
            </React.Fragment>
          )
        })}
      </List>
    </nav>
  )
}

export default React.memo(withStyleSystem(BreadcrumbsBase))
