export enum OpacityEnum {
  transparent = 'transparent',
  faint = 'faint',
  muted = 'muted',
  medium = 'medium',
  strong = 'strong',
  opaque = 'opaque',
}

export type OpacityType = keyof typeof OpacityEnum
export type OpacityProps = { [K in OpacityType]: number }

export const OpacityConfig: OpacityProps = {
  transparent: 0,
  faint: 0.24,
  muted: 0.48,
  medium: 0.72,
  strong: 0.88,
  opaque: 1,
}

export const getOpacityStyling = (info: {
  opacity?: number
  opacityType?: OpacityType
  opacityConfig?: OpacityProps
}) => {
  const { opacity, opacityType = 'opaque', opacityConfig } = info
  const value = opacity ?? opacityConfig?.[opacityType]
  if (value === undefined || value === null) return ''
  return `opacity: ${value};`
}
