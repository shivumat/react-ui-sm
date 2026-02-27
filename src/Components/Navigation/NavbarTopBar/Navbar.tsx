// types.ts
import React from 'react';
/**
 * Describes a single navigation item (menu option).
 */
export type NavItem = {
  label: string;
  key: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  onClick?: () => void;
};

/**
 * Main NavBar props.
 */
export interface NavBarProps {
  items: NavItem[];
  layout: 'tabs' | 'sidebar';
  activeKey?: string;
  onChange?: (key: string) => void;
}
