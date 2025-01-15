import newStyled from "@emotion/styled";
import { ColorConfigType, ColorFamilyType, darken, getColor, lighten } from "../../Mixins/Color";
import { getFontStyling } from "../../Mixins/Font";
import { SizeProps, SizeType } from "../../Mixins/Size";
import { getSpacing, SpacingProps } from "../../Mixins/Spacing";

interface AccordionLabelProps {
    label: string;
    showIcon?: boolean;
  }
  
interface AccordionComponentProps {
component: React.ReactNode;
}

type AccordionDisplayProps = AccordionLabelProps | AccordionComponentProps

export type AccordionItemProps = AccordionDisplayProps & {
    isOpen: boolean;
    onClick: () => void | Promise<void>;
    level?: number;
    items? : AccordionItemProps[]
}

type AccorionItemStyleProps = AccordionItemProps & {
    size?: SizeType;
    fontSize?: string;
    colorFamily?: ColorFamilyType;
    disabled?: boolean;
    padding?: SpacingProps; 
    paddingConfig: SizeProps;
    marginConfig: SizeProps;
    fontSizeConfig: SizeProps;
    colorConfig: ColorConfigType;
}

export interface AccordionListProps {
    items: AccordionItemProps[];
    margin?: SpacingProps; 
    marginConfig?: SizeProps;
    size?: SizeType;
    isOpen?: boolean;
    fontSize?: string;
    colorFamily?: ColorFamilyType;
    disabled?: boolean;
    padding?: SpacingProps; 
}


export const AccordionItemWrapper = newStyled.div<Omit<AccorionItemStyleProps , 'items'>>`
    ${({ padding, paddingConfig }) =>
        getSpacing({ spacingProps: padding, size: "m", spaceConfig: paddingConfig, key: "padding" })}
    cursor: ${({ disabled }) => (!disabled ? "pointer" : "default")};
    text-decoration: none;
    display: block;
    background-color: ${({ colorConfig, isOpen }) =>{
        const backGroundColor = colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround;
        return colorConfig.isDark ? lighten(!isOpen ? 0 : 20, backGroundColor) : darken(!isOpen ? 0 : 10, backGroundColor);
    }};
    color: ${({ colorFamily, colorConfig }) =>{
        const foreGroundColor = colorConfig.isDark ? colorConfig.backGround : colorConfig.foreGround;
        return colorFamily ? getColor({ colorFamily, colorConfig }) : foreGroundColor
    }};
    ${({ size, fontSize, fontSizeConfig }) => getFontStyling({ size, fontSize, fontConfig: fontSizeConfig })}
    border-radius: 4px;
  
    &:hover {
      background-color: ${({ colorConfig, disabled }) => {
        const backGroundColor = colorConfig.isDark ? colorConfig.foreGround : colorConfig.backGround;
        return colorConfig.isDark ? lighten(disabled ? 0 : 40, backGroundColor) : darken(disabled ? 0 : 5, backGroundColor);
        }};
      color: ${({ colorFamily, colorConfig }) =>{
        const foreGroundColor = colorConfig.isDark ? colorConfig.backGround : colorConfig.foreGround;
        return colorFamily ? getColor({ colorFamily, colorConfig }) : foreGroundColor
        }};
    }
  `;