import DividerSeparator from '@/Components/LayoutStructure/DividerSeparator'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'orientation', defaultValue: { value: 'horizontal' }, valueType: { value: "'horizontal' | 'vertical'" }, description: 'Separator orientation.' },
  { prop: 'thickness', defaultValue: { value: '1px' }, valueType: { value: 'string' }, description: 'Line thickness.' },
  { prop: 'color', defaultValue: { value: 'theme border' }, valueType: { value: 'string' }, description: 'Line color override.' },
]

export default function DividerDoc() {
  return (
    <ComponentDocPage
      title='Divider / Separator'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Horizontal Divider',
          code: `<DividerSeparator />`,
          preview: <DividerSeparator />,
        },
        {
          title: 'Vertical + Thickness',
          code: `<div style={{ height: '40px' }}><DividerSeparator orientation='vertical' thickness='2px' /></div>`,
          preview: <div style={{ height: '40px', display: 'flex' }}><DividerSeparator orientation='vertical' thickness='2px' /></div>,
        },
      ]}
    />
  )
}
