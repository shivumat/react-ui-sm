import Center from '@/Components/LayoutStructure/Center'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'inline', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Uses inline-flex instead of flex.' },
  { prop: 'children', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Content to center.' },
]

export default function CenterDoc() {
  return (
    <ComponentDocPage
      title='Center'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Block Center',
          code: `<Center><button>Centered</button></Center>`,
          preview: <div style={{ border: '1px solid #999', width: '220px', height: '80px' }}><Center><button type='button'>Centered</button></Center></div>,
        },
        {
          title: 'Inline Center',
          code: `<Center inline><span>Inline centered</span></Center>`,
          preview: <Center inline><span>Inline centered</span></Center>,
        },
      ]}
    />
  )
}
