import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type SignaturePadProps = {
  width?: number
  height?: number
  lineWidth?: number
  onChange?: (dataUrl: string) => void
  className?: string
}

const Root = newStyled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.4rem;
`

const Canvas = newStyled.canvas<{ borderColor: string; surfaceColor: string }>`
  touch-action: none;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.35rem;
  background: ${({ surfaceColor }) => surfaceColor};
`

const Actions = newStyled.div`
  display: flex;
  justify-content: flex-end;
`

const ClearButton = newStyled.button<{ textColor: string }>`
  border: none;
  background: transparent;
  color: ${({ textColor }) => textColor};
  cursor: pointer;
`

const SignaturePad = (props: SignaturePadProps) => {
  const { width = 320, height = 140, lineWidth = 2, onChange, className } = props
  const colorConfig = useStyleSystem().colors
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const drawingRef = React.useRef(false)

  const getCtx = () => canvasRef.current?.getContext('2d') ?? null

  React.useEffect(() => {
    const ctx = getCtx()
    if (!ctx) return
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = getTextColor(colorConfig)
  }, [colorConfig, lineWidth])

  const start = (x: number, y: number) => {
    const ctx = getCtx()
    if (!ctx) return
    drawingRef.current = true
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const move = (x: number, y: number) => {
    if (!drawingRef.current) return
    const ctx = getCtx()
    if (!ctx) return
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const end = () => {
    if (!drawingRef.current) return
    drawingRef.current = false
    const data = canvasRef.current?.toDataURL('image/png')
    if (data) onChange?.(data)
  }

  const getPoint = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return { x: 0, y: 0 }

    if ('touches' in event) {
      const touch = event.touches[0] ?? event.changedTouches[0]
      return { x: touch.clientX - rect.left, y: touch.clientY - rect.top }
    }

    return { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }

  return (
    <Root className={className}>
      <Canvas
        ref={canvasRef}
        width={width}
        height={height}
        borderColor={getBorderColor(colorConfig, 0.5)}
        surfaceColor={getSurfaceColor(colorConfig)}
        onMouseDown={(event) => {
          const p = getPoint(event)
          start(p.x, p.y)
        }}
        onMouseMove={(event) => {
          const p = getPoint(event)
          move(p.x, p.y)
        }}
        onMouseUp={end}
        onMouseLeave={end}
        onTouchStart={(event) => {
          const p = getPoint(event)
          start(p.x, p.y)
        }}
        onTouchMove={(event) => {
          event.preventDefault()
          const p = getPoint(event)
          move(p.x, p.y)
        }}
        onTouchEnd={end}
      />
      <Actions>
        <ClearButton
          type="button"
          textColor={getTextColor(colorConfig)}
          onClick={() => {
            const ctx = getCtx()
            if (!ctx || !canvasRef.current) return
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            onChange?.('')
          }}
        >
          Clear
        </ClearButton>
      </Actions>
    </Root>
  )
}

export default React.memo(SignaturePad)
