import newStyled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BurgerSidebar from './BurgerSidebar';
import { routesConfig } from './config';
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
  const { id } = useParams();
  const isMobile = useIsMobile();

  const redirectToHome = async () => {
    window.location.href = '/';
  };

  if (id && routesConfig.map((route) => route.path).indexOf(id) === -1) {
    redirectToHome();
  }

  return (
    <BodyContainer isMobile={isMobile}>
      {isMobile ? <BurgerSidebar /> : <Sidebar />}
      <Content pathId={id} />
    </BodyContainer>
  );
};

export default Body;
