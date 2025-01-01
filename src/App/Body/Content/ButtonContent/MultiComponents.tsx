import Button from '../../../../Components/Button'
import { ContentCard, CodeBlock, ContentBlock, ContentBody } from '../Content'
import newStyled from '@emotion/styled'


const RightRotate = newStyled.i`
  rotate: 180deg;
`

const ButtonMultiComponents = () => {

  const code = `
        <Button label='Label'/>
        <Button leadingComp={LeftArrowComponent} label='Label'/>
        <Button trailingComp={RightArrowComponent} label='Label'/>
        <Button trailingComp={RightArrowComponent} leadingComp={LeftArrowComponent} label='Label'/>
        <Button>{RightArrowComponent}</Button>
  `

  const LeftArrowComponent = <i className="fa fa-arrow-left" aria-hidden="true"></i>
  const RightArrowComponent = <RightRotate className="fa fa-arrow-left" aria-hidden="true"></RightRotate>

  return (
    <ContentBody>
        <ContentCard>
            <ContentBlock>
                <Button label='Label'/>
                <Button leadingComp={LeftArrowComponent} label='Label'/>
                <Button trailingComp={RightArrowComponent} label='Label'/>
                <Button trailingComp={RightArrowComponent} leadingComp={LeftArrowComponent} label='Label'/>
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