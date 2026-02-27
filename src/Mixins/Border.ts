export enum BorderWidthEnum {
  none = 'none',
  hairline = 'hairline',
  thin = 'thin',
  medium = 'medium',
  thick = 'thick',
}

export enum BorderStyleEnum {
  solid = 'solid',
  dashed = 'dashed',
  dotted = 'dotted',
  double = 'double',
  none = 'none',
}

export type BorderWidthType = keyof typeof BorderWidthEnum
export type BorderStyleType = keyof typeof BorderStyleEnum

export type BorderWidthProps = { [K in BorderWidthType]: string }
export type BorderStyleProps = { [K in BorderStyleType]: string }

export const BorderWidthConfig: BorderWidthProps = {
  none: '0',
  hairline: '1px',
  thin: '1px',
  medium: '2px',
  thick: '3px',
}

export const BorderStyleConfig: BorderStyleProps = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
  double: 'double',
  none: 'none',
}

export type BorderProps = {
  color?: string
  width?: string
  style?: string
  widthType?: BorderWidthType
  styleType?: BorderStyleType
  borderWidthConfig?: BorderWidthProps
  borderStyleConfig?: BorderStyleProps
}

export const getBorderStyling = (info: BorderProps) => {
  const {
    color = 'currentColor',
    width,
    style,
    widthType = 'hairline',
    styleType = 'solid',
    borderWidthConfig,
    borderStyleConfig,
  } = info

  const finalWidth = width ?? borderWidthConfig?.[widthType]
  const finalStyle = style ?? borderStyleConfig?.[styleType]
  if (!finalWidth || !finalStyle) return ''
  if (finalStyle === 'none' || finalWidth === '0') return 'border: 0;'
  return `border: ${finalWidth} ${finalStyle} ${color};`
}
