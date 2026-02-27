// Customizable Card Component (CardComponent.tsx)
import React from "react";
import newStyled from "@emotion/styled";
import { SizeProps } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";
import { ColorConfigType, getBorderColor, getSurfaceColor } from "../../Mixins/Color";
import { withStyleSystem, WithStyleSystemProps } from "../../Mixins/context";

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
    bgColor || getSurfaceColor(colorConfig)};
  ${({ padding, paddingConfig }) =>
    getSpacing({ spacingProps: padding, size : 'm', spaceConfig: paddingConfig, key: "padding" })}
  ${({ margin }) =>
    getSpacing({ spacingProps: margin, size:'m', key: "margin" })}
  border: ${({ border, colorConfig }) => border || `1px solid ${getBorderColor(colorConfig)}`};
  border-radius: ${({ borderRadius }) => borderRadius || "0.5em"};
  box-shadow: ${({ boxShadow, colorConfig }) =>
    boxShadow || (colorConfig?.isDark ? `0 4px 6px ${colorConfig.backGround}64` : `0 4px 6px ${colorConfig.foreGround}64`)};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardHeader = newStyled.div<{borderColor: string}>`
  padding: 1em;
  font-weight: bold;
  border-bottom: 1px solid ${({borderColor}) => borderColor};
`;

const CardFooter = newStyled.div<{borderColor: string}>`
  padding: 1em;
  border-top: 1px solid ${({borderColor}) => borderColor};
`;

const CardComponentBase = (props: CardComponentProps & WithStyleSystemProps) => {
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
    styleSystem,
    ...rest
  } = props;

  const paddingConfig = styleSystem.spacing.padding
  const colorConfig = styleSystem.colors
  const borderColor = getBorderColor(colorConfig)

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
      {header && <CardHeader borderColor={borderColor}>{header}</CardHeader>}
      {children}
      {footer && <CardFooter borderColor={borderColor}>{footer}</CardFooter>}
    </StyledCard>
  );
};

const CardComponent = React.memo(withStyleSystem(CardComponentBase))

export default CardComponent;
