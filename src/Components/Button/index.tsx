import React from 'react';
import { ButtonProps, DefaultButtonProps, StyledButton } from './Button'
import newStyled from '@emotion/styled'
import { useStyleSystem } from '../../Mixins/context'


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

  const styleSystem = useStyleSystem()
  const paddingConfig = styleSystem.spacing.padding
  const marginConfig = styleSystem.spacing.margin
  const fontSizeConfig = styleSystem.typography.fontSize
  const colorConfig = styleSystem.colors


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

export default React.memo(Button)
