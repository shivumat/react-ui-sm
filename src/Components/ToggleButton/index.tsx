// Customizable Toggle Button Component (ToggleButton.tsx)
import newStyled from "@emotion/styled";
import React from "react";
import { ColorConfigType, getBorderColor, getSurfaceColor } from "../../Mixins/Color";
import { useStyleSystem } from "../../Mixins/context";
import { SpacingProps } from "../../Mixins/Spacing";

type ToggleButtonProps = {
  isOn: boolean;
  toggleOnColor?: string;
  toggleOffColor?: string;
  size?: number;
  borderRadius?: string;
  padding?: SpacingProps;
  margin?: SpacingProps;
  onToggle: (state: boolean) => void;
  className?: string;
};

type ToggleButtonStyleProps = ToggleButtonProps & {
  colorConfig: ColorConfigType;
};


const StyledToggleButton = newStyled.div<Pick<ToggleButtonStyleProps, 'toggleOnColor' | 'toggleOffColor' | 'borderRadius' | 'size' | 'colorConfig' | 'isOn'>>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ size = 50}) => `${size}px`};
  height: ${({ size = 50}) => `${size / 2}px`};
  background-color: ${({ isOn, toggleOnColor, toggleOffColor, colorConfig }) =>
    isOn
      ? toggleOnColor || colorConfig.primary
      : toggleOffColor || getBorderColor(colorConfig, 0.45)};
  border-radius: ${({ borderRadius }) => borderRadius || "25px"};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ToggleCircle = newStyled.div<Pick<ToggleButtonStyleProps, 'toggleOnColor' | 'toggleOffColor' | 'size' | 'colorConfig' | 'isOn'>>`
  width: ${({ size = 50 }) => `${size/ 2.5}px`};
  ${({colorConfig, size = 50}) => colorConfig.isDark ? `border : ${size/25}px solid ${getBorderColor(colorConfig, 0.5)}` : ''};
  outline: none;
  height: ${({ size = 50 }) => `${size/ 2.5}px`};
  background-color: ${({colorConfig}) => getSurfaceColor(colorConfig)};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isOn, size = 50}) => (isOn ? `calc(100% - ${((27*size)/50)}px)` : `${((size)/10)}px`)};
  transition: left 0.3s ease;
`;

const ToggleButton = React.memo((props: ToggleButtonProps) => {
  const {
    isOn = false,
    toggleOnColor,
    toggleOffColor,
    size = 50,
    borderRadius,
    padding,
    margin,
    onToggle,
    className,
    ...rest
  } = props;

  const handleToggle = () => {
    const newState = !isOn;
    if (onToggle) onToggle(newState);
  };

  const colorConfig = useStyleSystem().colors

  return (
    <StyledToggleButton
      {...rest}
      className={className}
      isOn={isOn}
      toggleOnColor={toggleOnColor}
      toggleOffColor={toggleOffColor}
      borderRadius={borderRadius}
      size={size}
      colorConfig={colorConfig}
      onClick={handleToggle}
    >
      <ToggleCircle colorConfig={colorConfig} isOn={isOn} size={size} />
    </StyledToggleButton>
  );
});

export default ToggleButton;
