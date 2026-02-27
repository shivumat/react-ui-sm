import SurfacePaper from '@/Components/LayoutStructure/SurfacePaper'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'elevationType', defaultValue: { value: 's' }, valueType: { value: "'none' | 'xs' | 's' | 'm' | 'l' | 'xl'" }, description: 'Shadow preset token.' },
  { prop: 'radiusType / radius', defaultValue: { value: 'token / -' }, valueType: { value: 'RadiusType | string' }, description: 'Rounded corner config.' },
  { prop: 'background', defaultValue: { value: 'theme surface' }, valueType: { value: 'string' }, description: 'Background override.' },
  { prop: 'border', defaultValue: { value: 'theme border' }, valueType: { value: 'string' }, description: 'Border override.' },
]

export default function SurfacePaperDoc() {
  return (
    <ComponentDocPage
      title='Surface / Paper'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Default Surface',
          code: `<SurfacePaper elevationType='s' radiusType='m'>Surface</SurfacePaper>`,
          preview: <SurfacePaper elevationType='s' radiusType='m'>Surface</SurfacePaper>,
        },
        {
          title: 'Elevation + Radius Combination',
          code: `<SurfacePaper elevationType='xl' radius='20px'>Elevated</SurfacePaper>\n<SurfacePaper elevationType='none' border='1px dashed #999'>Flat</SurfacePaper>`,
          preview: (
            <div style={{ display: 'grid', gap: '10px' }}>
              <SurfacePaper elevationType='xl' radius='20px'>Elevated</SurfacePaper>
              <SurfacePaper elevationType='none' border='1px dashed #999'>Flat</SurfacePaper>
            </div>
          ),
        },
      ]}
    />
  )
}
