// Customizable Container Component (ContainerComponent.tsx)
import React, { useContext } from "react";
import newStyled from "@emotion/styled";
import { SizeProps } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";
import {
    ColorConfigType,
} from "../../Mixins/Color";
import { ColorFamilyContext, MarginContext, PaddingContext } from "../../Mixins/context";

type ContainerType = "normal" | "flex" | "grid";

type ContainerComponentProps = {
  type?: ContainerType;
  bgColor?: string;
  padding?: SpacingProps;
  margin?: SpacingProps;
  border?: string;
  borderRadius?: string;
  children: React.ReactNode;
  className?: string;
  gridTemplateColumns?: string;
  flexDirection?: "row" | "column";
  justifyContent?: string;
  alignItems?: string;
};

type ContainerStyleProps = ContainerComponentProps & {
  paddingConfig?: SizeProps;
  marginConfig?: SizeProps;
  colorConfig?: ColorConfigType;
};

const StyledContainer = newStyled.div<ContainerStyleProps>`
  display: ${({ type }) =>
    type === "flex" ? "flex" : type === "grid" ? "grid" : "block"};
  ${({ type, gridTemplateColumns }) =>
    type === "grid" && gridTemplateColumns ? `grid-template-columns: ${gridTemplateColumns};` : ""}
  ${({ type, flexDirection }) =>
    type === "flex" && flexDirection ? `flex-direction: ${flexDirection};` : ""}
  background-color: ${({ bgColor, colorConfig }) =>
    bgColor || (colorConfig?.isDark ? colorConfig.foreGround : colorConfig?.backGround)};
  ${({padding, paddingConfig }) =>
    getSpacing({ spacingProps: padding, size: 'm', spaceConfig: paddingConfig, key: "padding" })}
  ${({margin, marginConfig }) =>
    getSpacing({ spacingProps: margin, size : 'm', spaceConfig: marginConfig, key: "margin" })}
  border: ${({ border }) => border || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "0em"};
  ${({ type, justifyContent }) =>
    type === "flex" ? `justify-content: ${justifyContent || "flex-start"};` : ""}
  ${({ type, alignItems }) =>
    type === "flex" ? `align-items: ${alignItems || "stretch"};` : ""}
`;

const ContainerComponent = React.memo((props: ContainerComponentProps) => {
  const {
    type = "normal",
    bgColor,
    padding,
    margin,
    border,
    borderRadius,
    children,
    className,
    gridTemplateColumns,
    flexDirection,
    justifyContent,
    alignItems,
    ...rest
  } = props;

const paddingConfig = useContext(PaddingContext)
const marginConfig = useContext(MarginContext)
const colorConfig = useContext(ColorFamilyContext)

  return (
    <StyledContainer
      type={type}
      bgColor={bgColor}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      className={className}
      gridTemplateColumns={gridTemplateColumns}
      flexDirection={flexDirection}
      paddingConfig={paddingConfig}
      marginConfig={marginConfig}
      colorConfig={colorConfig}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
});

export default ContainerComponent;
