import { RatingInput } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'number' }, description: 'Controlled selected rating.' },
  { prop: 'defaultValue', defaultValue: { value: '0' }, valueType: { value: 'number' }, description: 'Initial uncontrolled rating.' },
  { prop: 'max', defaultValue: { value: '5' }, valueType: { value: 'number' }, description: 'Maximum number of stars.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(value: number) => void' }, description: 'Callback when rating changes.' },
  { prop: 'className', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Custom class on root wrapper.' },
]

export default function RatingInputDoc() {
  return (
    <ComponentDocPage
      title='Rating Input'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Default Rating',
          code: `<RatingInput defaultValue={4} />`,
          preview: <RatingInput defaultValue={4} />,
        },
        {
          title: 'Scale Combination',
          code: `<RatingInput defaultValue={2} max={3} />\n<RatingInput defaultValue={6} max={10} />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <RatingInput defaultValue={2} max={3} />
              <RatingInput defaultValue={6} max={10} />
            </div>
          ),
        },
      ]}
    />
  )
}
