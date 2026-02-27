import Button from '../../../../Components/Inputs/Button'
import { ContentCard, CodeBlock, ContentBlock, ContentBody } from '../Content'

const ButtonContentSize = () => {

  const code = `
        <Button size='xxs' label='XXS'/>
        <Button size='xs' label='XS'/>
        <Button size='s' label='S'/>
        <Button label='M'/>
        <Button size='l' label='L'/>
        <Button size='xl' label='XL'/>
        <Button size='xxl' label='XXL'/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <ContentBlock>
                <Button size='xxs' label='XXS'/>
                <Button size='xs' label='XS'/>
                <Button size='s' label='S'/>
                <Button label='M'/>
                <Button size='l' label='L'/>
                <Button size='xl' label='XL'/>
                <Button size='xxl' label='XXL'/>
            </ContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default ButtonContentSize