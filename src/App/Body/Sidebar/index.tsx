import newStyled from '@emotion/styled'
import React, { useContext } from 'react'
import { navItems, routesConfig } from '../config'
import Button from '../../../Components/Button'
import { useNavigate } from 'react-router'
// import { NavBar } from '../../../Components/Navbar'
import { ColorFamilyContext } from '../../../Mixins/context'

const SidebarContainer = newStyled.div<{isDark : boolean, foregroundColor: string, backgroundColor: string}>`
    display: flex;
    flex-direction: column;
    height : 100%;
    width : 100%;
    border-right : 1px solid  ${({backgroundColor, foregroundColor, isDark}) => isDark ? backgroundColor : foregroundColor}33;
    overflow-y: auto;
`

const Sidebar = (props : {pathId? : string}) => {

    const navigate = useNavigate();
    const colorConfig = useContext(ColorFamilyContext)
  
    return (
      <SidebarContainer isDark={colorConfig.isDark} foregroundColor={colorConfig.foreGround} backgroundColor={colorConfig.backGround}>
        {routesConfig.map(route => <Button variant='subtle' label={route.label} onClick={() => navigate(route.path ?? '/', { replace: true })}/>)}
        {/* <NavBar
            items={navItems}
            layout="sidebar"
            onChange={(key) => navigate(key, { replace: true })}
          /> */}
      </SidebarContainer>
    )
}

export default Sidebar