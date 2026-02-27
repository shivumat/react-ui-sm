import Dropdown from '../../../../Components/Inputs/Select';
import { CodeBlock, ContentBody, ContentCard } from '../Content';
import { options, StyledContentBlock } from './config';

const DropdownContentLabel = () => {

  const code = `
        <Dropdown placeholder={'Default'}/>
        <Dropdown placeholder={'With label'} label='Label'/>
        <Dropdown placeholder={'With help text'} helpText={'Help text to provide hint'}/>
        <Dropdown placeholder={'With help text and label'} label='Label' helpText={'Help text to provide hint'}/>
        <Dropdown placeholder={'With error text'} hasError errorText={'Error text to mention fault'}/>
        <Dropdown placeholder={'With error text and label'} label='Label' hasError errorText={'Error text to mention fault'}/>
  `

  return (
    <ContentBody>
        <ContentCard>
            <StyledContentBlock>
                <Dropdown options={options} placeholder={'Default'}/>
                <Dropdown options={options} placeholder={'Default with label'} label='Label'/>
                <Dropdown options={options} placeholder={'With help text'} helpText={'Help text to provide hint'}/>
                <Dropdown options={options} placeholder={'With help text and label'} label='Label' helpText={'Help text to provide hint'}/>
                <Dropdown options={options} placeholder={'With error text'} hasError errorText={'Error text to mention fault'}/>
                <Dropdown options={options} placeholder={'With error text and label'} label='Label' hasError errorText={'Error text to mention fault'}/>
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default DropdownContentLabel