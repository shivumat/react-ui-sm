import newStyled from '@emotion/styled'
import Sidebar from './Sidebar'
import Content from './Content'
import { useParams } from 'react-router'
import { routesConfig } from './config'

const BodyContainer = newStyled.div`
    height : calc(100% - 60px);
    display: grid;
    grid-template-columns: 320px auto;
` 

const Body = () => {
  const {id} = useParams()

  const redirectToHome = async () => {
    window.location.href = '/';
  }

  if(id && routesConfig.map(route => route.path).indexOf(id) === -1){
    redirectToHome();
  }

  return (
    <BodyContainer>
        <Sidebar pathId={id} />
        <Content pathId={id} />
    </BodyContainer>
  )
}

export default (Body)