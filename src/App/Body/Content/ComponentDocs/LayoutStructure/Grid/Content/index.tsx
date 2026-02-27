import Grid from '@/Components/LayoutStructure/Grid'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'columns', defaultValue: { value: 'layout.grid.columns' }, valueType: { value: 'number' }, description: 'Fixed column count.' },
  { prop: 'minColumnWidth', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Auto-fit responsive min width.' },
  { prop: 'gap / gapSize', defaultValue: { value: 'm' }, valueType: { value: 'string | SpacingScaleType' }, description: 'Grid gap values.' },
]

export default function GridDoc() {
  return (
    <ComponentDocPage
      title='Grid'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Fixed Columns',
          code: `<Grid columns={3} gap='8px'>...</Grid>`,
          preview: <Grid columns={3} gap='8px'><div>1</div><div>2</div><div>3</div></Grid>,
        },
        {
          title: 'Responsive Auto Fit',
          code: `<Grid minColumnWidth='140px' gapSize='s'>...</Grid>`,
          preview: <Grid minColumnWidth='140px' gapSize='s'><div>A</div><div>B</div><div>C</div><div>D</div></Grid>,
        },
      ]}
    />
  )
}
