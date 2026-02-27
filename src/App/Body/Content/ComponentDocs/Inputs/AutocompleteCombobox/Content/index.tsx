import { AutocompleteCombobox } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'options', defaultValue: { value: '[]' }, valueType: { value: 'ComboboxOption[]' }, description: 'List used for filtering and selection.' },
  { prop: 'value', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Controlled text/value.' },
  { prop: 'defaultValue', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Initial uncontrolled input value.' },
  { prop: 'placeholder', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Input placeholder.' },
  { prop: 'onChange', defaultValue: { value: '-' }, valueType: { value: '(value: string) => void' }, description: 'Triggered on typing and commit.' },
  { prop: 'onSelect', defaultValue: { value: '-' }, valueType: { value: '(option) => void' }, description: 'Triggered when an option is committed.' },
]

const fruitOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
]

export default function AutocompleteDoc() {
  return (
    <ComponentDocPage
      title='Autocomplete / Combobox'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Search',
          code: `<AutocompleteCombobox options={[{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }]} placeholder='Search fruits' />`,
          preview: <AutocompleteCombobox options={fruitOptions} placeholder='Search fruits' />,
        },
        {
          title: 'Different Dataset',
          code: `<AutocompleteCombobox options={[{ label: 'React', value: 'react' }, { label: 'Vue', value: 'vue' }, { label: 'Svelte', value: 'svelte' }]} placeholder='Search frameworks' />`,
          preview: <AutocompleteCombobox options={[{ label: 'React', value: 'react' }, { label: 'Vue', value: 'vue' }, { label: 'Svelte', value: 'svelte' }]} placeholder='Search frameworks' />,
        },
      ]}
    />
  )
}
