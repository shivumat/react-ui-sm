import { ReactElement } from "react";
import { NavItem } from "../../Components/Navigation/NavbarTopBar/Navbar";
import ButtonContent from "./Content/ButtonContent";
import DropdownContent from "./Content/DropdownContent";
import HomeContent from "./Content/HomeContent";
import InputContent from "./Content/InputContent";

export enum MixinsTab {
    PADDING = 'Padding',
    MARGIN = 'Margin',
    TYPOGRAPHY = 'Typography',
    COLOR = 'Color',
    BORDER = 'Border',
    SHADOW = 'Shadow',
}


export const routesConfig : { path?: string, component: ReactElement , label: string}[] = [
    {component : <HomeContent /> , label : 'Home'},
    {path : 'button', component : <ButtonContent /> , label : 'Button'},
    {path : 'input', component : <InputContent /> , label : 'Input'},
    {path : 'dropdown', component : <DropdownContent /> , label : 'Dropdown'},
]

export const navItems: NavItem[] = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'settings',
      label: 'Settings',
      children: [
        { key: 'profile', label: 'Profile' },
        {
          key: 'account',
          label: 'Account',
          children: [
            { key: 'privacy', label: 'Privacy' },
            { key: 'security', label: 'Security' },
          ],
        },
      ],
    },
    {
      key: 'about',
      label: 'About',
    },
  ];