import { ColorPicker } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled HEX color value.' },
  { prop: 'defaultValue', defaultValue: { value: '#0052cc' }, valueType: { value: 'string' }, description: 'Initial uncontrolled color.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(value: string) => void' }, description: 'Callback on color change.' },
  { prop: 'label', defaultValue: { value: 'selected color' }, valueType: { value: 'ReactNode' }, description: 'Text label beside swatch.' },
  { prop: 'className', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Optional class for root.' },
]

export default function ColorPickerDoc() {
  return (
    <ComponentDocPage
      title='Color Picker'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Default',
          code: `<ColorPicker />`,
          preview: <ColorPicker />,
        },
        {
          title: 'Label + Default Color Combination',
          code: `<ColorPicker label='Brand color' defaultValue='#00B8D9' />\n<ColorPicker label='Danger' defaultValue='#F00505' />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <ColorPicker label='Brand color' defaultValue='#00B8D9' />
              <ColorPicker label='Danger' defaultValue='#F00505' />
            </div>
          ),
        },
      ]}
    />
  )
}
