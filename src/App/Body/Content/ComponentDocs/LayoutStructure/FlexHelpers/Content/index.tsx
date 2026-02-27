import FlexHelpers from '@/Components/LayoutStructure/FlexHelpers'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'direction', defaultValue: { value: 'row' }, valueType: { value: 'CSS flex-direction' }, description: 'Flex flow direction.' },
  { prop: 'align / justify', defaultValue: { value: 'stretch / flex-start' }, valueType: { value: 'CSS flex alignment' }, description: 'Main/cross axis alignment.' },
  { prop: 'wrap', defaultValue: { value: 'nowrap' }, valueType: { value: 'CSS flex-wrap' }, description: 'Wrapping control.' },
  { prop: 'grow / shrink / basis', defaultValue: { value: '0 / 1 / auto' }, valueType: { value: 'number | string' }, description: 'Flex sizing behavior.' },
  { prop: 'gap', defaultValue: { value: '0' }, valueType: { value: 'string' }, description: 'Gap between items.' },
]

export default function FlexHelpersDoc() {
  return (
    <ComponentDocPage
      title='Flex Helpers'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Aligned Row',
          code: `<FlexHelpers justify='space-between' align='center'>...</FlexHelpers>`,
          preview: <FlexHelpers justify='space-between' align='center' gap='8px'><span>Left</span><span>Right</span></FlexHelpers>,
        },
        {
          title: 'Wrapped Row',
          code: `<FlexHelpers wrap='wrap' gap='10px'>...</FlexHelpers>`,
          preview: <FlexHelpers wrap='wrap' gap='10px'><span>1</span><span>2</span><span>3</span><span>4</span></FlexHelpers>,
        },
      ]}
    />
  )
}
