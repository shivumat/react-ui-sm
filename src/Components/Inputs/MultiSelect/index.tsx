import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

export type MultiSelectOption = {
  value: string
  label: string
  disabled?: boolean
}

type MultiSelectProps = {
  options: MultiSelectOption[]
  values?: string[]
  defaultValues?: string[]
  onChange?: (values: string[]) => void
  placeholder?: string
  className?: string
}

const Root = newStyled.div<{ borderColor: string; surfaceColor: string }>`
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.375rem;
  background: ${({ surfaceColor }) => surfaceColor};
  padding: 0.5rem;
`

const Chips = newStyled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.4rem;
`

const Chip = newStyled.span<{ textColor: string; borderColor: string }>`
  font-size: 0.8rem;
  padding: 0.2rem 0.45rem;
  border-radius: 9999px;
  border: 1px solid ${({ borderColor }) => borderColor};
  color: ${({ textColor }) => textColor};
`

const Options = newStyled.div`
  display: grid;
  gap: 0.3rem;
`

const OptionLabel = newStyled.label<{ textColor: string; disabled?: boolean }>`
  display: inline-flex;
  gap: 0.45rem;
  align-items: center;
  color: ${({ textColor }) => textColor};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

const MultiSelect = (props: MultiSelectProps) => {
  const { options, values, defaultValues = [], onChange, placeholder = 'Select options', className } = props
  const colorConfig = useStyleSystem().colors
  const [internalValues, setInternalValues] = React.useState(defaultValues)
  const selected = values ?? internalValues

  const toggle = (nextValue: string) => {
    const next = selected.includes(nextValue) ? selected.filter((v) => v !== nextValue) : [...selected, nextValue]
    if (values === undefined) setInternalValues(next)
    onChange?.(next)
  }

  return (
    <Root className={className} borderColor={getBorderColor(colorConfig, 0.45)} surfaceColor={getSurfaceColor(colorConfig)}>
      <Chips>
        {selected.length === 0 && <Chip textColor={colorConfig.tertiary} borderColor={getBorderColor(colorConfig, 0.35)}>{placeholder}</Chip>}
        {selected.map((value) => {
          const option = options.find((item) => item.value === value)
          return option ? <Chip key={value} textColor={getTextColor(colorConfig)} borderColor={getBorderColor(colorConfig, 0.5)}>{option.label}</Chip> : null
        })}
      </Chips>
      <Options>
        {options.map((option) => (
          <OptionLabel key={option.value} textColor={getTextColor(colorConfig)} disabled={option.disabled}>
            <input
              type="checkbox"
              checked={selected.includes(option.value)}
              disabled={option.disabled}
              onChange={() => toggle(option.value)}
            />
            {option.label}
          </OptionLabel>
        ))}
      </Options>
    </Root>
  )
}

export default React.memo(MultiSelect)
