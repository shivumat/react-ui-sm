import { SizeProps, SizeType } from "./Size";

export const LineHeightConfig : SizeProps  = {
    xxs: 1,
    xs: 1,
    s: 1,
    m: 1,
    l: 1,
    xl: 1,
    xxl: 1,
};

export const getLineHeightStyling = (info : {size?: SizeType; lineHeight?: string; lineHeightConfig?: SizeProps}) => {
    const {size = 'm', lineHeight, lineHeightConfig} = info
    const value = lineHeight ?? lineHeightConfig?.[size]
    if (!value) return ''
    return `line-height: ${value};`
}