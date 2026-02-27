import Button from '../../../../Components/Inputs/Button'
import { CodeBlock, ContentBlock, ContentBody, ContentCard } from '../Content'

const ButtonContentColorFamily = () => {

  const code = `
        <Button label='Primary'/>
        <Button colorFamily='secondary' label='Secondary'/>
        <Button colorFamily='tertiary' label='Tertiary'/>
        <Button colorFamily='info' label='Info'/>
        <Button colorFamily='success' label='Success'/>
        <Button colorFamily='warning' label='Warning'/>
        <Button colorFamily='danger' label='Danger'/>
  `
  return (
    <ContentBody>
        <ContentCard>
            <ContentBlock>
                <Button label='Primary'/>
                <Button colorFamily='secondary' label='Secondary'/>
                <Button colorFamily='tertiary' label='Tertiary'/>
                <Button colorFamily='info' label='Info'/>
                <Button colorFamily='success' label='Success'/>
                <Button colorFamily='warning' label='Warning'/>
                <Button colorFamily='danger' label='Danger'/>
            </ContentBlock>
            <CodeBlock>
                {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </CodeBlock>
        </ContentCard>
    </ContentBody>
  )
}

export default ButtonContentColorFamily