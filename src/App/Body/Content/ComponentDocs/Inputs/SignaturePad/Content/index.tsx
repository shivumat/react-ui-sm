import { SignaturePad } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'width', defaultValue: { value: '320' }, valueType: { value: 'number' }, description: 'Canvas width in pixels.' },
  { prop: 'height', defaultValue: { value: '140' }, valueType: { value: 'number' }, description: 'Canvas height in pixels.' },
  { prop: 'lineWidth', defaultValue: { value: '2' }, valueType: { value: 'number' }, description: 'Stroke width for drawn lines.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(dataUrl: string) => void' }, description: 'Called when signature content changes.' },
  { prop: 'className', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Optional class on wrapper root.' },
]

export default function SignaturePadDoc() {
  return (
    <ComponentDocPage
      title='Signature Pad'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Default Pad',
          code: `<SignaturePad />`,
          preview: <SignaturePad />,
        },
        {
          title: 'Dimension + Line Width Combination',
          code: `<SignaturePad width={420} height={180} lineWidth={3} />\n<SignaturePad width={260} height={120} lineWidth={1} />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <SignaturePad width={420} height={180} lineWidth={3} />
              <SignaturePad width={260} height={120} lineWidth={1} />
            </div>
          ),
        },
      ]}
    />
  )
}
