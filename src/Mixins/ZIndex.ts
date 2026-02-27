export enum ZIndexEnum {
  base = 'base',
  dropdown = 'dropdown',
  sticky = 'sticky',
  overlay = 'overlay',
  modal = 'modal',
  popover = 'popover',
  tooltip = 'tooltip',
  toast = 'toast',
}

export type ZIndexType = keyof typeof ZIndexEnum
export type ZIndexProps = { [K in ZIndexType]: number }

export const ZIndexConfig: ZIndexProps = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  overlay: 1040,
  modal: 1060,
  popover: 1080,
  tooltip: 1100,
  toast: 1120,
}

export const getZIndexStyling = (info: {
  zIndex?: number
  zIndexType?: ZIndexType
  zIndexConfig?: ZIndexProps
}) => {
  const { zIndex, zIndexType = 'base', zIndexConfig } = info
  const value = zIndex ?? zIndexConfig?.[zIndexType]
  if (value === undefined || value === null) return ''
  return `z-index: ${value};`
}
