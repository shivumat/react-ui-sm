import newStyled from '@emotion/styled'
import Input from '../../../../Components/Input'
import { CodeBlock, ContentBlock, ContentBody, ContentCard } from '../Content'

const StyledContentBlock = newStyled(ContentBlock)`
    flex-direction: column;
    align-items: flex-start;
`

const InputContentSize = () => {

  const code = `
        <Input customSize='xxs'  defaultValue={'Input'}/>

        <Input customSize='xs' defaultValue={'Input'}/>

        <Input customSize='s' defaultValue={'Input'}/>

        <Input defaultValue={'Input'}/>

        <Input customSize='l' defaultValue={'Input'}/>

        <Input customSize='xl' defaultValue={'Input'}/>

        <Input customSize='xxl' defaultValue={'Input'}/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <StyledContentBlock>
                <Input customSize='xxs' defaultValue={'Input'}/>
                <Input customSize='xs' defaultValue={'Input'}/>
                <Input customSize='s' defaultValue={'Input'}/>
                <Input defaultValue={'Input'}/>
                <Input customSize='l' defaultValue={'Input'}/>
                <Input customSize='xl' defaultValue={'Input'}/>
                <Input customSize='xxl' defaultValue={'Input'}/>
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default InputContentSize