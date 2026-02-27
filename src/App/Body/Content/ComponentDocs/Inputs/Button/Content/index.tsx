import { Button } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'label', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Button label when not using children.' },
  { prop: 'variant', defaultValue: { value: 'filled' }, valueType: { value: "'filled' | 'outlined' | 'subtle'" }, description: 'Visual treatment of the button.' },
  { prop: 'size', defaultValue: { value: 'm' }, valueType: { value: 'SizeType' }, description: 'Scales paddings and font size.' },
  { prop: 'colorFamily', defaultValue: { value: 'primary' }, valueType: { value: 'ColorFamilyType' }, description: 'Uses theme semantic colors.' },
  { prop: 'disabled', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Disables interactions and applies disabled style.' },
]

export default function ButtonDoc() {
  return (
    <ComponentDocPage
      title='Button'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Variants',
          code: `<Button label='Primary' />\n<Button variant='outlined' label='Outlined' />\n<Button variant='subtle' label='Subtle' />`,
          preview: (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button label='Primary' />
              <Button variant='outlined' label='Outlined' />
              <Button variant='subtle' label='Subtle' />
            </div>
          ),
        },
        {
          title: 'Size + Color Combinations',
          code: `<Button size='s' colorFamily='success' label='Save' />\n<Button size='l' colorFamily='danger' label='Delete' />\n<Button size='xl' disabled label='Disabled' />`,
          preview: (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button size='s' colorFamily='success' label='Save' />
              <Button size='l' colorFamily='danger' label='Delete' />
              <Button size='xl' disabled label='Disabled' />
            </div>
          ),
        },
      ]}
    />
  )
}
