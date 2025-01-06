import Dropdown from '../../../../Components/Dropdown';
import { CodeBlock, ContentBody, ContentCard } from '../Content';
import { options, StyledContentBlock } from './config';

const DropdownContentSize = () => {

  const code = `
        <Dropdown customSize='xxs'  placeholder={'Dropdown'}/>

        <Dropdown customSize='xs' placeholder={'Dropdown'}/>

        <Dropdown customSize='s' placeholder={'Dropdown'}/>

        <Dropdown placeholder={'Dropdown'}/>

        <Dropdown customSize='l' placeholder={'Dropdown'}/>

        <Dropdown customSize='xl' placeholder={'Dropdown'}/>

        <Dropdown customSize='xxl' placeholder={'Dropdown'}/>
  `

  return (
    <ContentBody>
        <ContentCard>
            <StyledContentBlock>
                <Dropdown options={options} customSize='xxs' placeholder={'Dropdown'}/>
                <Dropdown options={options} customSize='xs' placeholder={'Dropdown'}/>
                <Dropdown options={options} customSize='s' placeholder={'Dropdown'}/>
                <Dropdown options={options} placeholder={'Dropdown'}/>
                <Dropdown options={options} customSize='l' placeholder={'Dropdown'}/>
                <Dropdown options={options} customSize='xl' placeholder={'Dropdown'}/>
                <Dropdown options={options} customSize='xxl' placeholder={'Dropdown'}/>
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default DropdownContentSize