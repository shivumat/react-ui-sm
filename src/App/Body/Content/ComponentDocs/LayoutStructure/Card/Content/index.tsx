import CardComponent from '@/Components/LayoutStructure/Card'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'header / footer', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Optional card top/bottom areas.' },
  { prop: 'padding / margin', defaultValue: { value: '-' }, valueType: { value: 'SpacingProps' }, description: 'Spacing controls.' },
  { prop: 'border / borderRadius', defaultValue: { value: 'theme defaults' }, valueType: { value: 'string' }, description: 'Border and rounding overrides.' },
  { prop: 'boxShadow', defaultValue: { value: 'theme based' }, valueType: { value: 'string' }, description: 'Shadow override.' },
]

export default function CardDoc() {
  return (
    <ComponentDocPage
      title='Card'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Card',
          code: `<CardComponent padding={{ all: '12px' }}>Card body</CardComponent>`,
          preview: <CardComponent padding={{ all: '12px' }}>Card body</CardComponent>,
        },
        {
          title: 'Header/Footer Combination',
          code: `<CardComponent header='Header' footer='Footer' padding={{ all: '12px' }}>Content</CardComponent>`,
          preview: <CardComponent header='Header' footer='Footer' padding={{ all: '12px' }}>Content</CardComponent>,
        },
      ]}
    />
  )
}
