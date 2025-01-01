import newStyled from '@emotion/styled';
import { useContext } from 'react';
import ContainerComponent from '../../Components/Container';
import TextComponent from '../../Components/Text';
import ToggleButton from '../../Components/ToggleButton';
import { ColorFamilyContext } from '../../Mixins/context';

const HeaderContainer = newStyled(ContainerComponent)<{isDark : boolean, foregroundColor: string, backgroundColor: string}>`
    height : 60px;
    outline : 1px solid ${({backgroundColor, foregroundColor, isDark}) => isDark ? backgroundColor : foregroundColor}33;
`

const Header = (props : {setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const colorConfig = useContext(ColorFamilyContext)

  return (
    <HeaderContainer 
      type='flex'
      justifyContent='space-between'
      margin={{all: '0px'}}
      padding={{x: '20px'}}
      alignItems='center'
      isDark={colorConfig.isDark} 
      foregroundColor={colorConfig.foreGround} 
      backgroundColor={colorConfig.backGround}
    >
        <TextComponent size='xl' label='SMUI' margin={{all: '0px'}}/>
        <ToggleButton isOn={colorConfig.isDark} onToggle={() => props.setIsDarkMode((prev) => !prev)}/>
    </HeaderContainer>
  )
}

export default Header