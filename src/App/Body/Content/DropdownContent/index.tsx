import TextComponent from '../../../../Components/DataDisplay/Text'
import { ContentPropsTableContainer } from '../Content'
import DropdownContentColorFamily from './ColorFamily'
import { DropdownContentPropsConfig, DropdownOptionConfig } from './config'
import DropdownContentLabel from './Label'
import DropdownContentSize from './Size'

const DropdownContent = () => {

  return (
    <>
      <TextComponent margin={{y : '12px'}} label='Dropdown' size='xxl'/>
      {/* <TextComponent label={summary} /> */}
      <ContentPropsTableContainer  propsConfig={DropdownContentPropsConfig}/>
      <ContentPropsTableContainer  propsConfig={DropdownOptionConfig}/>
      <DropdownContentLabel />
      <DropdownContentColorFamily /> 
      <DropdownContentSize />
    </>
  )
}

export default DropdownContent