import { MultiSelect } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'options', defaultValue: { value: '[]' }, valueType: { value: 'MultiSelectOption[]' }, description: 'Selectable options with optional disabled flag.' },
  { prop: 'values', defaultValue: { value: '-' }, valueType: { value: 'string[]' }, description: 'Controlled selected values.' },
  { prop: 'defaultValues', defaultValue: { value: '[]' }, valueType: { value: 'string[]' }, description: 'Initial uncontrolled selection.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(values: string[]) => void' }, description: 'Selection change callback.' },
  { prop: 'placeholder', defaultValue: { value: 'Select options' }, valueType: { value: 'string' }, description: 'Shown when no option is selected.' },
]

const stackOptions = [
  { label: 'React', value: 'react' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Emotion', value: 'emotion' },
]

export default function MultiSelectDoc() {
  return (
    <ComponentDocPage
      title='Multi Select'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Default Selection',
          code: `<MultiSelect options={[{ label: 'React', value: 'react' }, { label: 'TypeScript', value: 'ts' }]} defaultValues={['react']} />`,
          preview: <MultiSelect options={stackOptions} defaultValues={['react']} />,
        },
        {
          title: 'Disabled Option Combination',
          code: `<MultiSelect options={[{ label: 'Frontend', value: 'fe' }, { label: 'Backend', value: 'be', disabled: true }, { label: 'DevOps', value: 'devops' }]} />`,
          preview: <MultiSelect options={[{ label: 'Frontend', value: 'fe' }, { label: 'Backend', value: 'be', disabled: true }, { label: 'DevOps', value: 'devops' }]} />,
        },
      ]}
    />
  )
}
