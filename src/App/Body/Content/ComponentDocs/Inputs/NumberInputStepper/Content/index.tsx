import { useState } from 'react'
import { NumberInputStepper } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'number' }, description: 'Controlled numeric value.' },
  { prop: 'defaultValue', defaultValue: { value: '0' }, valueType: { value: 'number' }, description: 'Initial uncontrolled value.' },
  { prop: 'min / max / step', defaultValue: { value: '- / - / 1' }, valueType: { value: 'number' }, description: 'Input bounds and increment step.' },
  { prop: 'onValueChange', defaultValue: { value: '-' }, valueType: { value: '(value: number) => void' }, description: 'Called when value updates.' },
  { prop: 'disabled', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Disables typing and controls.' },
]

export default function NumberStepperDoc() {
  const [count, setCount] = useState(3)

  return (
    <ComponentDocPage
      title='Number Input / Stepper'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Controlled Stepper',
          code: `<NumberInputStepper value={count} onValueChange={setCount} min={1} max={10} />`,
          preview: <NumberInputStepper value={count} onValueChange={setCount} min={1} max={10} />,
        },
        {
          title: 'Different Steps',
          code: `<NumberInputStepper defaultValue={50} min={0} max={100} step={5} />\n<NumberInputStepper defaultValue={1.5} min={0} max={5} step={0.5} />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <NumberInputStepper defaultValue={50} min={0} max={100} step={5} />
              <NumberInputStepper defaultValue={1.5} min={0} max={5} step={0.5} />
            </div>
          ),
        },
      ]}
    />
  )
}
