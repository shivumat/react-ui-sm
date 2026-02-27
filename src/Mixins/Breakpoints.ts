export enum BreakpointEnum {
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
}

export type BreakpointType = keyof typeof BreakpointEnum
export type BreakpointProps = { [K in BreakpointType]: number }

export const BreakpointConfig: BreakpointProps = {
  xs: 360,
  s: 480,
  m: 768,
  l: 1024,
  xl: 1280,
  xxl: 1536,
}

export const getBreakpointValue = (key: BreakpointType, config: BreakpointProps = BreakpointConfig) => {
  return `${config[key]}px`
}

export const mediaUp = (key: BreakpointType, config: BreakpointProps = BreakpointConfig) => {
  return `@media (min-width: ${getBreakpointValue(key, config)})`
}

export const mediaDown = (key: BreakpointType, config: BreakpointProps = BreakpointConfig) => {
  return `@media (max-width: ${getBreakpointValue(key, config)})`
}

export const mediaBetween = (
  minKey: BreakpointType,
  maxKey: BreakpointType,
  config: BreakpointProps = BreakpointConfig,
) => {
  return `@media (min-width: ${getBreakpointValue(minKey, config)}) and (max-width: ${getBreakpointValue(maxKey, config)})`
}
