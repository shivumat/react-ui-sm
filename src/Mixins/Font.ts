import { SizeType, SizeProps } from "./Size";

export const FontSizeConfig : SizeProps = {
    xxs: "0.5em",
    xs: "0.625em",
    s: "0.75em",
    m: "1em",
    l: "1.25em",
    xl: "1.5em",
    xxl: "2em",
}

export const getFontStyling = (info : {size?: SizeType; fontSize?: string; fontConfig?: SizeProps}) => {
    const {size = 'm', fontSize, fontConfig} = info
    const value = fontSize ?? fontConfig?.[size]
    if (value === undefined || value === null || value === '') return ''
    return `font-size: ${value};`
}
