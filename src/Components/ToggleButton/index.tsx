// Customizable Toggle Button Component (ToggleButton.tsx)
import newStyled from "@emotion/styled";
import React, { useContext, useState } from "react";
import { ColorConfigType } from "../../Mixins/Color";
import { ColorFamilyContext } from "../../Mixins/context";
import { SpacingProps } from "../../Mixins/Spacing";

type ToggleButtonProps = {
  isOn: boolean;
  onColor?: string;
  offColor?: string;
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


const StyledToggleButton = newStyled.div<Pick<ToggleButtonStyleProps, 'onColor' | 'offColor' | 'borderRadius' | 'size' | 'colorConfig' | 'isOn'>>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size ? `calc(${size} / 2)` : "25px"};
  background-color: ${({ isOn, onColor, offColor, colorConfig }) =>
    isOn
      ? onColor || (colorConfig.isDark ? colorConfig.backGround : colorConfig.foreGround)
      : offColor || (!colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround)};
  border-radius: ${({ borderRadius }) => borderRadius || "25px"};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ToggleCircle = newStyled.div<Pick<ToggleButtonStyleProps, 'onColor' | 'offColor' | 'size' | 'colorConfig' | 'isOn'>>`
  width: ${({ size }) => size ? `calc(${size} / 2.5)` : "20px"};
  ${({colorConfig}) => colorConfig.isDark ? `border : 1px solid ${colorConfig.foreGround}` : ''};
  outline: none;
  height: ${({ size }) => size ? `calc(${size} / 2.5)` : "20px"};
  background-color: ${({colorConfig}) => colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ isOn }) => (isOn ? "calc(100% - 25px)" : "5px")};
  transition: left 0.3s ease;
`;

const ToggleButton = React.memo((props: ToggleButtonProps) => {
  const {
    isOn: initialIsOn = false,
    onColor,
    offColor,
    size,
    borderRadius,
    padding,
    margin,
    onToggle,
    className,
    ...rest
  } = props;

  const [isOn, setIsOn] = useState<boolean>(initialIsOn);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) onToggle(newState);
  };

   const colorConfig = useContext(ColorFamilyContext)

  return (
    <StyledToggleButton
      {...rest}
      className={className}
      isOn={isOn}
      onColor={onColor}
      offColor={offColor}
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
