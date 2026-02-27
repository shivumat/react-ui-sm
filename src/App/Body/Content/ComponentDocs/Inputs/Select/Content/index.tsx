import { Select } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'options', defaultValue: { value: '[]' }, valueType: { value: 'DropdownOption[]' }, description: 'List of selectable option items.' },
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string | number' }, description: 'Controlled selected option value.' },
  { prop: 'placeholder', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Placeholder shown before selection.' },
  { prop: 'label', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Optional field label.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(value) => void' }, description: 'Selection change callback.' },
  { prop: 'hasError', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Shows validation error state.' },
]

const baseOptions = [{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }, { label: 'C', value: 'C' }]

export default function SelectDoc() {
  return (
    <ComponentDocPage
      title='Select'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Default + Label',
          code: `<Select options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }]} placeholder='Choose' />\n<Select label='Plan' options={[{ label: 'Free', value: 'free' }, { label: 'Pro', value: 'pro' }]} />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px', width: '100%', maxWidth: '420px' }}>
              <Select options={baseOptions} placeholder='Choose' />
              <Select label='Plan' options={[{ label: 'Free', value: 'free' }, { label: 'Pro', value: 'pro' }]} />
            </div>
          ),
        },
        {
          title: 'Error + Color Combination',
          code: `<Select label='Country' colorFamily='success' options={[...]} />\n<Select label='Required field' hasError errorText='Please select an option' options={[...]} />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px', width: '100%', maxWidth: '420px' }}>
              <Select label='Country' colorFamily='success' options={baseOptions} />
              <Select label='Required field' hasError errorText='Please select an option' options={baseOptions} />
            </div>
          ),
        },
      ]}
    />
  )
}
