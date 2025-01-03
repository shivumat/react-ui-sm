import TextComponent from '../../../../Components/Text'
import { ContentPropsTableContainer } from '../Content'
import InputContentColorFamily from './ColorFamily'
import { InputContentPropsConfig } from './config'
import InputContentLabel from './Label'
import InputContentSize from './Size'

const InputContent = () => {

  return (
    <>
      <TextComponent margin={{y : '12px'}} label='Input' size='xxl'/>
      {/* <TextComponent label={summary} /> */}
      <ContentPropsTableContainer  propsConfig={InputContentPropsConfig}/>
      <InputContentLabel />
      <InputContentColorFamily /> 
      <InputContentSize />
    </>
  )
}

export default InputContent