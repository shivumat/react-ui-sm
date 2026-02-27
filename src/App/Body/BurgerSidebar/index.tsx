import newStyled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Components/Inputs/Button';
import { useStyleSystem } from "@/Mixins/context";
import { routesConfig } from '../config';
import { getBorderColor, getSurfaceColor, getTextColor } from "@/Mixins/Color";

const SidebarContainer = newStyled.div<{ isOpen: boolean; surfaceColor: string; borderColor: string }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-350px')};
  height: 100%;
  width: 250px;
  background-color: ${({ surfaceColor }) => surfaceColor};
  border-right: 1px solid ${({ borderColor }) => borderColor};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transition: left 0.3s ease;
  z-index: 1000;
`;

const ArrowToggle = newStyled.div<{ isOpen: boolean; textColor: string }>`
  position: fixed;
  top: 50%;
  left: ${({ isOpen }) => (isOpen ? '260px' : '0')};
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: ${({ textColor }) => `${textColor}CC`};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1100;
  transition: left 0.3s ease, background 0.3s ease;
  &:hover {
    background: ${({ textColor }) => textColor};
  }
`;

const ChevronIcon = newStyled.div<{ iconColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding-bottom: 2.5px;
  color: ${({ iconColor }) => iconColor};
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const colorConfig = useStyleSystem().colors;
  const surfaceColor = getSurfaceColor(colorConfig);
  const textColor = getTextColor(colorConfig);
  const borderColor = getBorderColor(colorConfig);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <ArrowToggle isOpen={isOpen} textColor={textColor} onClick={toggleSidebar}>
        <ChevronIcon iconColor={surfaceColor}>
            ☰
        </ChevronIcon>
      </ArrowToggle>
      <SidebarContainer
        isOpen={isOpen}
        surfaceColor={surfaceColor}
        borderColor={borderColor}
      >
        {routesConfig.map((route) => (
          <Button
            key={route.path}
            variant="subtle"
            label={route.label}
            onClick={() => {
              navigate(`/${route.path ?? ''}`, { replace: true });
              toggleSidebar(); // Close sidebar after navigation
            }}
          />
        ))}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
