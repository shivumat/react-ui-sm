import { SizeProps, SizeType } from "./Size"

type SpacingAllProps = {
    all: string
}

type SpacingAxisProps = {
    x?: string,
    y?: string,
}

type SpacingSideProps = {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
}

export type SpacingProps = SpacingAllProps | SpacingAxisProps | SpacingSideProps

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
    const hasValue = (value: string | number | undefined | null) => value !== undefined && value !== null && value !== ''

    if(!spacingProps) {
        const value = spaceConfig?.[size]
        if (!hasValue(value)) return ''
        return `${key}: ${value};`
    }
    if ('all' in spacingProps) {
        if (!hasValue(spacingProps.all)) return ''
        return `${key}: ${spacingProps.all};`
    }
    if ('x' in spacingProps || 'y' in spacingProps) {
        const value = `${spacingProps?.y ?? '0px'} ${spacingProps?.x ?? '0px'}`
        return `${key}: ${value};`
    }
    if ('top' in spacingProps || 'right' in spacingProps || 'bottom' in spacingProps || 'left' in spacingProps) {
        const value = `${spacingProps?.top ?? '0px'} ${spacingProps?.right ?? '0px'} ${spacingProps?.bottom ?? '0px'} ${spacingProps?.left ?? '0px'}`
        return `${key}: ${value};`
    }
    return ''
}
