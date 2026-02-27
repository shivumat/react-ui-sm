import newStyled from '@emotion/styled';
import ContainerComponent from '../../Components/Container';
import TextComponent from '../../Components/Text';
import ToggleButton from '../../Components/ToggleButton';
import { useStyleSystem } from '../../Mixins/context';
import { getBorderColor } from '../../Mixins/Color';

const HeaderContainer = newStyled(ContainerComponent)<{borderColor: string}>`
    height : 60px;
    outline : 1px solid ${({borderColor}) => borderColor};
`

const Header = (props : {setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const colorConfig = useStyleSystem().colors

  return (
    <HeaderContainer 
      type='flex'
      justifyContent='space-between'
      margin={{all: '0px'}}
      padding={{x: '20px'}}
      alignItems='center'
      borderColor={getBorderColor(colorConfig)}
    >
        <TextComponent size='xl' label='SMUI' margin={{all: '0px'}}/>
        <ToggleButton isOn={colorConfig.isDark} onToggle={(nextState) => props.setIsDarkMode(nextState)}/>
    </HeaderContainer>
  )
}

export default Header
