import Stack from '@/Components/LayoutStructure/Stack'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'direction', defaultValue: { value: 'vertical' }, valueType: { value: "'vertical' | 'horizontal'" }, description: 'Stack axis direction.' },
  { prop: 'gap / gapSize', defaultValue: { value: 'm' }, valueType: { value: 'string | SpacingScaleType' }, description: 'Item spacing controls.' },
  { prop: 'align', defaultValue: { value: 'stretch' }, valueType: { value: 'CSS align-items' }, description: 'Cross-axis alignment.' },
  { prop: 'justify', defaultValue: { value: 'flex-start' }, valueType: { value: 'CSS justify-content' }, description: 'Main-axis alignment.' },
  { prop: 'wrap', defaultValue: { value: 'nowrap' }, valueType: { value: 'CSS flex-wrap' }, description: 'Wrapping behavior.' },
]

export default function StackDoc() {
  return (
    <ComponentDocPage
      title='Stack'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Vertical Stack',
          code: `<Stack gapSize='s'><div>A</div><div>B</div><div>C</div></Stack>`,
          preview: <Stack gapSize='s'><div>A</div><div>B</div><div>C</div></Stack>,
        },
        {
          title: 'Horizontal + Wrap',
          code: `<Stack direction='horizontal' wrap='wrap' gap='10px'>...</Stack>`,
          preview: <Stack direction='horizontal' wrap='wrap' gap='10px'><div>One</div><div>Two</div><div>Three</div><div>Four</div></Stack>,
        },
      ]}
    />
  )
}
