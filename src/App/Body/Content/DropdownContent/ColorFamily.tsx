import Dropdown from '../../../../Components/Dropdown';
import { CodeBlock, ContentBody, ContentCard } from '../Content';
import { options, StyledContentBlock } from './config';

const DropdownContentColorFamily = () => {

  const code = `
        <Dropdown defaultValue='Default'/>
        <Dropdown colorFamily='primary' defaultValue='Primary'/>
        <Dropdown colorFamily='secondary' defaultValue='Secondary'/>
        <Dropdown colorFamily='tertiary' defaultValue='Tertiary'/>
        <Dropdown colorFamily='info' defaultValue='Info'/>
        <Dropdown colorFamily='success' defaultValue='Success'/>
        <Dropdown colorFamily='warning' defaultValue='Warning'/>
        <Dropdown colorFamily='danger' defaultValue='Danger'/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <StyledContentBlock>
                <Dropdown options={options} />
                <Dropdown options={options} colorFamily='primary'/>
                <Dropdown options={options} colorFamily='secondary' />
                <Dropdown options={options} colorFamily='tertiary'/>
                <Dropdown options={options} colorFamily='info' />
                <Dropdown options={options} colorFamily='success' />
                <Dropdown options={options} colorFamily='warning' />
                <Dropdown options={options} colorFamily='danger' />
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default DropdownContentColorFamily