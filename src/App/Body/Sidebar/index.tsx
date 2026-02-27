import newStyled from '@emotion/styled';
import { useNavigate } from 'react-router';
import Button from '../../../Components/Button';
import { routesConfig } from '../config';
// import { NavBar } from '../../../Components/Navbar'
import { useStyleSystem } from '../../../Mixins/context';

const SidebarContainer = newStyled.div<{isDark : boolean, foregroundColor: string, backgroundColor: string}>`
    display: flex;
    flex-direction: column;
    height : 100%;
    width : 100%;
    border-right : 1px solid  ${({backgroundColor, foregroundColor, isDark}) => isDark ? backgroundColor : foregroundColor}33;
    overflow-y: auto;
`

const Sidebar = () => {
    const navigate = useNavigate();
    const colorConfig = useStyleSystem().colors
  
    return (
      <SidebarContainer isDark={colorConfig.isDark} foregroundColor={colorConfig.foreGround} backgroundColor={colorConfig.backGround}>
        {routesConfig.map(route => <Button variant='subtle' label={route.label} onClick={() => navigate(`/${route.path ?? ''}`, { replace: true })}/>)}
        {/* <NavBar
            items={navItems}
            layout="sidebar"
            onChange={(key) => navigate(key, { replace: true })}
          /> */}
      </SidebarContainer>
    )
}

export default Sidebar
