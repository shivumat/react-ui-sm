// Customizable TextInput.tsx
import newStyled from "@emotion/styled";
import React, { DetailedHTMLProps, InputHTMLAttributes, useContext } from "react";
import { ColorConfigType, ColorFamilyType, getColor } from "../../Mixins/Color";
import { getFontStyling } from "../../Mixins/Font";
import { SizeProps, SizeType } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";
import { ColorFamilyContext, FontSizeContext, MarginContext, PaddingContext } from "../../Mixins/context";

type DefaultInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface TextInputProps extends Omit<DefaultInputProps , 'size'> {
  label?: string;
  placeholder?: string;
  customSize?: SizeType;
  className?: string;
  fontSize?: string;
  padding?: SpacingProps;
  margin?: SpacingProps;
  bgColor?: string;
  color?: string;
  colorFamily?: ColorFamilyType;
  outlined?: boolean;
  disabled?: boolean;
  borderColor?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onFocusBorderColor?: string;
  onBlurBorderColor?: string;
};

type TextInputStyleProps = TextInputProps & {
  paddingConfig: SizeProps;
  marginConfig: SizeProps;
  fontSizeConfig: SizeProps;
  colorConfig: ColorConfigType;
};

const StyledInputWrapper = newStyled.div<TextInputStyleProps>`
  display: flex;
  align-items: center;
  ${({ customSize, margin, marginConfig }) =>
    getSpacing({ spacingProps: margin, size: customSize, spaceConfig: marginConfig, key: "margin" })}
`;

const StyledInput = newStyled.input<TextInputStyleProps>`
  ${({ customSize, padding, paddingConfig }) =>
    getSpacing({ spacingProps: padding, size: customSize, spaceConfig: paddingConfig, key: "padding" })}
  ${({ customSize, fontSize, fontSizeConfig }) => getFontStyling({ size: customSize, fontSize, fontConfig: fontSizeConfig })}
  background-color: ${({ bgColor, disabled, colorConfig }) =>{
    const diasabledColor = colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround;
    return disabled ? diasabledColor : bgColor || (colorConfig?.isDark ? colorConfig.foreGround : colorConfig?.backGround)
}};
  color: ${({ color, colorConfig, disabled, colorFamily }) =>{
    const diasabledColor = colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround;
    const defaultColor = colorFamily ? getColor({ colorFamily, color, colorConfig, disabled }) : (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround);
    return disabled ? diasabledColor : color ?? defaultColor
}};
  border: ${({ outlined = true , borderColor, colorConfig }) =>
    outlined ? `1px solid ${borderColor || (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)}` : "none"};
  border-radius: 0.25em;
  width: 100%;
  outline: none;
  &:focus {
    border-color: ${({ onFocusBorderColor, colorConfig, colorFamily, color, disabled }) =>
      onFocusBorderColor || colorFamily ? getColor({ colorFamily, color, colorConfig, disabled }) : (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)};
  }
  &:hover {
    border-color: ${({ onBlurBorderColor, colorConfig, colorFamily, color , disabled}) =>
      onBlurBorderColor || colorFamily ? getColor({ colorFamily, color, colorConfig, disabled }) : (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)};
  }
`;

const TextInput = React.memo((props: TextInputProps ) => {
    const {
        label,
        placeholder,
        iconLeft,
        iconRight,
        disabled,
        className,
        customSize,
        ...rest
    } = props;

    const paddingConfig = useContext(PaddingContext)
    const marginConfig = useContext(MarginContext)
    const fontSizeConfig = useContext(FontSizeContext)
    const colorConfig = useContext(ColorFamilyContext)

    return (
        <StyledInputWrapper {...rest} customSize={customSize} paddingConfig={paddingConfig} marginConfig={marginConfig} fontSizeConfig={fontSizeConfig} colorConfig={colorConfig}>
        {iconLeft && <span>{iconLeft}</span>}
        <StyledInput
            placeholder={placeholder}
            disabled={disabled}
            aria-label={label}
            className={className}
            customSize={customSize}
            paddingConfig={paddingConfig}
            marginConfig={marginConfig}
            fontSizeConfig={fontSizeConfig}
            colorConfig={colorConfig}
            {...rest}
        />
        {iconRight && <span>{iconRight}</span>}
        </StyledInputWrapper>
    );
});

export default TextInput;
