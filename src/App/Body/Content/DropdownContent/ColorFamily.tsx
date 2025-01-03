import Dropdown from '../../../../Components/Dropdown';
import { CodeBlock, ContentBody, ContentCard } from '../Content';
import { StyledContentBlock } from './config';

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
                <Dropdown />
                <Dropdown colorFamily='primary'/>
                <Dropdown colorFamily='secondary' />
                <Dropdown colorFamily='tertiary'/>
                <Dropdown colorFamily='info' />
                <Dropdown colorFamily='success' />
                <Dropdown colorFamily='warning' />
                <Dropdown colorFamily='danger' />
            </StyledContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default DropdownContentColorFamily