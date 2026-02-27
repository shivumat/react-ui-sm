import { useState } from 'react'
import { SliderRange } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'number' }, description: 'Controlled slider value.' },
  { prop: 'defaultValue', defaultValue: { value: '0' }, valueType: { value: 'number' }, description: 'Initial uncontrolled value.' },
  { prop: 'min / max / step', defaultValue: { value: '0 / 100 / 1' }, valueType: { value: 'number' }, description: 'Range configuration values.' },
  { prop: 'onValueChange', defaultValue: { value: '-' }, valueType: { value: '(value: number) => void' }, description: 'Called whenever value changes.' },
  { prop: 'colorFamily / color', defaultValue: { value: 'primary / -' }, valueType: { value: 'ColorFamilyType | string' }, description: 'Slider accent color source.' },
  { prop: 'showValue', defaultValue: { value: 'true' }, valueType: { value: 'boolean' }, description: 'Shows value label next to slider.' },
]

export default function SliderRangeDoc() {
  const [value, setValue] = useState(35)

  return (
    <ComponentDocPage
      title='Slider / Range'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Slider',
          code: `<SliderRange value={value} onValueChange={setValue} />`,
          preview: <SliderRange value={value} onValueChange={setValue} />,
        },
        {
          title: 'Range + Color Combination',
          code: `<SliderRange min={0} max={10} step={0.5} defaultValue={4} colorFamily='warning' />\n<SliderRange min={0} max={1} step={0.1} defaultValue={0.7} showValue={false} />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px', width: '280px' }}>
              <SliderRange min={0} max={10} step={0.5} defaultValue={4} colorFamily='warning' />
              <SliderRange min={0} max={1} step={0.1} defaultValue={0.7} showValue={false} />
            </div>
          ),
        },
      ]}
    />
  )
}
