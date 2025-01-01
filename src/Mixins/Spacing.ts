import { SizeProps, SizeType } from "./Size"

export type SpacingProps = {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
} | {
    x?: string,
    y?: string,
} | {
    all?: string
}

export const PaddingConfig : SizeProps = {
    xxs: "0.5em 0.75em",
    xs: "0.5em 0.75em",
    s: "0.5em 0.75em",
    m: "0.5em 0.75em",
    l: "0.5em 0.75em",
    xl: "0.5em 0.75em",
    xxl: "0.5em 0.75em",
}

export const MarginConfig : SizeProps = {
    xxs: "0.5em 0.5em",
    xs: "0.5em 0.5em",
    s: "0.5em 0.5em",
    m: "0.5em 0.5em",
    l: "0.5em 0.5em",
    xl: "0.5em 0.5em",
    xxl: "0.5em 0.5em",
}

export const getSpacing = (info : {spacingProps?: SpacingProps; size? : SizeType; spaceConfig? : SizeProps; key : 'margin' | 'padding'}) => {
    const {spacingProps, size = 'm', spaceConfig, key } = info
    let value
    if(!spacingProps) {
        value = spaceConfig?.[size]
        if (!value) return ''
        return `${key}: ${value};`
    }
    if ('all' in spacingProps) {
        value = `${spacingProps.all}`
        if (!value) return ''
        return `${key}: ${value};`
    }
    if ('x' in spacingProps || 'y' in spacingProps) {
        value = `${spacingProps?.y ?? '0px'} ${spacingProps?.x ?? '0px'}`
        if (!value) return ''
        return `${key}: ${value};`
    }
    if ('top' in spacingProps || 'right' in spacingProps || 'bottom' in spacingProps || 'left' in spacingProps) {
        value = `${spacingProps?.top ?? '0px'} ${spacingProps?.right ?? '0px'} ${spacingProps?.bottom ?? '0px'} ${spacingProps?.left ?? '0px'}`
        if (!value) return ''
        return `${key}: ${value};`
    }
    if (!value) return ''
    return `${key}: ${value};`
}