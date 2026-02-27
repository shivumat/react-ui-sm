import { BreakpointProps, BreakpointType, BreakpointConfig, getBreakpointValue } from './Breakpoints'

export type ContainerMaxWidthProps = { [K in BreakpointType]: string }

export const ContainerMaxWidthConfig: ContainerMaxWidthProps = {
  xs: '100%',
  s: '100%',
  m: '720px',
  l: '960px',
  xl: '1140px',
  xxl: '1320px',
}

export type GridConfigType = {
  columns: number
  gutter: string
  rowGap: string
}

export const GridConfig: GridConfigType = {
  columns: 12,
  gutter: '16px',
  rowGap: '16px',
}

export const getContainerStyling = (info: {
  breakpoint?: BreakpointType
  containerMaxWidth?: string
  containerConfig?: ContainerMaxWidthProps
}) => {
  const { breakpoint = 'l', containerMaxWidth, containerConfig } = info
  const maxWidth = containerMaxWidth ?? containerConfig?.[breakpoint]
  if (!maxWidth) return ''
  return `width: 100%; max-width: ${maxWidth}; margin-inline: auto;`
}

export const getGridStyling = (info: {
  columns?: number
  gutter?: string
  rowGap?: string
  gridConfig?: GridConfigType
}) => {
  const { columns, gutter, rowGap, gridConfig } = info
  const finalColumns = columns ?? gridConfig?.columns ?? 12
  const finalGutter = gutter ?? gridConfig?.gutter ?? '16px'
  const finalRowGap = rowGap ?? gridConfig?.rowGap ?? finalGutter
  return `display: grid; grid-template-columns: repeat(${finalColumns}, minmax(0, 1fr)); column-gap: ${finalGutter}; row-gap: ${finalRowGap};`
}

export const getResponsiveContainerRules = (
  breakpoints: BreakpointProps = BreakpointConfig,
  containerConfig: ContainerMaxWidthProps = ContainerMaxWidthConfig,
) => {
  const entries: BreakpointType[] = ['m', 'l', 'xl', 'xxl']
  return entries
    .map((key) => `@media (min-width: ${getBreakpointValue(key, breakpoints)}) { max-width: ${containerConfig[key]}; }`)
    .join('\n')
}
