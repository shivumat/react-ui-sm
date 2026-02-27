import Inline from '@/Components/LayoutStructure/Inline'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'gap / gapSize', defaultValue: { value: 's' }, valueType: { value: 'string | SpacingScaleType' }, description: 'Space between inline items.' },
  { prop: 'align', defaultValue: { value: 'center' }, valueType: { value: 'CSS align-items' }, description: 'Vertical alignment.' },
  { prop: 'justify', defaultValue: { value: 'flex-start' }, valueType: { value: 'CSS justify-content' }, description: 'Horizontal alignment.' },
  { prop: 'wrap', defaultValue: { value: 'wrap' }, valueType: { value: 'CSS flex-wrap' }, description: 'Wrap behavior.' },
]

export default function InlineDoc() {
  return (
    <ComponentDocPage
      title='Inline'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Inline',
          code: `<Inline><span>Label</span><button>Action</button></Inline>`,
          preview: <Inline><span>Label</span><button type='button'>Action</button></Inline>,
        },
        {
          title: 'Custom Gap + Wrap',
          code: `<Inline gap='12px' wrap='wrap'>...</Inline>`,
          preview: <Inline gap='12px' wrap='wrap'><span>Chip 1</span><span>Chip 2</span><span>Chip 3</span><span>Chip 4</span></Inline>,
        },
      ]}
    />
  )
}
