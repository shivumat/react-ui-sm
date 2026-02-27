import { useState } from 'react'
import { SwitchToggle } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'isOn', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Current toggle state.' },
  { prop: 'onToggle', defaultValue: { value: '-' }, valueType: { value: '(state: boolean) => void' }, description: 'Callback when toggled.' },
  { prop: 'size', defaultValue: { value: '50' }, valueType: { value: 'number' }, description: 'Track width in pixels.' },
  { prop: 'toggleOnColor', defaultValue: { value: 'theme.primary' }, valueType: { value: 'string' }, description: 'Track color when ON.' },
  { prop: 'toggleOffColor', defaultValue: { value: 'theme.border' }, valueType: { value: 'string' }, description: 'Track color when OFF.' },
]

export default function SwitchToggleDoc() {
  const [isOn, setIsOn] = useState(false)

  return (
    <ComponentDocPage
      title='Switch / Toggle'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Controlled Toggle',
          code: `<SwitchToggle isOn={state} onToggle={setState} />`,
          preview: <SwitchToggle isOn={isOn} onToggle={setIsOn} />,
        },
        {
          title: 'Size + Color Combination',
          code: `<SwitchToggle isOn={true} size={60} toggleOnColor='#00B646' onToggle={() => {}} />\n<SwitchToggle isOn={false} size={40} toggleOffColor='#999' onToggle={() => {}} />`,
          preview: (
            <div style={{ display: 'flex', gap: '12px' }}>
              <SwitchToggle isOn size={60} toggleOnColor='#00B646' onToggle={() => {}} />
              <SwitchToggle isOn={false} size={40} toggleOffColor='#999' onToggle={() => {}} />
            </div>
          ),
        },
      ]}
    />
  )
}
