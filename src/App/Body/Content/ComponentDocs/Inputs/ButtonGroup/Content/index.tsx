import { ButtonGroup } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'items', defaultValue: { value: '[]' }, valueType: { value: 'ButtonGroupItem[]' }, description: 'Group button definitions.' },
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled selected key.' },
  { prop: 'defaultValue', defaultValue: { value: 'items[0]' }, valueType: { value: 'string' }, description: 'Initial selected key for uncontrolled mode.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(key: string) => void' }, description: 'Selection callback.' },
  { prop: 'className', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Custom class for wrapper.' },
]

const items = [
  { key: 'left', label: 'Left' },
  { key: 'center', label: 'Center' },
  { key: 'right', label: 'Right' },
]

export default function ButtonGroupDoc() {
  return (
    <ComponentDocPage
      title='Button Group'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Group',
          code: `<ButtonGroup items={[{ key: 'left', label: 'Left' }, { key: 'center', label: 'Center' }, { key: 'right', label: 'Right' }]} />`,
          preview: <ButtonGroup items={items} />,
        },
        {
          title: 'Disabled Item Combination',
          code: `<ButtonGroup items={[{ key: 'day', label: 'Day' }, { key: 'week', label: 'Week', disabled: true }, { key: 'month', label: 'Month' }]} />`,
          preview: <ButtonGroup items={[{ key: 'day', label: 'Day' }, { key: 'week', label: 'Week', disabled: true }, { key: 'month', label: 'Month' }]} />,
        },
      ]}
    />
  )
}
