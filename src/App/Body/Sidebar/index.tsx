import newStyled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router';
import { NavBar } from '@/Components/Navigation/NavbarTopBar';
import { navItems, validPaths } from '../config';
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
    const location = useLocation();
    const colorConfig = useStyleSystem().colors
    const rawPathId = location.pathname.replace(/^\/+/, '')
    const pathId = validPaths.includes(rawPathId) ? rawPathId : ''
  
    return (
      <SidebarContainer borderColor={getBorderColor(colorConfig)} surfaceColor={getSurfaceColor(colorConfig)}>
        <NavBar
            items={navItems}
            layout="sidebar"
            activeKey={pathId}
            onChange={(key) => navigate(key ? `/${key}` : '/', { replace: true })}
          />
      </SidebarContainer>
    )
}

export default Sidebar
