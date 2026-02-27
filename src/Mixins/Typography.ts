export enum TypographyScaleEnum {
  caption = 'caption',
  bodyS = 'bodyS',
  body = 'body',
  bodyL = 'bodyL',
  titleS = 'titleS',
  title = 'title',
  titleL = 'titleL',
  display = 'display',
}

export type TypographyScaleType = keyof typeof TypographyScaleEnum

export type TypographyToken = {
  fontSize: string
  lineHeight: string
  fontWeight: number
  letterSpacing?: string
}

export type TypographyScaleProps = { [K in TypographyScaleType]: TypographyToken }

export const TypographyScaleConfig: TypographyScaleProps = {
  caption: { fontSize: '0.75rem', lineHeight: '1rem', fontWeight: 500, letterSpacing: '0.01em' },
  bodyS: { fontSize: '0.875rem', lineHeight: '1.25rem', fontWeight: 400 },
  body: { fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 400 },
  bodyL: { fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: 400 },
  titleS: { fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: 600 },
  title: { fontSize: '1.5rem', lineHeight: '2rem', fontWeight: 600 },
  titleL: { fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: 700 },
  display: { fontSize: '2.25rem', lineHeight: '2.75rem', fontWeight: 700, letterSpacing: '-0.01em' },
}

export const getTypographyStyling = (info: {
  variant?: TypographyScaleType
  typographyConfig?: TypographyScaleProps
  fontSize?: string
  lineHeight?: string
  fontWeight?: number
  letterSpacing?: string
}) => {
  const {
    variant = 'body',
    typographyConfig,
    fontSize,
    lineHeight,
    fontWeight,
    letterSpacing,
  } = info

  const token = typographyConfig?.[variant]
  const finalFontSize = fontSize ?? token?.fontSize
  const finalLineHeight = lineHeight ?? token?.lineHeight
  const finalFontWeight = fontWeight ?? token?.fontWeight
  const finalLetterSpacing = letterSpacing ?? token?.letterSpacing

  if (!finalFontSize || !finalLineHeight || finalFontWeight === undefined || finalFontWeight === null) return ''

  const lines = [
    `font-size: ${finalFontSize};`,
    `line-height: ${finalLineHeight};`,
    `font-weight: ${finalFontWeight};`,
  ]

  if (finalLetterSpacing) lines.push(`letter-spacing: ${finalLetterSpacing};`)
  return lines.join(' ')
}
