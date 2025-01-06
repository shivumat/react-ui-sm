// Updated DropdownInput Component (DropdownInput.tsx)
import newStyled from "@emotion/styled";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ColorConfigType, ColorFamilyType, getColor } from "../../Mixins/Color";
import { getFontStyling } from "../../Mixins/Font";
import { SizeProps, SizeType } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";
import { ColorFamilyContext, FontSizeContext, MarginContext, PaddingContext } from "../../Mixins/context";

export type DropdownOption = {
  label: string;
  value: string | number;
  component?: React.ReactNode;
  disabled?: boolean;
};

type DropdownInputProps = {
  label?: string;
  areaLabel?: string;
  options?: DropdownOption[];
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  hasError?: boolean;
  color?: string;
  onErrorBorderColor?: string;
  colorFamily?: ColorFamilyType;
  helpText?: string | React.ReactNode;
  errorText?: string | React.ReactNode;
  disabled?: boolean;
  customSize?: SizeType;
  padding?: SpacingProps;
  margin?: SpacingProps;
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
  outlined?: boolean;
  labelClass?: string;
  helpClass?: string;
  errorClass?: string;
  className?: string;
  onFocusBorderColor?: string;
  onBlurBorderColor?: string;
};

type DropdownStyleProps = DropdownInputProps & {
  paddingConfig: SizeProps;
  marginConfig: SizeProps;
  fontSizeConfig: SizeProps;
  colorConfig: ColorConfigType;
};

const StyledDropdownWrapper = newStyled.div<{ marginConfig: SizeProps; margin?: SpacingProps }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  ${({ margin, marginConfig }) =>
    getSpacing({ spacingProps: margin, size: "m", spaceConfig: marginConfig, key: "margin" })}
`;

const StyledLabel = newStyled.label<{ fontSize?: string; fontSizeConfig: SizeProps; customSize?: SizeType; colorConfig: ColorConfigType; colorFamily?: ColorFamilyType; color?: string }>`
  margin-bottom: 0.5em;
  font-weight: 500;
  font-size: 0.9em;
  color: ${({ color, colorConfig, colorFamily }) =>{
    const defaultColor = colorFamily ? getColor({ colorFamily, color, colorConfig, disabled : false }) : (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround);
    return color ?? defaultColor
}};
  ${({ fontSize, fontSizeConfig, customSize }) => getFontStyling({ size: customSize, fontSize, fontConfig: fontSizeConfig })}
`;

const StyledInputToggle = newStyled.div<DropdownStyleProps>`
  ${({ customSize, padding, paddingConfig }) =>
    getSpacing({ spacingProps: padding, size: customSize, spaceConfig: paddingConfig, key: "padding" })}
  ${({ customSize, fontSize, fontSizeConfig }) => getFontStyling({ size: customSize, fontSize, fontConfig: fontSizeConfig })}
  background-color: ${({ bgColor, disabled, colorConfig }) => {
    const disabledColor = colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround;
    return disabled ? disabledColor : bgColor || (colorConfig?.isDark ? colorConfig.foreGround : colorConfig?.backGround);
  }};
  color: ${({ colorConfig }) => (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)};
  border: ${({ outlined = true, borderColor, hasError, onErrorBorderColor, colorConfig }) =>
      hasError
        ? `1px solid ${onErrorBorderColor || colorConfig?.danger}`
        : outlined
        ? `1px solid ${borderColor || (colorConfig?.isDark ? colorConfig.backGround : colorConfig?.foreGround)}`
        : "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "0.25em"};
  width: 100%; /* Match the parent's width */
  box-sizing: border-box; /* Includes padding and border in width */
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDropdownOptions = newStyled.div<DropdownStyleProps>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ bgColor, colorConfig }) =>
    bgColor || (colorConfig?.isDark ? colorConfig.foreGround : colorConfig.backGround)};
  color: ${({ colorConfig }) => (colorConfig?.isDark ? colorConfig.backGround : colorConfig.foreGround)};
  border: 1px solid ${({ colorConfig }) =>
    colorConfig?.isDark ? colorConfig.backGround : colorConfig.foreGround};
  border-radius: ${({ borderRadius }) => borderRadius || "0.25em"};
  margin-top: 0.5em;
  z-index: 1000;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

const StyledOption = newStyled.div<{ isSelected?: boolean; colorConfig: ColorConfigType }>`
  padding: 0.5em;
  cursor: pointer;
  background-color: ${({ isSelected, colorConfig }) => (isSelected ? colorConfig.primary : "transparent")};
  color: ${({ isSelected, colorConfig }) =>
    isSelected ? colorConfig.foreGround : colorConfig?.isDark ? colorConfig.backGround : colorConfig.foreGround};
  &:hover {
    background-color: ${({ colorConfig }) => colorConfig.secondary};
    color: ${({ colorConfig }) => colorConfig.foreGround};
  }
`;

const Dropdown = React.memo((props: DropdownInputProps) => {
  const {
    label,
    options = [],
    placeholder,
    value,
    onChange = () => {},
    hasError,
    errorText,
    helpText,
    disabled,
    customSize,
    labelClass,
    helpClass,
    errorClass,
    ...rest
  } = props;

  const [selectedValue, setSelectedValue] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const paddingConfig = useContext(PaddingContext);
  const marginConfig = useContext(MarginContext);
  const fontSizeConfig = useContext(FontSizeContext);
  const colorConfig = useContext(ColorFamilyContext);

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleSelect = useCallback(
    (option: DropdownOption) => {
      setSelectedValue(option.value);
      setIsOpen(false);
      onChange(option.value);
    },
    [onChange]
  );

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <StyledDropdownWrapper marginConfig={marginConfig} {...rest}>
      {label && (
        <StyledLabel
          colorConfig={colorConfig}
          className={labelClass}
          fontSize={rest.fontSize}
          fontSizeConfig={fontSizeConfig}
          customSize={customSize}
        >
          {label}
        </StyledLabel>
      )}
      <StyledInputToggle
        ref={toggleRef}
        onClick={handleToggle}
        role="button"
        aria-expanded={isOpen}
        hasError={hasError}
        paddingConfig={paddingConfig}
        marginConfig={marginConfig}
        fontSizeConfig={fontSizeConfig}
        colorConfig={colorConfig}
        {...rest}
      >
        {selectedValue
          ? options.find((opt) => opt.value === selectedValue)?.component ??
            options.find((opt) => opt.value === selectedValue)?.label
          : placeholder || "Select..."}
      </StyledInputToggle>
      {isOpen && !!options.length && (
        <StyledDropdownOptions
          ref={dropdownRef}
          colorConfig={colorConfig}
          bgColor={rest.bgColor}
          borderRadius={rest.borderRadius}
          paddingConfig={paddingConfig}
          marginConfig={marginConfig}
          fontSizeConfig={fontSizeConfig}
        >
          {options.map((option) => (
            <StyledOption
              key={option.value}
              isSelected={selectedValue === option.value}
              colorConfig={colorConfig}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </StyledOption>
          ))}
        </StyledDropdownOptions>
      )}
      {hasError && errorText && (
        <div className={errorClass} style={{ color: colorConfig.danger, fontSize: "0.8em" }}>
          {errorText}
        </div>
      )}
      {!hasError && helpText && (
        <div className={helpClass} style={{ color: colorConfig.tertiary, fontSize: "0.8em" }}>
          {helpText}
        </div>
      )}
    </StyledDropdownWrapper>
  );
});

export default Dropdown;