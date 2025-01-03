import Dropdown, { DropdownOption } from '../../../../Components/Dropdown';
import { CodeBlock, ContentBody, ContentCard } from '../Content';
import { StyledContentBlock } from './config';

const DropdownContentLabel = () => {

  const code = `
        <Dropdown placeholder={'Default'}/>
        <Dropdown placeholder={'With label'} label='Label'/>
        <Dropdown placeholder={'With help text'} helpText={'Help text to provide hint'}/>
        <Dropdown placeholder={'With help text and label'} label='Label' helpText={'Help text to provide hint'}/>
        <Dropdown placeholder={'With error text'} hasError errorText={'Error text to mention fault'}/>
        <Dropdown placeholder={'With error text and label'} label='Label' hasError errorText={'Error text to mention fault'}/>
  `

  const options : DropdownOption[] = [
    {
      label: 'Option 1',
      value: 'option1'
    },
    {
      label: 'Option 2',
      value: 'option2'
    },
    {
      label: 'Option 3',
      value: 'option3'
    } 
  ]
  return (
    <ContentBody>
        <ContentCard>
            <StyledContentBlock>
                <Dropdown options={options} placeholder={'Default'}/>
                <Dropdown placeholder={'Default with label'} label='Label'/>
                <Dropdown placeholder={'With help text'} helpText={'Help text to provide hint'}/>
                <Dropdown placeholder={'With help text and label'} label='Label' helpText={'Help text to provide hint'}/>
                <Dropdown placeholder={'With error text'} hasError errorText={'Error text to mention fault'}/>
                <Dropdown placeholder={'With error text and label'} label='Label' hasError errorText={'Error text to mention fault'}/>
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default DropdownContentLabel