import Input from '../../../../Components/Inputs/Input';
import { CodeBlock, ContentBody, ContentCard } from '../Content';
import { StyledContentBlock } from './config';

const InputContentSize = () => {

  const code = `
        <Input customSize='xxs'  placeholder={'Input'}/>

        <Input customSize='xs' placeholder={'Input'}/>

        <Input customSize='s' placeholder={'Input'}/>

        <Input placeholder={'Input'}/>

        <Input customSize='l' placeholder={'Input'}/>

        <Input customSize='xl' placeholder={'Input'}/>

        <Input customSize='xxl' placeholder={'Input'}/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <StyledContentBlock>
                <Input customSize='xxs' placeholder={'Input'}/>
                <Input customSize='xs' placeholder={'Input'}/>
                <Input customSize='s' placeholder={'Input'}/>
                <Input placeholder={'Input'}/>
                <Input customSize='l' placeholder={'Input'}/>
                <Input customSize='xl' placeholder={'Input'}/>
                <Input customSize='xxl' placeholder={'Input'}/>
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default InputContentSize