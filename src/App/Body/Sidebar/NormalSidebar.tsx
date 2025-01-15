import newStyled from '@emotion/styled';
import { useContext } from 'react';
import { ColorFamilyContext } from '../../../Mixins/context';
import SidebarAcordion from './SidebarAccordion';

const SidebarContainer = newStyled.div<{isDark : boolean, foregroundColor: string, backgroundColor: string}>`
    display: flex;
    flex-direction: column;
    height : 100%;
    width : 100%;
    border-right : 1px solid  ${({backgroundColor, foregroundColor, isDark}) => isDark ? backgroundColor : foregroundColor}33;
    overflow-y: auto;
`

const NormalSidebar = () => {
    const colorConfig = useContext(ColorFamilyContext)
  
    return (
      <SidebarContainer isDark={colorConfig.isDark} foregroundColor={colorConfig.foreGround} backgroundColor={colorConfig.backGround}>
        <SidebarAcordion />
      </SidebarContainer>
    )
}

export default NormalSidebar