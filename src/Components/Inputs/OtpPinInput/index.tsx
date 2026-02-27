import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type OtpPinInputProps = {
  length?: number
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  className?: string
}

const Root = newStyled.div`
  display: inline-flex;
  gap: 0.4rem;
`

const Box = newStyled.input<{ borderColor: string; textColor: string; surfaceColor: string }>`
  width: 2.25rem;
  height: 2.5rem;
  text-align: center;
  font-size: 1rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.35rem;
  color: ${({ textColor }) => textColor};
  background: ${({ surfaceColor }) => surfaceColor};
  outline: none;
`

const OtpPinInput = (props: OtpPinInputProps) => {
  const { length = 6, value, onChange, onComplete, className } = props
  const colorConfig = useStyleSystem().colors
  const [internal, setInternal] = React.useState(Array.from({ length }, () => ''))
  const refs = React.useRef<HTMLInputElement[]>([])

  React.useEffect(() => {
    if (value !== undefined) {
      const next = Array.from({ length }, (_, idx) => value[idx] ?? '')
      setInternal(next)
    }
  }, [length, value])

  const commit = (next: string[]) => {
    if (value === undefined) setInternal(next)
    const joined = next.join('')
    onChange?.(joined)
    if (joined.length === length && !joined.includes('')) onComplete?.(joined)
  }

  return (
    <Root className={className}>
      {Array.from({ length }).map((_, idx) => (
        <Box
          key={idx}
          ref={(el) => {
            if (el) refs.current[idx] = el
          }}
          inputMode="numeric"
          maxLength={1}
          value={internal[idx] ?? ''}
          borderColor={getBorderColor(colorConfig, 0.5)}
          textColor={getTextColor(colorConfig)}
          surfaceColor={getSurfaceColor(colorConfig)}
          onChange={(event) => {
            const char = event.target.value.replace(/[^0-9a-zA-Z]/g, '').slice(0, 1)
            const next = [...internal]
            next[idx] = char
            commit(next)
            if (char && idx < length - 1) refs.current[idx + 1]?.focus()
          }}
          onKeyDown={(event) => {
            if (event.key === 'Backspace' && !internal[idx] && idx > 0) refs.current[idx - 1]?.focus()
          }}
        />
      ))}
    </Root>
  )
}

export default React.memo(OtpPinInput)
