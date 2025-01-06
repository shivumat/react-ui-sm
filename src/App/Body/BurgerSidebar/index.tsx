import newStyled from '@emotion/styled';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../../Components/Button';
import { ColorFamilyContext } from '../../../Mixins/context';
import { routesConfig } from '../config';

const SidebarContainer = newStyled.div<{ isOpen: boolean; isDark: boolean; foregroundColor: string; backgroundColor: string }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-350px')};
  height: 100%;
  width: 250px;
  background-color: ${({ isDark, foregroundColor, backgroundColor }) => (isDark ? foregroundColor : backgroundColor)};
  border-right: 1px solid ${({ backgroundColor, foregroundColor, isDark }) => (isDark ? backgroundColor : foregroundColor)}33;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transition: left 0.3s ease;
  z-index: 1000;
`;

const ArrowToggle = newStyled.div<{ isOpen: boolean; isDark: boolean }>`
  position: fixed;
  top: 50%;
  left: ${({ isOpen }) => (isOpen ? '260px' : '0')};
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: ${({ isDark }) => (isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)')};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1100;
  transition: left 0.3s ease, background 0.3s ease;
  &:hover {
    background: ${({ isDark }) => (isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)')};
  }
`;

const ChevronIcon = newStyled.div<{ isDark: boolean; foregroundColor: string; backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding-bottom: 2.5px;
  color: ${({ isDark, foregroundColor, backgroundColor }) => (isDark ? foregroundColor : backgroundColor)};;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const colorConfig = useContext(ColorFamilyContext);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <ArrowToggle isOpen={isOpen} isDark={colorConfig.isDark} onClick={toggleSidebar}>
        <ChevronIcon 
        isDark={colorConfig.isDark}
        foregroundColor={colorConfig.foreGround}
        backgroundColor={colorConfig.backGround}
        >
            ☰
        </ChevronIcon>
      </ArrowToggle>
      <SidebarContainer
        isOpen={isOpen}
        isDark={colorConfig.isDark}
        foregroundColor={colorConfig.foreGround}
        backgroundColor={colorConfig.backGround}
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
