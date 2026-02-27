import { IconButton } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'icon', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Icon content rendered inside the button.' },
  { prop: 'size', defaultValue: { value: '36' }, valueType: { value: 'number' }, description: 'Button width/height in pixels.' },
  { prop: 'colorFamily', defaultValue: { value: '-' }, valueType: { value: 'ColorFamilyType' }, description: 'Semantic color family for icon color.' },
  { prop: 'color', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Direct color override.' },
  { prop: 'disabled', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Disables interaction.' },
]

export default function IconButtonDoc() {
  return (
    <ComponentDocPage
      title='Icon Button'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Sizes',
          code: `<IconButton icon={<span>+</span>} size={32} aria-label='Add small' />\n<IconButton icon={<span>+</span>} size={44} aria-label='Add large' />`,
          preview: (
            <div style={{ display: 'flex', gap: '10px' }}>
              <IconButton icon={<span>+</span>} size={32} aria-label='Add small' />
              <IconButton icon={<span>+</span>} size={44} aria-label='Add large' />
            </div>
          ),
        },
        {
          title: 'Color Combination',
          code: `<IconButton icon={<span>✓</span>} colorFamily='success' aria-label='Approve' />\n<IconButton icon={<span>!</span>} colorFamily='danger' aria-label='Warn' />`,
          preview: (
            <div style={{ display: 'flex', gap: '10px' }}>
              <IconButton icon={<span>✓</span>} colorFamily='success' aria-label='Approve' />
              <IconButton icon={<span>!</span>} colorFamily='danger' aria-label='Warn' />
            </div>
          ),
        },
      ]}
    />
  )
}
