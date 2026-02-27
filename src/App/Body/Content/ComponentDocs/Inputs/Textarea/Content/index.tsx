import { Textarea } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'label', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Optional field label.' },
  { prop: 'placeholder', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Textarea placeholder.' },
  { prop: 'customSize', defaultValue: { value: 'm' }, valueType: { value: 'SizeType' }, description: 'Scales typography and spacing.' },
  { prop: 'hasError', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Displays error state and error text.' },
  { prop: 'helpText', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Helper text displayed below input.' },
  { prop: 'colorFamily', defaultValue: { value: 'primary' }, valueType: { value: 'ColorFamilyType' }, description: 'Semantic color for text/borders.' },
]

export default function TextareaDoc() {
  return (
    <ComponentDocPage
      title='Textarea'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Variations',
          code: `<Textarea label='Description' placeholder='Write here' />\n<Textarea label='Notes' customSize='l' placeholder='Long form notes' />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px', width: '100%', maxWidth: '480px' }}>
              <Textarea label='Description' placeholder='Write here' />
              <Textarea label='Notes' customSize='l' placeholder='Long form notes' />
            </div>
          ),
        },
        {
          title: 'State Combination',
          code: `<Textarea label='Bio' helpText='Tell us about yourself' />\n<Textarea label='Comment' hasError errorText='Comment is required' />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px', width: '100%', maxWidth: '480px' }}>
              <Textarea label='Bio' helpText='Tell us about yourself' />
              <Textarea label='Comment' hasError errorText='Comment is required' />
            </div>
          ),
        },
      ]}
    />
  )
}
