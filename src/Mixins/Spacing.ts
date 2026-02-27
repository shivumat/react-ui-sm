import { SizeProps, SizeType } from "./Size"

export enum SpacingScaleEnum {
    none = 'none',
    xxs = 'xxs',
    xs = 'xs',
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl',
    xxl = 'xxl',
}

export type SpacingScaleType = keyof typeof SpacingScaleEnum
export type SpacingScaleProps = { [K in SpacingScaleType]: string }

export const SpacingScaleConfig: SpacingScaleProps = {
    none: '0',
    xxs: '0.125rem',
    xs: '0.25rem',
    s: '0.5rem',
    m: '0.75rem',
    l: '1rem',
    xl: '1.5rem',
    xxl: '2rem',
}

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
    xxs: `${SpacingScaleConfig.xxs} ${SpacingScaleConfig.s}`,
    xs: `${SpacingScaleConfig.xs} ${SpacingScaleConfig.m}`,
    s: `${SpacingScaleConfig.s} ${SpacingScaleConfig.l}`,
    m: `${SpacingScaleConfig.m} ${SpacingScaleConfig.xl}`,
    l: `${SpacingScaleConfig.l} ${SpacingScaleConfig.xl}`,
    xl: `${SpacingScaleConfig.xl} ${SpacingScaleConfig.xxl}`,
    xxl: `${SpacingScaleConfig.xxl} ${SpacingScaleConfig.xxl}`,
}

export const MarginConfig : SizeProps = {
    xxs: `${SpacingScaleConfig.xxs} ${SpacingScaleConfig.xxs}`,
    xs: `${SpacingScaleConfig.xs} ${SpacingScaleConfig.xs}`,
    s: `${SpacingScaleConfig.s} ${SpacingScaleConfig.s}`,
    m: `${SpacingScaleConfig.m} ${SpacingScaleConfig.m}`,
    l: `${SpacingScaleConfig.l} ${SpacingScaleConfig.l}`,
    xl: `${SpacingScaleConfig.xl} ${SpacingScaleConfig.xl}`,
    xxl: `${SpacingScaleConfig.xxl} ${SpacingScaleConfig.xxl}`,
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
