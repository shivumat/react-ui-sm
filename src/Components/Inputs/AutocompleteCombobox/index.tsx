import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

export type ComboboxOption = {
  label: string
  value: string
}

type AutocompleteComboboxProps = {
  options: ComboboxOption[]
  value?: string
  defaultValue?: string
  placeholder?: string
  onChange?: (value: string) => void
  onSelect?: (option: ComboboxOption) => void
  className?: string
}

const Root = newStyled.div`
  position: relative;
  width: 100%;
`

const Input = newStyled.input<{ borderColor: string; textColor: string; surfaceColor: string }>`
  width: 100%;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  background: ${({ surfaceColor }) => surfaceColor};
  color: ${({ textColor }) => textColor};
  outline: none;
`

const Menu = newStyled.ul<{ borderColor: string; surfaceColor: string }>`
  position: absolute;
  z-index: 1000;
  width: 100%;
  margin: 0.25rem 0 0;
  padding: 0.25rem;
  list-style: none;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.375rem;
  background: ${({ surfaceColor }) => surfaceColor};
  max-height: 220px;
  overflow: auto;
`

const Item = newStyled.li<{ textColor: string; active: boolean; borderColor: string }>`
  padding: 0.45rem 0.5rem;
  border-radius: 0.25rem;
  color: ${({ textColor }) => textColor};
  background: ${({ active, borderColor }) => (active ? borderColor : 'transparent')};
  cursor: pointer;
`

const AutocompleteCombobox = (props: AutocompleteComboboxProps) => {
  const { options, value, defaultValue, placeholder, onChange, onSelect, className } = props
  const colorConfig = useStyleSystem().colors
  const [query, setQuery] = React.useState(defaultValue ?? '')
  const [isOpen, setIsOpen] = React.useState(false)
  const [highlightedIndex, setHighlightedIndex] = React.useState(0)

  const inputValue = value ?? query
  const filtered = options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()))

  React.useEffect(() => {
    if (value !== undefined) setQuery(value)
  }, [value])

  const commit = (option: ComboboxOption) => {
    if (value === undefined) setQuery(option.label)
    onChange?.(option.value)
    onSelect?.(option)
    setIsOpen(false)
  }

  return (
    <Root className={className}>
      <Input
        value={inputValue}
        placeholder={placeholder}
        borderColor={getBorderColor(colorConfig, 0.45)}
        textColor={getTextColor(colorConfig)}
        surfaceColor={getSurfaceColor(colorConfig)}
        onFocus={() => setIsOpen(true)}
        onChange={(event) => {
          const next = event.target.value
          if (value === undefined) setQuery(next)
          onChange?.(next)
          setIsOpen(true)
          setHighlightedIndex(0)
        }}
        onKeyDown={(event) => {
          if (!isOpen || !filtered.length) return
          if (event.key === 'ArrowDown') {
            event.preventDefault()
            setHighlightedIndex((prev) => Math.min(filtered.length - 1, prev + 1))
          }
          if (event.key === 'ArrowUp') {
            event.preventDefault()
            setHighlightedIndex((prev) => Math.max(0, prev - 1))
          }
          if (event.key === 'Enter') {
            event.preventDefault()
            commit(filtered[highlightedIndex])
          }
          if (event.key === 'Escape') setIsOpen(false)
        }}
      />
      {isOpen && filtered.length > 0 && (
        <Menu borderColor={getBorderColor(colorConfig, 0.45)} surfaceColor={getSurfaceColor(colorConfig)}>
          {filtered.map((option, idx) => (
            <Item
              key={option.value}
              active={idx === highlightedIndex}
              textColor={getTextColor(colorConfig)}
              borderColor={getBorderColor(colorConfig, 0.2)}
              onMouseDown={(event) => {
                event.preventDefault()
                commit(option)
              }}
            >
              {option.label}
            </Item>
          ))}
        </Menu>
      )}
    </Root>
  )
}

export default React.memo(AutocompleteCombobox)
