import { TimePicker } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled time value.' },
  { prop: 'defaultValue', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Initial time for uncontrolled input.' },
  { prop: 'min / max', defaultValue: { value: '- / -' }, valueType: { value: 'string' }, description: 'Time boundary constraints.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: 'ChangeEventHandler' }, description: 'Native input change callback.' },
  { prop: 'disabled', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Disables time input.' },
]

export default function TimePickerDoc() {
  return (
    <ComponentDocPage
      title='Time Picker'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Time Picker',
          code: `<TimePicker />`,
          preview: <TimePicker />,
        },
        {
          title: 'Constraints Combination',
          code: `<TimePicker min='09:00' max='18:00' defaultValue='10:30' />\n<TimePicker disabled />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <TimePicker min='09:00' max='18:00' defaultValue='10:30' />
              <TimePicker disabled />
            </div>
          ),
        },
      ]}
    />
  )
}
