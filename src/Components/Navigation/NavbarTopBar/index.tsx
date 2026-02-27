/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useMemo, useState } from 'react';
import { getActiveOptionBackgroundColor, getBorderColor, getReadableTextOnColor, getTextColor } from '@/Mixins/Color';
import { useStyleSystem } from '@/Mixins/context';
import { NavBarProps, NavItem } from './Navbar';

const Container = styled.nav<{ layout: 'tabs' | 'sidebar'; borderColor: string }>`
  ${({ layout, borderColor }) =>
    layout === 'tabs'
      ? css`
          display: flex;
          border-bottom: 1px solid ${borderColor};
        `
      : css`
          width: 100%;
          border-right: 1px solid ${borderColor};
          overflow-y: auto;
        `}
`;

const List = styled.ul<{ level: number }>`
  margin: 0;
  padding: ${({ level }) => (level === 0 ? '8px' : '4px 0 4px 14px')};
`;

const Item = styled.li`
  list-style: none;
`;

const ItemLabel = styled.button<{
  isActive: boolean;
  activeBackground: string;
  activeText: string;
  textColor: string;
  level: number;
}>`
  width: 100%;
  border: 0;
  background: ${({ isActive, activeBackground }) => (isActive ? activeBackground : 'transparent')};
  color: ${({ isActive, activeText, textColor }) => (isActive ? activeText : textColor)};
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
  padding: ${({ level }) => `8px ${8 + Math.max(0, level - 1) * 8}px`};
  border-radius: 8px;
  cursor: pointer;
`;

const ItemIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.span`
  font-size: 12px;
  width: 12px;
  flex: 0 0 12px;
`;

const LabelText = styled.span`
  flex: 1;
`;

const findAncestorKeys = (items: NavItem[], targetKey?: string): string[] => {
  if (!targetKey) return [];

  const visit = (nodes: NavItem[], parents: string[]): string[] | null => {
    for (const node of nodes) {
      if (node.key === targetKey) {
        return parents;
      }
      if (node.children?.length) {
        const result = visit(node.children, [...parents, node.key]);
        if (result) return result;
      }
    }
    return null;
  };

  return visit(items, []) ?? [];
};

export const NavBar: React.FC<NavBarProps> = ({
  items,
  layout,
  activeKey,
  onChange,
}) => {
  const colorConfig = useStyleSystem().colors;
  const activeBackground = getActiveOptionBackgroundColor({ colorConfig });
  const activeText = getReadableTextOnColor(activeBackground, colorConfig);
  const textColor = getTextColor(colorConfig);
  const borderColor = getBorderColor(colorConfig);

  const ancestorKeys = useMemo(() => findAncestorKeys(items, activeKey), [activeKey, items]);
  const [openKeys, setOpenKeys] = useState<string[]>(ancestorKeys);

  useEffect(() => {
    setOpenKeys((prev) => Array.from(new Set([...prev, ...ancestorKeys])));
  }, [ancestorKeys]);

  const handleItemClick = (key: string, hasChildren: boolean) => {
    if (hasChildren) {
      setOpenKeys((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
      );
      return;
    }

    onChange?.(key);
  };

  const renderItems = (navItems: NavItem[], level = 0): React.ReactNode => {
    return (
      <List level={level}>
        {navItems.map((item) => {
          const hasChildren = !!item.children?.length;
          const isActive = activeKey === item.key;
          const isOpen = hasChildren && openKeys.includes(item.key);

          return (
            <Item key={item.key}>
              <ItemLabel
                type="button"
                isActive={isActive}
                activeBackground={activeBackground}
                activeText={activeText}
                textColor={textColor}
                level={level}
                onClick={() => {
                  item.onClick?.();
                  handleItemClick(item.key, hasChildren);
                }}
              >
                {hasChildren ? <Arrow>{isOpen ? '▼' : '▶'}</Arrow> : <Arrow />}
                {item.icon && <ItemIcon>{item.icon}</ItemIcon>}
                <LabelText>{item.label}</LabelText>
              </ItemLabel>
              {hasChildren && isOpen && renderItems(item.children!, level + 1)}
            </Item>
          );
        })}
      </List>
    );
  };

  return (
    <Container layout={layout} borderColor={borderColor}>
      {renderItems(items)}
    </Container>
  );
};
