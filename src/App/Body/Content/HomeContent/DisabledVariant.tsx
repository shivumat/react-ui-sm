import Button from '../../../../Components/Inputs/Button'
import { ContentCard, CodeBlock, ContentBlock, ContentBody } from '../Content'

const ButtonContentDisabledVariants = () => {

  const code = `
        <Button label='Filled' disabled/>
        <Button variant='outlined' label='Outlined' disabled/>
        <Button variant='subtle' label='Subtle' disabled/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <ContentBlock>
                <Button label='Filled' disabled/>
                <Button variant='outlined' label='Outlined' disabled/>
                <Button variant='subtle' label='Subtle' disabled/>
            </ContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default ButtonContentDisabledVariants