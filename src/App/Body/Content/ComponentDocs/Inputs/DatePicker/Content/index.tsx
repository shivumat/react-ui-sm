import { DatePicker } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled date value.' },
  { prop: 'defaultValue', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Initial date for uncontrolled input.' },
  { prop: 'min / max', defaultValue: { value: '- / -' }, valueType: { value: 'string' }, description: 'Date boundary constraints.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: 'ChangeEventHandler' }, description: 'Native input change callback.' },
  { prop: 'disabled', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Disables date input.' },
]

export default function DatePickerDoc() {
  return (
    <ComponentDocPage
      title='Date Picker'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Date Picker',
          code: `<DatePicker />`,
          preview: <DatePicker />,
        },
        {
          title: 'Constraints Combination',
          code: `<DatePicker min='2026-01-01' max='2026-12-31' defaultValue='2026-06-15' />\n<DatePicker disabled />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <DatePicker min='2026-01-01' max='2026-12-31' defaultValue='2026-06-15' />
              <DatePicker disabled />
            </div>
          ),
        },
      ]}
    />
  )
}
