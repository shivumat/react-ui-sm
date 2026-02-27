import AspectRatio from '@/Components/LayoutStructure/AspectRatio'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const box = (label: string, bg: string) => <div style={{ width: '100%', height: '100%', background: bg, display: 'grid', placeItems: 'center' }}>{label}</div>

const propsConfig: ContentPropsTableProps = [
  { prop: 'ratio', defaultValue: { value: '16/9' }, valueType: { value: 'number' }, description: 'Aspect ratio value.' },
  { prop: 'children', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Content stretched inside ratio box.' },
]

export default function AspectRatioDoc() {
  return (
    <ComponentDocPage
      title='Aspect Ratio'
      propsConfig={propsConfig}
      examples={[
        {
          title: '16:9 Default',
          code: `<AspectRatio ratio={16 / 9}>...</AspectRatio>`,
          preview: <div style={{ width: '280px' }}><AspectRatio ratio={16 / 9}>{box('16:9', '#ddd')}</AspectRatio></div>,
        },
        {
          title: '1:1 + 4:3 Combination',
          code: `<AspectRatio ratio={1}>{...}</AspectRatio>\n<AspectRatio ratio={4 / 3}>{...}</AspectRatio>`,
          preview: <div style={{ width: '280px', display: 'grid', gap: '10px' }}><AspectRatio ratio={1}>{box('1:1', '#cce')}</AspectRatio><AspectRatio ratio={4 / 3}>{box('4:3', '#cec')}</AspectRatio></div>,
        },
      ]}
    />
  )
}
