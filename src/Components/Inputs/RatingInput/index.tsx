import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type RatingInputProps = {
  value?: number
  defaultValue?: number
  max?: number
  onChange?: (value: number) => void
  className?: string
}

const Root = newStyled.div`
  display: inline-flex;
  gap: 0.2rem;
`

const StarButton = newStyled.button<{ active: boolean; activeColor: string; idleColor: string }>`
  border: none;
  background: transparent;
  color: ${({ active, activeColor, idleColor }) => (active ? activeColor : idleColor)};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
`

const RatingInput = (props: RatingInputProps) => {
  const { value, defaultValue = 0, max = 5, onChange, className } = props
  const colorConfig = useStyleSystem().colors
  const [internal, setInternal] = React.useState(defaultValue)
  const selected = value ?? internal

  return (
    <Root className={className}>
      {Array.from({ length: max }, (_, idx) => idx + 1).map((score) => (
        <StarButton
          key={score}
          type="button"
          active={score <= selected}
          activeColor={colorConfig.warning}
          idleColor={getBorderColor(colorConfig, 0.55)}
          onClick={() => {
            if (value === undefined) setInternal(score)
            onChange?.(score)
          }}
          aria-label={`Rate ${score}`}
        >
          ★
        </StarButton>
      ))}
    </Root>
  )
}

export default React.memo(RatingInput)
