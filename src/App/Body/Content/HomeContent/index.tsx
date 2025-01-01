import React from 'react'
import ButtonContentSize from './Size'
import newStyled from '@emotion/styled'
import ButtonContentColorFamily from './ColorFamily'
import ButtonContentVariants from './Variants'
import ButtonMultiComponents from './MultiComponents'
import ButtonContentDisabledVariants from './DisabledVariant'
import { ContentPropsTableContainer } from '../Content'
import { ButtonContentPropsConfig } from './config'

const Header = newStyled.div`
    font-size: 2em;
    margin: 0.125em 0.5em;
`

const SubDescription = newStyled.div`
    font-size: 1em;
    margin: 0 1em;
    padding: 0.5em 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const HomeContent = () => {

  return (
    <>
      <Header>Home</Header>
      <SubDescription>Trigger on a single tap.</SubDescription>
      <ContentPropsTableContainer  propsConfig={ButtonContentPropsConfig}/>
      <ButtonContentSize />
      <ButtonContentColorFamily />
      <ButtonMultiComponents />
      <ButtonContentVariants />
      <ButtonContentDisabledVariants />
    </>
  )
}

export default HomeContent