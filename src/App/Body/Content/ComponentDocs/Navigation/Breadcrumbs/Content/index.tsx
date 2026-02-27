import Breadcrumbs from '@/Components/Navigation/Breadcrumbs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'items', defaultValue: { value: '[]' }, valueType: { value: 'BreadcrumbItem[]' }, description: 'Ordered breadcrumb segments.' },
  { prop: 'separator', defaultValue: { value: '/' }, valueType: { value: 'ReactNode' }, description: 'Separator between items.' },
]

export default function BreadcrumbsDoc() {
  return (
    <ComponentDocPage
      title='Breadcrumbs'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Breadcrumbs',
          code: `<Breadcrumbs items={[{ key: 'home', label: 'Home', href: '#' }, { key: 'docs', label: 'Docs', href: '#' }, { key: 'button', label: 'Button' }]} />`,
          preview: <Breadcrumbs items={[{ key: 'home', label: 'Home', href: '#' }, { key: 'docs', label: 'Docs', href: '#' }, { key: 'button', label: 'Button' }]} />,
        },
        {
          title: 'Custom Separator',
          code: `<Breadcrumbs separator='>' items={[...]} />`,
          preview: <Breadcrumbs separator='>' items={[{ key: 'a', label: 'Workspace', href: '#' }, { key: 'b', label: 'UI', href: '#' }, { key: 'c', label: 'Inputs' }]} />,
        },
      ]}
    />
  )
}
