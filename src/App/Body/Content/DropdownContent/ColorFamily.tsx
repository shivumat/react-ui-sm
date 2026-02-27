import Dropdown from '../../../../Components/Inputs/Select';
import { CodeBlock, ContentBody, ContentCard } from '../Content';
import { options, StyledContentBlock } from './config';

const DropdownContentColorFamily = () => {

  const code = `
        <Dropdown options={options} />
        <Dropdown options={options} colorFamily='primary'/>
        <Dropdown options={options} colorFamily='secondary' />
        <Dropdown options={options} colorFamily='tertiary'/>
        <Dropdown options={options} colorFamily='info' />
        <Dropdown options={options} colorFamily='success' />
        <Dropdown options={options} colorFamily='warning' />
        <Dropdown options={options} colorFamily='danger' />
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