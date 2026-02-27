import { useState } from 'react'
import { NavBar } from '@/Components/Navigation/NavbarTopBar'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'items', defaultValue: { value: '[]' }, valueType: { value: 'NavItem[]' }, description: 'Navigation item tree.' },
  { prop: 'layout', defaultValue: { value: 'tabs' }, valueType: { value: "'tabs' | 'sidebar'" }, description: 'Rendering layout mode.' },
  { prop: 'activeKey', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled active key.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(key: string) => void' }, description: 'Item selection callback.' },
]

const items = [
  { key: 'home', label: 'Home' },
  { key: 'components', label: 'Components', children: [{ key: 'buttons', label: 'Buttons' }, { key: 'inputs', label: 'Inputs' }] },
]

export default function NavbarTopBarDoc() {
  const [active, setActive] = useState('home')

  return (
    <ComponentDocPage
      title='Navbar / Top Bar'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Tabs Layout',
          code: `<NavBar layout='tabs' items={[...]} activeKey={active} onChange={setActive} />`,
          preview: <NavBar layout='tabs' items={items} activeKey={active} onChange={setActive} />,
        },
        {
          title: 'Sidebar Layout',
          code: `<NavBar layout='sidebar' items={[...]} activeKey={active} onChange={setActive} />`,
          preview: <div style={{ width: '240px', border: '1px solid #999' }}><NavBar layout='sidebar' items={items} activeKey={active} onChange={setActive} /></div>,
        },
      ]}
    />
  )
}
