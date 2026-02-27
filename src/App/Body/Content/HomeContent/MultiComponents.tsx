import Button from '../../../../Components/Inputs/Button'
import { ContentCard, CodeBlock, ContentBlock, ContentBody } from '../Content'
import newStyled from '@emotion/styled'


const RightRotate = newStyled.i`
  rotate: 180deg;
`

const ButtonMultiComponents = () => {

  const code = `
        <Button label='Label'/>
        <Button trailingComp={LeftArrowComponent} label='Label'/>
        <Button leadingComp={RightArrowComponent} label='Label'/>
        <Button leadingComp={RightArrowComponent} trailingComp={LeftArrowComponent} label='Label'/>
        <Button>{RightArrowComponent}</Button>
  `

  const LeftArrowComponent = <i className="fa fa-arrow-left" aria-hidden="true"></i>
  const RightArrowComponent = <RightRotate className="fa fa-arrow-left" aria-hidden="true"></RightRotate>


  return (
    <ContentBody>
        <ContentCard>
            <ContentBlock>
                <Button label='Label'/>
                <Button trailingComp={LeftArrowComponent} label='Label'/>
                <Button leadingComp={RightArrowComponent} label='Label'/>
                <Button leadingComp={RightArrowComponent} trailingComp={LeftArrowComponent} label='Label'/>
                <Button>{RightArrowComponent}</Button>
            </ContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default ButtonMultiComponents