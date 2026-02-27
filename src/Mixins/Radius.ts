export enum RadiusEnum {
  none = 'none',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  pill = 'pill',
  circle = 'circle',
}

export type RadiusType = keyof typeof RadiusEnum
export type RadiusProps = { [K in RadiusType]: string }

export const RadiusConfig: RadiusProps = {
  none: '0',
  xs: '2px',
  s: '4px',
  m: '8px',
  l: '12px',
  xl: '16px',
  pill: '9999px',
  circle: '50%',
}

export const getRadiusStyling = (info: {
  radius?: string
  radiusType?: RadiusType
  radiusConfig?: RadiusProps
}) => {
  const { radius, radiusType = 'm', radiusConfig } = info
  const value = radius ?? radiusConfig?.[radiusType]
  if (value === undefined || value === null || value === '') return ''
  return `border-radius: ${value};`
}
