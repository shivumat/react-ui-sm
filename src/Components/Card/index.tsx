// Customizable Card Component (CardComponent.tsx)
import React, { useContext } from "react";
import newStyled from "@emotion/styled";
import { SizeType, SizeProps } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";
import { getFontStyling } from "../../Mixins/Font";
import {
  ColorFamilyProps,
  ColorConfigType
} from "../../Mixins/Color";
import { ColorFamilyContext, PaddingContext } from "../../Mixins/context";

type CardComponentProps = {
  bgColor?: string;
  padding?: SpacingProps;
  margin?: SpacingProps;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

type CardStyleProps = CardComponentProps & {
  paddingConfig: SizeProps;
  colorConfig: ColorConfigType;
};

const StyledCard = newStyled.div<CardStyleProps>`
  background-color: ${({ bgColor, colorConfig }) =>
    bgColor || (colorConfig?.isDark ? colorConfig.foreGround : colorConfig.backGround)};
  ${({ padding, paddingConfig }) =>
    getSpacing({ spacingProps: padding, size : 'm', spaceConfig: paddingConfig, key: "padding" })}
  ${({ margin }) =>
    getSpacing({ spacingProps: margin, size:'m', key: "margin" })}
  border: ${({ border }) => border || "1px solid #e0e0e0"};
  border-radius: ${({ borderRadius }) => borderRadius || "0.5em"};
  box-shadow: ${({ boxShadow, colorConfig }) =>
    boxShadow || (colorConfig?.isDark ? `0 4px 6px ${colorConfig.backGround}64` : `0 4px 6px ${colorConfig.foreGround}64`)};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardHeader = newStyled.div`
  padding: 1em;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0;
`;

const CardFooter = newStyled.div`
  padding: 1em;
  border-top: 1px solid #e0e0e0;
`;

const CardComponent = React.memo((props: CardComponentProps) => {
  const {
    bgColor,
    padding,
    margin,
    border,
    borderRadius,
    boxShadow,
    header,
    footer,
    children,
    className,
    ...rest
  } = props;

const paddingConfig = useContext(PaddingContext)
const colorConfig = useContext(ColorFamilyContext)

  return (
    <StyledCard
        bgColor={bgColor}
        padding={padding}
        margin={margin}
        border={border}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        className={className}
        paddingConfig={paddingConfig}
        colorConfig={colorConfig}
      {...rest}
    >
      {header && <CardHeader>{header}</CardHeader>}
      {children}
      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  );
});

export default CardComponent;
