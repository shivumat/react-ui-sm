import PageShellAppShell from '@/Components/LayoutStructure/PageShellAppShell'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'header', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Top app/header area.' },
  { prop: 'sidebar', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Left rail/sidebar area.' },
  { prop: 'footer', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Bottom area.' },
  { prop: 'children', defaultValue: { value: '-' }, valueType: { value: 'ReactNode' }, description: 'Main content area.' },
]

export default function PageShellDoc() {
  return (
    <ComponentDocPage
      title='Page Shell / App Shell'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'With Header and Sidebar',
          code: `<PageShellAppShell header={<div>Header</div>} sidebar={<div>Sidebar</div>}>Main</PageShellAppShell>`,
          preview: (
            <div style={{ border: '1px solid #999', width: '100%', maxWidth: '520px', height: '220px', overflow: 'hidden' }}>
              <PageShellAppShell header={<div>Header</div>} sidebar={<div>Sidebar</div>}>Main</PageShellAppShell>
            </div>
          ),
        },
        {
          title: 'Header + Footer Combination',
          code: `<PageShellAppShell header={<div>Header</div>} footer={<div>Footer</div>}>Main</PageShellAppShell>`,
          preview: (
            <div style={{ border: '1px solid #999', width: '100%', maxWidth: '520px', height: '220px', overflow: 'hidden' }}>
              <PageShellAppShell header={<div>Header</div>} footer={<div>Footer</div>}>Main</PageShellAppShell>
            </div>
          ),
        },
      ]}
    />
  )
}
