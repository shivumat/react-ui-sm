import Button from '../../../../Components/Button'
import { ContentCard, CodeBlock, ContentBlock, ContentBody } from '../Content'

const ButtonContentVariants = () => {

  const code = `
        <Button label='Filled'/>
        <Button variant='outlined' label='Outlined'/>
        <Button variant='subtle' label='Subtle'/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <ContentBlock>
                <Button label='Filled'/>
                <Button variant='outlined' label='Outlined'/>
                <Button variant='subtle' label='Subtle'/>
            </ContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default ButtonContentVariants