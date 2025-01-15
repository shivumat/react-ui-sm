import newStyled from '@emotion/styled';
import ContainerComponent from '../../../Components/Container';
import { flattenedRoutes } from '../config';
import ComingSoon from './ComingSoon';

const ContentContainer = newStyled(ContainerComponent)`
    height: 100%;
    overflow-y: auto;
`

const Content = (props : {pathId? : string}) => {

  console.log(props.pathId)
  const activeRouteData = flattenedRoutes()?.find(route => route.path === `/${props.pathId ?? ''}`)

  return (
    <ContentContainer margin={{x: '12px'}} padding={{all: '0px'}}>
      {activeRouteData?.component ?? <ComingSoon title={activeRouteData?.label ?? ''} description={activeRouteData?.content ?? ''}/>}
    </ContentContainer>
  )
}

export default Content