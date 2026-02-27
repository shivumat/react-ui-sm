import { Input } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'label', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Optional field label.' },
  { prop: 'placeholder', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Input placeholder text.' },
  { prop: 'customSize', defaultValue: { value: 'm' }, valueType: { value: 'SizeType' }, description: 'Scales typography and spacing.' },
  { prop: 'colorFamily', defaultValue: { value: 'primary' }, valueType: { value: 'ColorFamilyType' }, description: 'Semantic color family for focus/hover states.' },
  { prop: 'hasError', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Shows error state and error text.' },
  { prop: 'helpText', defaultValue: { value: '-' }, valueType: { value: 'string | ReactNode' }, description: 'Helper content below the field.' },
]

export default function InputDoc() {
  return (
    <ComponentDocPage
      title='Input'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Variations',
          code: `<Input placeholder='Default input' />\n<Input label='Email' placeholder='you@example.com' />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px', width: '100%', maxWidth: '420px' }}>
              <Input placeholder='Default input' />
              <Input label='Email' placeholder='you@example.com' />
            </div>
          ),
        },
        {
          title: 'State Combinations',
          code: `<Input label='Username' helpText='Use at least 6 chars' />\n<Input label='Password' hasError errorText='Minimum 8 chars required' />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px', width: '100%', maxWidth: '420px' }}>
              <Input label='Username' helpText='Use at least 6 chars' />
              <Input label='Password' hasError errorText='Minimum 8 chars required' />
            </div>
          ),
        },
      ]}
    />
  )
}
