import newStyled from "@emotion/styled";
import { useContext } from "react";
import { ColorFamilyContext, FontSizeContext, MarginContext, PaddingContext } from "../../Mixins/context";
import { AccordionItemProps, AccordionItemWrapper, AccordionListProps } from "./AccordionList";

const ChildrenContainer = newStyled.div`
    margin-left: 1em;
`

const AccordionItem = (props: AccordionItemProps) => {

    const {items, level = 0 , onClick, ...rest} = props
    const toShow = 'label' in props ? props.label : props.component

    const paddingConfig = useContext(PaddingContext)
    const marginConfig = useContext(MarginContext)
    const fontSizeConfig = useContext(FontSizeContext)
    const colorConfig = useContext(ColorFamilyContext)

    return (
        <>
        <AccordionItemWrapper onClick={onClick} {...rest} paddingConfig={paddingConfig} marginConfig={marginConfig} fontSizeConfig={fontSizeConfig} colorConfig={colorConfig}>
            {toShow}
        </AccordionItemWrapper>
        {items && rest.isOpen && <ChildrenContainer>
            {items.map((item, index) => <AccordionItem level={level + 1} key={`${index}_${level + 1}_accordian_item`} {...item} />)}
        </ChildrenContainer>}
        </>
    )
}


const AccordionList = (props: AccordionListProps) => {

  return (
      <>
        {props.items.map((item, index) => <AccordionItem key={`${index}_0_accordian_item`}  {...item} />)}
      </>
  )
}

export default AccordionList