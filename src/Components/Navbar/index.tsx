// NavBar.tsx
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavBarProps, NavItem } from './Navbar';

/* ------------------ Emotion Styled Components ------------------ */

const Container = styled.nav<{ layout: 'tabs' | 'sidebar' }>`
  ${({ layout }) =>
    layout === 'tabs'
      ? css`
          display: flex;
          border-bottom: 1px solid #ddd;
        `
      : css`
          width: 250px;
          border-right: 1px solid #ddd;
        `}

  /* Merge default styles with any custom container style */
`;

const List = styled.ul`
  /* Merge default styles with custom list style */
`;

const Item = styled.li<{
  isActive?: boolean;
}>`
  /* Merge default item styles with any custom style or active style */
  list-style-type: none;
`;

const ItemLabel = styled.div`
    display: flex;
  /* Label wrapper (text + arrow / expand icon) */
`;

const ItemIcon = styled.span`
  /* Icon area */
`;

const Arrow = styled.span`
  /* Arrow for indicating children expansion */
  font-size: 12px;
`;

const NestedList = styled.ul`
  /* For nested children */
  list-style-type: none;
`;

/* ------------------ NavBar Component ------------------ */

export const NavBar: React.FC<NavBarProps> = ({
  items,
  layout,
  activeKey,
  onChange,
}) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [currentKey, setCurrentKey] = useState<string | undefined>(activeKey);

  const handleItemClick = (key: string, hasChildren: boolean) => {
    if (hasChildren) {
      setOpenKeys((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      );
    } else {
      setCurrentKey(key);
      onChange?.(key);
    }
  };

  const renderItems = (navItems: NavItem[], level: number = 0): React.ReactNode => {
    return (
      <List>
        {navItems.map((item) => {
          const isActive = currentKey === item.key;
          const hasChildren = !!item.children?.length;
          console.log(openKeys)
          const isOpen = openKeys.includes(item.key);

          return (
            <Item
              key={item.key}
              isActive={isActive}
              onClick={() => {
                item.onClick?.();
                handleItemClick(item.key, hasChildren);
              }}
            >
              <ItemLabel >
                {hasChildren && (
                  <Arrow >
                    {isOpen ? '▼' : '▶'}
                  </Arrow>
                )}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.icon && <ItemIcon >{item.icon}</ItemIcon>}
                  <span>{item.label}</span>
                </div>
              </ItemLabel>
              {item.children && isOpen && (
                    <NestedList >
                    {renderItems(item.children!, level + 1)}
                    </NestedList>
                )}
            </Item>
          );
        })}
      </List>
    );
  };

  return (
    <Container layout={layout} >
      {renderItems(items)}
    </Container>
  );
};
