import { Checkbox } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'label', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Label rendered beside checkbox.' },
  { prop: 'checked', defaultValue: { value: '-' }, valueType: { value: 'boolean' }, description: 'Controlled checked state.' },
  { prop: 'defaultChecked', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Initial uncontrolled value.' },
  { prop: 'onCheckedChange', defaultValue: { value: '-' }, valueType: { value: '(checked: boolean) => void' }, description: 'State change callback.' },
  { prop: 'disabled', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Disables interactions.' },
  { prop: 'colorFamily', defaultValue: { value: 'primary' }, valueType: { value: 'ColorFamilyType' }, description: 'Semantic active color.' },
]

export default function CheckboxDoc() {
  return (
    <ComponentDocPage
      title='Checkbox'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Variations',
          code: `<Checkbox label='Accept terms' defaultChecked />\n<Checkbox label='Subscribe updates' />`,
          preview: (
            <div style={{ display: 'grid', gap: '8px' }}>
              <Checkbox label='Accept terms' defaultChecked />
              <Checkbox label='Subscribe updates' />
            </div>
          ),
        },
        {
          title: 'Disabled + Color Combination',
          code: `<Checkbox label='Danger action' colorFamily='danger' defaultChecked />\n<Checkbox label='Disabled option' disabled />`,
          preview: (
            <div style={{ display: 'grid', gap: '8px' }}>
              <Checkbox label='Danger action' colorFamily='danger' defaultChecked />
              <Checkbox label='Disabled option' disabled />
            </div>
          ),
        },
      ]}
    />
  )
}
