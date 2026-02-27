import { useState } from 'react'
import Pagination from '@/Components/Navigation/Pagination'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'page', defaultValue: { value: '-' }, valueType: { value: 'number' }, description: 'Current page number.' },
  { prop: 'totalPages', defaultValue: { value: '-' }, valueType: { value: 'number' }, description: 'Total available pages.' },
  { prop: 'onPageChange', defaultValue: { value: '-' }, valueType: { value: '(page: number) => void' }, description: 'Page selection callback.' },
]

export default function PaginationDoc() {
  const [page, setPage] = useState(2)

  return (
    <ComponentDocPage
      title='Pagination'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Pagination',
          code: `<Pagination page={2} totalPages={5} onPageChange={(next) => console.log(next)} />`,
          preview: <Pagination page={2} totalPages={5} onPageChange={(next) => console.log(next)} />,
        },
        {
          title: 'Controlled Pagination',
          code: `<Pagination page={page} totalPages={10} onPageChange={setPage} />`,
          preview: <Pagination page={page} totalPages={10} onPageChange={setPage} />,
        },
      ]}
    />
  )
}
