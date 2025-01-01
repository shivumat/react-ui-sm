import { useContext } from 'react';
import { ButtonProps, DefaultButtonProps, StyledButton } from './Button'
import newStyled from '@emotion/styled'
import { ColorFamilyContext, FontSizeContext, MarginContext, PaddingContext } from '../../Mixins/context'


const TrailingContainer = newStyled.span`
  display: inline-block;
  padding-left: 0.5em;
`
const LeadingContainer = newStyled.span`
  display: inline-block;
  padding-right: 0.5em;
`

const Button = (props: ButtonProps & DefaultButtonProps) => {

  const {
    leadingComp,
    trailingComp,
    disabled,
    ariaLabel,
    ...rest
  } = props;

  const paddingConfig = useContext(PaddingContext)
  const marginConfig = useContext(MarginContext)
  const fontSizeConfig = useContext(FontSizeContext)
  const colorConfig = useContext(ColorFamilyContext)


  if('loadingComponent' in props) {
    return <StyledButton {...rest} paddingConfig={paddingConfig} marginConfig={marginConfig} fontSizeConfig={fontSizeConfig} colorConfig={colorConfig} disabled>
      {props.loadingComponent}
    </StyledButton>
  }

  const toShow = 'label' in props ? props.label : props.children

  return (
    <StyledButton {...rest} paddingConfig={paddingConfig} marginConfig={marginConfig} fontSizeConfig={fontSizeConfig} colorConfig={colorConfig} disabled={disabled}>
          {leadingComp && <LeadingContainer>{leadingComp}</LeadingContainer>}
          {toShow}
          {trailingComp && <TrailingContainer>{trailingComp}</TrailingContainer>}
    </StyledButton>
  )
}

export default Button