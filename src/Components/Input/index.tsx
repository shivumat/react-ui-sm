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
  areaLabel?: string;
  placeholder?: string;
  customSize?: SizeType;
  className?: string;
  labelClass?: string;
  helpClass?: string;
  errorClass?: string;
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
  hasError?: boolean;
  onErrorBorderColor?: string;
  helpText?: string | React.ReactNode;
  errorText?: string | React.ReactNode;
};

type TextInputStyleProps = TextInputProps & {
  paddingConfig: SizeProps;
  marginConfig: SizeProps;
  fontSizeConfig: SizeProps;
  colorConfig: ColorConfigType;
};

const StyledInputWrapper = newStyled.div<TextInputStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ margin, marginConfig }) =>
    getSpacing({ spacingProps: margin, size : 'm', spaceConfig: marginConfig, key: "margin" })}
`;

const StyledLabel = newStyled.label<{fontSize?: string, fontSizeConfig: SizeProps, customSize?: SizeType, colorConfig: ColorConfigType, colorFamily?: ColorFamilyType, color?: string}>`
  margin-bottom: 0.5em;
  font-weight: 500;
  font-size: 0.9em;
  color: ${({ color, colorConfig, colorFamily }) =>{
    const defaultColor = colorFamily ? getColor({ colorFamily, color, colorConfig, disabled : false }) : (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround);
    return color ?? defaultColor
  }};
  ${({ fontSize, fontSizeConfig, customSize }) => getFontStyling({ size : customSize, fontSize, fontConfig: fontSizeConfig })}
`;

const StyledText = newStyled.div<{ isError?: boolean , colorConfig: ColorConfigType}>`
  margin-top: 0.5em;
  font-size: 0.8em;
  color: ${({ isError, colorConfig }) => (isError ? colorConfig.danger : colorConfig.tertiary)};
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
  border: ${({ outlined = true, borderColor, hasError, onErrorBorderColor, colorConfig }) =>
      hasError
        ? `1px solid ${onErrorBorderColor || colorConfig?.danger}`
        : outlined
        ? `1px solid ${borderColor || (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)}`
        : "none"};
  border-radius: 0.25em;
  width: 100%;
  outline: none;
  &:focus {
    border-color: ${({ hasError, onErrorBorderColor, onFocusBorderColor, colorFamily, color, colorConfig, disabled }) =>
      hasError
        ? onErrorBorderColor || colorConfig?.danger
        : onFocusBorderColor || colorFamily ? getColor({ colorFamily, color, colorConfig, disabled }) : (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)};
  }
  &:hover {
    border-color: ${({ hasError, onErrorBorderColor, onBlurBorderColor, colorFamily, color, colorConfig, disabled }) =>
      hasError
        ? onErrorBorderColor || colorConfig?.danger
        : onBlurBorderColor || colorFamily ? getColor({ colorFamily, color, colorConfig, disabled }) : (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)};
  }
`;

const TextInput = React.memo((props: TextInputProps ) => {
    const {
        label,
        areaLabel,
        placeholder,
        iconLeft,
        iconRight,
        disabled,
        className,
        customSize,
        hasError,
        errorText,
        helpText,
        ...rest
    } = props;

    const paddingConfig = useContext(PaddingContext)
    const marginConfig = useContext(MarginContext)
    const fontSizeConfig = useContext(FontSizeContext)
    const colorConfig = useContext(ColorFamilyContext)

    return (
        <StyledInputWrapper {...rest} customSize={customSize} paddingConfig={paddingConfig} marginConfig={marginConfig} fontSizeConfig={fontSizeConfig} colorConfig={colorConfig}>
          {label && <StyledLabel className={`label ${rest.labelClass}`} fontSize={rest.fontSize} fontSizeConfig={fontSizeConfig} customSize={customSize} colorConfig={colorConfig} color={rest.color}>{label}</StyledLabel>}
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            {iconLeft && <span>{iconLeft}</span>}
            <StyledInput
                placeholder={placeholder}
                disabled={disabled}
                aria-label={areaLabel}
                className={className}
                customSize={customSize}
                paddingConfig={paddingConfig}
                marginConfig={marginConfig}
                fontSizeConfig={fontSizeConfig}
                colorConfig={colorConfig}
                hasError={hasError}
                {...rest}
            />
            {iconRight && <span>{iconRight}</span>}
          </div>
          {hasError && errorText && <StyledText colorConfig={colorConfig} className={`help ${rest.helpClass}`} isError>{errorText}</StyledText>}
          {!hasError && helpText && <StyledText colorConfig={colorConfig} className={`error-help ${rest.errorClass}`} >{helpText}</StyledText>}
        </StyledInputWrapper>
    );
});

export default TextInput;
