import Input from '../../../../Components/Inputs/Input';
import { CodeBlock, ContentBody, ContentCard } from '../Content';
import { StyledContentBlock } from './config';

const InputContentLabel = () => {

  const code = `
        <Input placeholder={'Default'}/>
        <Input placeholder={'With label'} label='Label'/>
        <Input placeholder={'With help text'} helpText={'Help text to provide hint'}/>
        <Input placeholder={'With help text and label'} label='Label' helpText={'Help text to provide hint'}/>
        <Input placeholder={'With error text'} hasError errorText={'Error text to mention fault'}/>
        <Input placeholder={'With error text and label'} label='Label' hasError errorText={'Error text to mention fault'}/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <StyledContentBlock>
                <Input placeholder={'Default'}/>
                <Input placeholder={'Default with label'} label='Label'/>
                <Input placeholder={'With help text'} helpText={'Help text to provide hint'}/>
                <Input placeholder={'With help text and label'} label='Label' helpText={'Help text to provide hint'}/>
                <Input placeholder={'With error text'} hasError errorText={'Error text to mention fault'}/>
                <Input placeholder={'With error text and label'} label='Label' hasError errorText={'Error text to mention fault'}/>
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default InputContentLabel