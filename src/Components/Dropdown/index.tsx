import newStyled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ColorConfigType, ColorFamilyType, getActiveOptionBackgroundColor, getBorderColor, getColor, getReadableTextOnColor, getSurfaceColor, getTextColor } from "../../Mixins/Color";
import { getFontStyling } from "../../Mixins/Font";
import { SizeProps, SizeType } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";
import { withStyleSystem, WithStyleSystemProps } from "../../Mixins/context";

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
  color: ${({ colorConfig }) => getTextColor(colorConfig)};
  
  ${({ fontSize, fontSizeConfig, customSize }) => getFontStyling({ size: customSize, fontSize, fontConfig: fontSizeConfig })}
`;

const StyledInputToggle = newStyled.div<DropdownStyleProps>`
  ${({ customSize, padding, paddingConfig }) =>
    getSpacing({ spacingProps: padding, size: customSize, spaceConfig: paddingConfig, key: "padding" })}
  ${({ customSize, fontSize, fontSizeConfig }) => getFontStyling({ size: customSize, fontSize, fontConfig: fontSizeConfig })}
  background-color: ${({ bgColor, disabled, colorConfig }) => {
    const disabledColor = getSurfaceColor(colorConfig);
    return disabled ? disabledColor : bgColor || getSurfaceColor(colorConfig);
  }};
  color: ${({ color, colorConfig, colorFamily }) =>{
    const defaultColor = colorFamily ? getColor({ colorFamily, color, colorConfig, disabled : false }) : getTextColor(colorConfig);
    return color ?? defaultColor
}};
  border: ${({ outlined = true, borderColor, hasError, onErrorBorderColor, colorConfig }) =>
      hasError
        ? `1px solid ${onErrorBorderColor || colorConfig?.danger}`
        : outlined
        ? `1px solid ${borderColor || getBorderColor(colorConfig, 0.45)}`
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
    bgColor || getSurfaceColor(colorConfig)};
  color: ${({ colorConfig }) => getTextColor(colorConfig)};
  border: 1px solid ${({ colorConfig }) =>
    getBorderColor(colorConfig, 0.45)};
  border-radius: ${({ borderRadius }) => borderRadius || "0.25em"};
  z-index: 1000;
  height : auto;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

const StyledOption = newStyled.div<{ isSelected?: boolean; colorConfig: ColorConfigType; colorFamily?: ColorFamilyType; color?: string; customSize?: SizeType; padding?: SpacingProps; paddingConfig: SizeProps; fontSize?: string; fontSizeConfig: SizeProps }>`
  padding: 0.5em;
  cursor: pointer;
   ${({ customSize, padding, paddingConfig }) =>
    getSpacing({ spacingProps: padding, size: customSize, spaceConfig: paddingConfig, key: "padding" })}
  ${({ customSize, fontSize, fontSizeConfig }) => getFontStyling({ size: customSize, fontSize, fontConfig: fontSizeConfig })}
  background-color: ${({ isSelected, colorConfig , colorFamily, color}) => {
    const activeBackground = getActiveOptionBackgroundColor({ colorConfig, colorFamily, color });
    return isSelected ? activeBackground : "transparent"
  }};
  color: ${({ isSelected, colorConfig, colorFamily, color }) => {
    if (!isSelected) return getTextColor(colorConfig)
    const activeBackground = getActiveOptionBackgroundColor({ colorConfig, colorFamily, color });
    return getReadableTextOnColor(activeBackground, colorConfig)
  }};
  &:hover {
    background-color: ${({ colorConfig , colorFamily, color}) => getActiveOptionBackgroundColor({ colorConfig, colorFamily, color })};
    color: ${({ colorConfig, colorFamily, color }) => {
      const activeBackground = getActiveOptionBackgroundColor({ colorConfig, colorFamily, color });
      return getReadableTextOnColor(activeBackground, colorConfig)
    }};
  }
`;

const DropdownBase = (props: DropdownInputProps & WithStyleSystemProps) => {
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
    styleSystem,
    ...rest
  } = props;

  const [selectedValue, setSelectedValue] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const toggleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const paddingConfig = styleSystem.spacing.padding
  const marginConfig = styleSystem.spacing.margin
  const fontSizeConfig = styleSystem.typography.fontSize
  const colorConfig = styleSystem.colors

  const updateDropdownPosition = useCallback(() => {
    if (!toggleRef.current) return

    const rect = toggleRef.current.getBoundingClientRect();
    const dropdownHeight = dropdownRef.current?.scrollHeight ?? 0;
    const viewportHeight = window.innerHeight;

    const top = rect.bottom + dropdownHeight > viewportHeight ? Math.max(8, rect.top - dropdownHeight) : rect.bottom;

    setDropdownPosition({
      top,
      left: rect.left,
      width: rect.width,
    });
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
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
    if (!isOpen) return

    updateDropdownPosition();

    const handleViewportChange = () => updateDropdownPosition();
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [isOpen, options, updateDropdownPosition]);

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
        customSize={customSize}
        {...rest}
      >
        {selectedValue
          ? options.find((opt) => opt.value === selectedValue)?.component ??
            options.find((opt) => opt.value === selectedValue)?.label
          : placeholder || "Select..."}
      </StyledInputToggle>
      {isOpen && !!options.length &&
        ReactDOM.createPortal(
          <StyledDropdownOptions
            customSize={customSize}
            ref={dropdownRef}
            style={{
              position: "fixed",
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
            }}
            colorConfig={colorConfig}
            bgColor={rest.bgColor}
            borderRadius={rest.borderRadius}
            paddingConfig={paddingConfig}
            marginConfig={marginConfig}
            fontSizeConfig={fontSizeConfig}
            color={rest.color}
            colorFamily={rest.colorFamily}
          >
            {options.map((option) => (
              <StyledOption
                customSize={customSize}
                padding={rest.padding}
                paddingConfig={paddingConfig}
                fontSize={rest.fontSize}
                fontSizeConfig={fontSizeConfig}
                key={option.value}
                isSelected={selectedValue === option.value}
                colorConfig={colorConfig}
                color={rest.color}
                colorFamily={rest.colorFamily}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </StyledOption>
            ))}
          </StyledDropdownOptions>,
          document.body
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
};

const Dropdown = React.memo(withStyleSystem(DropdownBase))

export default Dropdown;
