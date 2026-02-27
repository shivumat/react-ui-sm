import Spacer from '@/Components/LayoutStructure/Spacer'
import Stack from '@/Components/LayoutStructure/Stack'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'axis', defaultValue: { value: 'vertical' }, valueType: { value: "'vertical' | 'horizontal'" }, description: 'Spacer direction.' },
  { prop: 'size', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Direct CSS size value.' },
  { prop: 'sizeKey', defaultValue: { value: 'm' }, valueType: { value: 'SpacingScaleType' }, description: 'Token-based size key.' },
]

export default function SpacerDoc() {
  return (
    <ComponentDocPage
      title='Spacer'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Vertical Spacer',
          code: `<Stack><div>Top</div><Spacer sizeKey='l' /><div>Bottom</div></Stack>`,
          preview: <Stack><div>Top</div><Spacer sizeKey='l' /><div>Bottom</div></Stack>,
        },
        {
          title: 'Horizontal Spacer',
          code: `<div style={{ display: 'flex' }}><span>A</span><Spacer axis='horizontal' size='24px' /><span>B</span></div>`,
          preview: <div style={{ display: 'flex', alignItems: 'center' }}><span>A</span><Spacer axis='horizontal' size='24px' /><span>B</span></div>,
        },
      ]}
    />
  )
}
