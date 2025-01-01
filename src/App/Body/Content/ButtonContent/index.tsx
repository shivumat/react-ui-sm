import ButtonContentSize from './Size'
import ButtonContentColorFamily from './ColorFamily'
import ButtonContentVariants from './Variants'
import ButtonMultiComponents from './MultiComponents'
import ButtonContentDisabledVariants from './DisabledVariant'
import { ContentPropsTableContainer } from '../Content'
import { ButtonContentPropsConfig } from './config'
import TextComponent from '../../../../Components/Text'

const ButtonContent = () => {

  return (
    <>
      <TextComponent margin={{y : '12px'}} label='Button' size='xxl'/>
      {/* <TextComponent label={summary} /> */}
      <ContentPropsTableContainer  propsConfig={ButtonContentPropsConfig}/>
      <ButtonContentSize />
      <ButtonContentColorFamily />
      <ButtonMultiComponents />
      <ButtonContentVariants />
      <ButtonContentDisabledVariants />
    </>
  )
}

export default ButtonContent