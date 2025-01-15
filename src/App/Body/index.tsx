import newStyled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import BurgerSidebar from './BurgerSidebar';
import { RouteConfig, routesConfig } from './config';
import Content from './Content';
import Sidebar from './Sidebar/NormalSidebar';

const BodyContainer = newStyled.div<{ isMobile: boolean }>`
  height: calc(100% - 60px);
  display: ${({ isMobile }) => (isMobile ? 'block' : 'grid')};
  grid-template-columns: ${({ isMobile }) => (!isMobile ? '320px auto' : 'auto')};
`;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

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
  const navigate = useNavigate();

  const getAcceptableRoutes = () => {
    const result: string[] = []
    const getRoute = (route : RouteConfig) => {
      result.push(route.path)
      if (route.children) {
        route.children.forEach(getRoute)
      }
    }
    routesConfig.forEach(getRoute);
    return result;
  }

  const acceptableRoutes = getAcceptableRoutes();

  useEffect(() => {
    if (id && acceptableRoutes.indexOf(`/${id}`) === -1) {
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <BodyContainer isMobile={isMobile}>
      {isMobile ? <BurgerSidebar /> : <Sidebar />}
      <Content pathId={id} />
    </BodyContainer>
  );
};

export default Body;
