import newStyled from '@emotion/styled'
import HomeContent from './HomeContent'
import { routesConfig } from '../config'
import ContainerComponent from '../../../Components/LayoutStructure/BoxContainer'

const ContentContainer = newStyled(ContainerComponent)`
    height: 100%;
    overflow-y: auto;
`

const Content = (props : {pathId? : string}) => {

  
  return (
    <ContentContainer margin={{x: '12px'}} padding={{all: '0px'}}>
      {routesConfig?.find(route => route.path === props.pathId)?.component ?? <HomeContent />}
    </ContentContainer>
  )
}

export default Content