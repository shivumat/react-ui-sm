import newStyled from '@emotion/styled'
import React from 'react'

type PageShellAppShellProps = {
  header?: React.ReactNode
  sidebar?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  className?: string
}

const Shell = newStyled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

const Header = newStyled.header`
  grid-column: 1 / -1;
`

const Sidebar = newStyled.aside`
  grid-column: 1;
`

const Main = newStyled.main`
  grid-column: 2;
  min-width: 0;
`

const Footer = newStyled.footer`
  grid-column: 1 / -1;
`

const PageShellAppShell = (props: PageShellAppShellProps) => {
  const { header, sidebar, footer, children, className } = props
  return (
    <Shell className={className}>
      {header && <Header>{header}</Header>}
      {sidebar && <Sidebar>{sidebar}</Sidebar>}
      <Main>{children}</Main>
      {footer && <Footer>{footer}</Footer>}
    </Shell>
  )
}

export default React.memo(PageShellAppShell)
