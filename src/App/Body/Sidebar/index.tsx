import newStyled from '@emotion/styled';
import { useNavigate } from 'react-router';
import Button from '../../../Components/Inputs/Button';
import { routesConfig } from '../config';
// import { NavBar } from '../../../Components/Navigation/NavbarTopBar'
import { useStyleSystem } from "@/Mixins/context";
import { getBorderColor, getSurfaceColor } from "@/Mixins/Color";

const SidebarContainer = newStyled.div<{borderColor: string; surfaceColor: string}>`
    display: flex;
    flex-direction: column;
    height : 100%;
    width : 100%;
    background-color: ${({surfaceColor}) => surfaceColor};
    border-right : 1px solid ${({borderColor}) => borderColor};
    overflow-y: auto;
`

const Sidebar = () => {
    const navigate = useNavigate();
    const colorConfig = useStyleSystem().colors
  
    return (
      <SidebarContainer borderColor={getBorderColor(colorConfig)} surfaceColor={getSurfaceColor(colorConfig)}>
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
