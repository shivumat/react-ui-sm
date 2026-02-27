import ContainerComponent from '@/Components/LayoutStructure/BoxContainer'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'type', defaultValue: { value: 'normal' }, valueType: { value: "'normal' | 'flex' | 'grid'" }, description: 'Container display mode.' },
  { prop: 'padding / margin', defaultValue: { value: '-' }, valueType: { value: 'SpacingProps' }, description: 'Applies spacing tokens.' },
  { prop: 'bgColor', defaultValue: { value: 'theme surface' }, valueType: { value: 'string' }, description: 'Background override.' },
  { prop: 'justifyContent / alignItems', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Flex alignment props for type=flex.' },
  { prop: 'gridTemplateColumns', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'CSS grid template when type=grid.' },
]

export default function BoxContainerDoc() {
  return (
    <ComponentDocPage
      title='Box / Container'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Flex Container',
          code: `<ContainerComponent type='flex' padding={{ all: '12px' }} justifyContent='space-between'>...</ContainerComponent>`,
          preview: (
            <ContainerComponent type='flex' padding={{ all: '12px' }} justifyContent='space-between' border='1px solid #999'>
              <span>Left</span><span>Right</span>
            </ContainerComponent>
          ),
        },
        {
          title: 'Grid Container',
          code: `<ContainerComponent type='grid' gridTemplateColumns='1fr 1fr' gap='8px'>...</ContainerComponent>`,
          preview: (
            <ContainerComponent type='grid' gridTemplateColumns='1fr 1fr' padding={{ all: '10px' }} border='1px solid #999'>
              <div>Cell 1</div><div>Cell 2</div>
            </ContainerComponent>
          ),
        },
      ]}
    />
  )
}
