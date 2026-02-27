import newStyled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import BurgerSidebar from './BurgerSidebar';
import { validPaths } from './config';
import Content from './Content';
import Sidebar from './Sidebar';

const BodyContainer = newStyled.div<{ isMobile: boolean }>`
  height: calc(100% - 60px);
  display: ${({ isMobile }) => (isMobile ? 'block' : 'grid')};
  grid-template-columns: ${({ isMobile }) => (!isMobile ? '320px auto' : 'auto')};
`;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

const Body = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const rawPathId = location.pathname.replace(/^\/+/, '');
  const pathId = validPaths.includes(rawPathId) ? rawPathId : '';

  useEffect(() => {
    if (rawPathId !== pathId) {
      navigate('/', { replace: true });
    }
  }, [navigate, pathId, rawPathId]);

  return (
    <BodyContainer isMobile={isMobile}>
      {isMobile ? <BurgerSidebar /> : <Sidebar />}
      <Content pathId={pathId} />
    </BodyContainer>
  );
};

export default Body;
