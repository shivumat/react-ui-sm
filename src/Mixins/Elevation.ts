export enum ElevationEnum {
  none = 'none',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export type ElevationType = keyof typeof ElevationEnum
export type ElevationProps = { [K in ElevationType]: string }

export const ElevationConfig: ElevationProps = {
  none: 'none',
  xs: '0 1px 2px rgba(0, 0, 0, 0.08)',
  s: '0 2px 4px rgba(0, 0, 0, 0.10)',
  m: '0 4px 8px rgba(0, 0, 0, 0.12)',
  l: '0 8px 16px rgba(0, 0, 0, 0.16)',
  xl: '0 12px 24px rgba(0, 0, 0, 0.20)',
}

export const getElevationStyling = (info: {
  elevation?: string
  elevationType?: ElevationType
  elevationConfig?: ElevationProps
}) => {
  const { elevation, elevationType = 'none', elevationConfig } = info
  const value = elevation ?? elevationConfig?.[elevationType]
  if (value === undefined || value === null || value === '') return ''
  return `box-shadow: ${value};`
}
