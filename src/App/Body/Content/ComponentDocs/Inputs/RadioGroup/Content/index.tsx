import { RadioGroup } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'name', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Native radio group name.' },
  { prop: 'options', defaultValue: { value: '[]' }, valueType: { value: 'RadioOption[]' }, description: 'Radio options list.' },
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled selected value.' },
  { prop: 'defaultValue', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Initial uncontrolled value.' },
  { prop: 'direction', defaultValue: { value: 'column' }, valueType: { value: "'row' | 'column'" }, description: 'Layout direction for options.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(value: string) => void' }, description: 'Called on option select.' },
]

const options = [{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }, { value: 'enterprise', label: 'Enterprise' }]

export default function RadioGroupDoc() {
  return (
    <ComponentDocPage
      title='Radio Group'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Vertical Group',
          code: `<RadioGroup name='plan' options={[{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }]} defaultValue='pro' />`,
          preview: <RadioGroup name='plan' options={options} defaultValue='pro' />,
        },
        {
          title: 'Horizontal + Color Combination',
          code: `<RadioGroup name='billing' direction='row' colorFamily='success' options={[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }]} defaultValue='yearly' />`,
          preview: <RadioGroup name='billing' direction='row' colorFamily='success' options={[{ value: 'monthly', label: 'Monthly' }, { value: 'yearly', label: 'Yearly' }]} defaultValue='yearly' />,
        },
      ]}
    />
  )
}
