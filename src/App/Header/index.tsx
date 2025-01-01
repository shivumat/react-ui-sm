import React, { useContext } from 'react'
import newStyled from '@emotion/styled'
import { ColorFamilyContext } from '../../Mixins/context'
import TextComponent from '../../Components/Text'
import ContainerComponent from '../../Components/Container'

const HeaderContainer = newStyled(ContainerComponent)<{isDark : boolean, foregroundColor: string, backgroundColor: string}>`
    width : 100%;
    height : 60px;
    border-bottom : 1px solid ${({backgroundColor, foregroundColor, isDark}) => isDark ? backgroundColor : foregroundColor}33;
`

const Header = () => {

  const colorConfig = useContext(ColorFamilyContext)

  return (
    <HeaderContainer 
      type='flex' 
      margin={{all: '0px'}}
      padding={{y: '0px', x: '20px'}}
      alignItems='center'
      isDark={colorConfig.isDark} 
      foregroundColor={colorConfig.foreGround} 
      backgroundColor={colorConfig.backGround}
    >
        <TextComponent size='xl' label='SMUI' margin={{all: '0px'}}/>
    </HeaderContainer>
  )
}

export default Header