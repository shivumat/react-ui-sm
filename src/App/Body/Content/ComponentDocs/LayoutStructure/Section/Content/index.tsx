import Section from '@/Components/LayoutStructure/Section'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'padding / margin', defaultValue: { value: '-' }, valueType: { value: 'SpacingProps' }, description: 'Section spacing controls.' },
  { prop: 'background', defaultValue: { value: 'theme surface' }, valueType: { value: 'string' }, description: 'Background override.' },
  { prop: 'children', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Section content.' },
]

export default function SectionDoc() {
  return (
    <ComponentDocPage
      title='Section'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Section',
          code: `<Section padding={{ all: '16px' }}>Section content</Section>`,
          preview: <Section padding={{ all: '16px' }}>Section content</Section>,
        },
        {
          title: 'Spacing + Background Combination',
          code: `<Section margin={{ y: '12px' }} padding={{ all: '12px' }} background='#f0f0f0'>Muted section</Section>`,
          preview: <Section margin={{ y: '12px' }} padding={{ all: '12px' }} background='#f0f0f0'>Muted section</Section>,
        },
      ]}
    />
  )
}
