import newStyled from '@emotion/styled'
import Input from '../../../../Components/Input'
import { CodeBlock, ContentBlock, ContentBody, ContentCard } from '../Content'

const StyledContentBlock = newStyled(ContentBlock)`
    flex-direction: column;
    align-items: flex-start;
`

const InputContentColorFamily = () => {

  const code = `
        <Input defaultValue='Default'/>
        <Input colorFamily='primary' 
        defaultValue='Primary'/>
        <Input colorFamily='secondary' 
        defaultValue='Secondary'/>
        <Input colorFamily='tertiary' 
        defaultValue='Tertiary'/>
        <Input colorFamily='info' 
        defaultValue='Info'/>
        <Input colorFamily='success' 
        defaultValue='Success'/>
        <Input colorFamily='warning' 
        defaultValue='Warning'/>
        <Input colorFamily='danger' 
        defaultValue='Danger'/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <StyledContentBlock>
                <Input defaultValue='Default'/>
                <Input colorFamily='primary' defaultValue='Primary'/>
                <Input colorFamily='secondary' defaultValue='Secondary'/>
                <Input colorFamily='tertiary' defaultValue='Tertiary'/>
                <Input colorFamily='info' defaultValue='Info'/>
                <Input colorFamily='success' defaultValue='Success'/>
                <Input colorFamily='warning' defaultValue='Warning'/>
                <Input colorFamily='danger' defaultValue='Danger'/>
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default InputContentColorFamily