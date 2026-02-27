import { DateTimePicker } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled datetime value.' },
  { prop: 'defaultValue', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Initial uncontrolled datetime.' },
  { prop: 'min / max', defaultValue: { value: '- / -' }, valueType: { value: 'string' }, description: 'Datetime boundary constraints.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: 'ChangeEventHandler' }, description: 'Native input change callback.' },
  { prop: 'disabled', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Disables datetime input.' },
]

export default function DateTimePickerDoc() {
  return (
    <ComponentDocPage
      title='Date Time Picker'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Date Time Picker',
          code: `<DateTimePicker />`,
          preview: <DateTimePicker />,
        },
        {
          title: 'Range + Disabled Combination',
          code: `<DateTimePicker min='2026-01-01T09:00' max='2026-12-31T18:00' defaultValue='2026-06-15T10:00' />\n<DateTimePicker disabled />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <DateTimePicker min='2026-01-01T09:00' max='2026-12-31T18:00' defaultValue='2026-06-15T10:00' />
              <DateTimePicker disabled />
            </div>
          ),
        },
      ]}
    />
  )
}
