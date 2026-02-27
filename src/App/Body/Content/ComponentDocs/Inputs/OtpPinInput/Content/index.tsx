import { OtpPinInput } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'length', defaultValue: { value: '6' }, valueType: { value: 'number' }, description: 'Number of OTP input boxes.' },
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled OTP value.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(value: string) => void' }, description: 'Fires whenever OTP text changes.' },
  { prop: 'onComplete', defaultValue: { value: '-' }, valueType: { value: '(value: string) => void' }, description: 'Fires when all boxes are filled.' },
  { prop: 'className', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Custom class name on wrapper.' },
]

export default function OtpPinInputDoc() {
  return (
    <ComponentDocPage
      title='OTP / PIN Input'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Default 6 Digit',
          code: `<OtpPinInput length={6} />`,
          preview: <OtpPinInput length={6} />,
        },
        {
          title: 'Length Combination',
          code: `<OtpPinInput length={4} />\n<OtpPinInput length={8} />`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <OtpPinInput length={4} />
              <OtpPinInput length={8} />
            </div>
          ),
        },
      ]}
    />
  )
}
