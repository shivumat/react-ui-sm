import newStyled from "@emotion/styled";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ColorConfigType, ColorFamilyType, darken, getColor, lighten } from "../../Mixins/Color";
import { getFontStyling } from "../../Mixins/Font";
import { SizeProps, SizeType } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";

export type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

enum ButtonVariant {
    filled = 'filled',
    outlined = 'outlined',
    subtle = 'subtle'
}
export type ButtonVariantType = keyof typeof ButtonVariant

type ButtonShowProps = {label: string} | {children: React.ReactNode} | {loadingComponent?: React.ReactNode}

export type ButtonProps = ButtonShowProps & {
    size? : SizeType
    className?: string
    fontSize?: string
    padding?: SpacingProps
    margin?: SpacingProps
    bgColor?: string
    color?: string
    colorFamily?: ColorFamilyType
    variant?: ButtonVariantType
    leadingComp?: React.ReactNode
    trailingComp?: React.ReactNode
    disabled?: boolean
    borderRadius?: string
    ariaLabel?: string
}


type ButtonStyleProps = ButtonProps & {
  paddingConfig: SizeProps;
  marginConfig: SizeProps;
  fontSizeConfig: SizeProps;
  colorConfig: ColorConfigType;
};

const getBGColor = (
  colorConfig: ColorConfigType,
  bgColor?: string,
  variant: ButtonVariantType = "filled",
  colorFamily?: ColorFamilyType,
  disabled?: boolean
) => {
  if (variant === "filled") return getColor({ color: bgColor, colorConfig, colorFamily, disabled });
  return "transparent";
};

export const StyledButton = newStyled.button<ButtonStyleProps>`
  ${({ size, padding, paddingConfig }) =>
    getSpacing({ spacingProps: padding, size, spaceConfig: paddingConfig, key: "padding" })}
  ${({ size, margin, marginConfig }) =>
    getSpacing({ spacingProps: margin, size, spaceConfig: marginConfig, key: "margin" })}
  ${({ size, fontSize, fontSizeConfig }) => getFontStyling({ size, fontSize, fontConfig: fontSizeConfig })}
  ${({ bgColor, variant = "filled", colorConfig, colorFamily, disabled }) =>
    variant !== "subtle" ? `outline: 1px solid ${getColor({ colorFamily, color: bgColor, colorConfig, disabled })};` : ""}

  background-color: ${({ bgColor, variant = "filled", colorConfig, colorFamily, disabled }) =>
    getBGColor(colorConfig, bgColor, variant, colorFamily, disabled)};
  color: ${({ colorFamily, variant = "filled", color, colorConfig, disabled }) => {
    const foreGroundColor = colorConfig.isDark ? colorConfig.backGround : colorConfig.foreGround;
    const diasabledColor = colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround;
    if (variant === "subtle") return !disabled ? foreGroundColor : `${colorConfig?.disable}`;
    return variant === "filled" ? diasabledColor : getColor({ colorFamily, color, colorConfig, disabled });
  }};

  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "0.25em"};
  ${({ disabled, colorConfig }) => (!disabled ? "cursor: pointer;" : `opacity: ${colorConfig.isDark ? '0.4' : '1' };`)}
  &:hover {
    background-color: ${({ bgColor, variant = "filled", colorConfig, colorFamily, disabled }) => {
      const backGroundColor = colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround;
      if (variant !== "filled") return colorConfig.isDark ? lighten(disabled ? 0 : 40, backGroundColor) : darken(disabled ? 0 : 5, backGroundColor);
      return lighten(disabled ? 0 : 10, getColor({ color: bgColor, colorConfig, colorFamily, disabled }));
    }};
  }
  &:active {
    background-color: ${({ bgColor, variant = "filled", colorConfig, colorFamily, disabled }) => {
      const backGroundColor = colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround;
      if (variant !== "filled") return colorConfig.isDark ? lighten(disabled ? 0 : 20, backGroundColor) : darken(disabled ? 0 : 10, backGroundColor);
      return darken(disabled ? 0 : 10, getColor({ color: bgColor, colorConfig, colorFamily, disabled }));
    }};
  }
`;