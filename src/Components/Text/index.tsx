import newStyled from "@emotion/styled";
import React, { useContext } from "react";
import {
    ColorConfigType,
} from "../../Mixins/Color";
import { ColorFamilyContext, FontSizeContext } from "../../Mixins/context";
import { getFontStyling } from "../../Mixins/Font";
import { SizeProps, SizeType } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";

type TagType = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

type TextComponentProps = {
    label: string;
    tag?: TagType;
    size?: SizeType;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    margin?: SpacingProps;
    padding?: SpacingProps;
    className?: string;
    underline?: boolean;
    italic?: boolean;
    ariaLabel?: string;
};

type TextStyleProps = TextComponentProps & {
    fontSizeConfig?: SizeProps;
    colorConfig?: ColorConfigType;
};

const StyledText = newStyled.div<TextStyleProps>`
    white-space: pre-wrap;
  ${({ size, margin }) =>
        getSpacing({ spacingProps: margin, size, key: "margin" })}
  ${({ size, padding }) =>
        getSpacing({ spacingProps: padding, size, key: "padding" })}
  ${({ size, fontSize, fontSizeConfig }) => getFontStyling({ size, fontSize, fontConfig: fontSizeConfig })}
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  color: ${({ color, colorConfig }) =>
        color || (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

const TextComponent = React.memo((props: Omit<TextComponentProps, 'children'>) => {
    const {
        label,
        tag = "p",
        className,
        ariaLabel,
        ...rest
    } = props;

    const CustomTag = tag as keyof JSX.IntrinsicElements;

    const fontSizeConfig = useContext(FontSizeContext)
    const colorConfig = useContext(ColorFamilyContext)

    return (
        <StyledText label={label} as={CustomTag} className={className} aria-label={ariaLabel} fontSizeConfig={fontSizeConfig} colorConfig={colorConfig}  {...rest}>
            {label}
        </StyledText>
    );
});

export default TextComponent;