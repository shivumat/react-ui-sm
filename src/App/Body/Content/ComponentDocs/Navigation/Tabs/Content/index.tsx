import { useState } from 'react'
import Tabs from '@/Components/Navigation/Tabs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'items', defaultValue: { value: '[]' }, valueType: { value: 'TabItem[]' }, description: 'Tab definitions.' },
  { prop: 'activeKey', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled active tab.' },
  { prop: 'defaultActiveKey', defaultValue: { value: 'items[0].key' }, valueType: { value: 'string' }, description: 'Initial tab for uncontrolled mode.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(key: string) => void' }, description: 'Tab change callback.' },
]

const tabItems = [
  { key: 'overview', label: 'Overview' },
  { key: 'metrics', label: 'Metrics' },
  { key: 'settings', label: 'Settings' },
]

export default function TabsDoc() {
  const [activeKey, setActiveKey] = useState('overview')
  return (
    <ComponentDocPage
      title='Tabs'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Controlled Tabs',
          code: `<Tabs items={[...]} activeKey={activeKey} onChange={setActiveKey} />`,
          preview: <Tabs items={tabItems} activeKey={activeKey} onChange={setActiveKey} />,
        },
        {
          title: 'Disabled Tab Combination',
          code: `<Tabs items={[{ key: 'a', label: 'A' }, { key: 'b', label: 'B', disabled: true }, { key: 'c', label: 'C' }]} defaultActiveKey='a' />`,
          preview: <Tabs items={[{ key: 'a', label: 'A' }, { key: 'b', label: 'B', disabled: true }, { key: 'c', label: 'C' }]} defaultActiveKey='a' />,
        },
      ]}
    />
  )
}
