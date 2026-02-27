// Customizable TextInput.tsx
import newStyled from "@emotion/styled";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { ColorConfigType, ColorFamilyType, getBorderColor, getColor, getSurfaceColor, getTextColor } from "@/Mixins/Color";
import { getFontStyling } from "@/Mixins/Font";
import { SizeProps, SizeType } from "@/Mixins/Size";
import { getSpacing, SpacingProps } from "@/Mixins/Spacing";
import { withStyleSystem, WithStyleSystemProps } from "@/Mixins/context";

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
    const defaultColor = colorFamily ? getColor({ colorFamily, color, colorConfig, disabled : false }) : getTextColor(colorConfig);
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
    const disabledColor = getSurfaceColor(colorConfig);
    return disabled ? disabledColor : bgColor || getSurfaceColor(colorConfig)
}};
  color: ${({ color, colorConfig, disabled, colorFamily }) =>{
    const disabledColor = getTextColor(colorConfig);
    const defaultColor = colorFamily ? getColor({ colorFamily, color, colorConfig, disabled }) : getTextColor(colorConfig);
    return disabled ? disabledColor : color ?? defaultColor
}};
  border: ${({ outlined = true, borderColor, hasError, onErrorBorderColor, colorConfig }) =>
      hasError
        ? `1px solid ${onErrorBorderColor || colorConfig?.danger}`
        : outlined
        ? `1px solid ${borderColor || getBorderColor(colorConfig, 0.45)}`
        : "none"};
  border-radius: 0.25em;
  width: 100%;
  outline: none;
  &:focus {
    border-color: ${({ hasError, onErrorBorderColor, onFocusBorderColor, colorFamily, color, colorConfig, disabled }) =>
      hasError
        ? onErrorBorderColor || colorConfig?.danger
        : onFocusBorderColor || colorFamily ? getColor({ colorFamily, color, colorConfig, disabled }) : getTextColor(colorConfig)};
  }
  &:hover {
    border-color: ${({ hasError, onErrorBorderColor, onBlurBorderColor, colorFamily, color, colorConfig, disabled }) =>
      hasError
        ? onErrorBorderColor || colorConfig?.danger
        : onBlurBorderColor || colorFamily ? getColor({ colorFamily, color, colorConfig, disabled }) : getTextColor(colorConfig)};
  }
`;

const TextInputBase = (props: TextInputProps & WithStyleSystemProps) => {
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
        styleSystem,
        ...rest
    } = props;

    const paddingConfig = styleSystem.spacing.padding
    const marginConfig = styleSystem.spacing.margin
    const fontSizeConfig = styleSystem.typography.fontSize
    const colorConfig = styleSystem.colors

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
};

const TextInput = React.memo(withStyleSystem(TextInputBase))

export default TextInput;
