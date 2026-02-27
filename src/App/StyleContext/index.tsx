import React from 'react';
import { MarginConfig, PaddingConfig } from '../../Mixins/Spacing'
import { FontSizeConfig } from '../../Mixins/Font'
import { ColorFamilyConfig } from '../../Mixins/Color'
import { ColorFamilyContext, FontSizeContext, MarginContext, PaddingContext } from '../../Mixins/context'

interface StyleContextType {
    children : React.ReactNode
    isDarkMode?: boolean
}

const StyleContext = (props : StyleContextType) => {

  const {isDarkMode = false} = props

  return (
    <PaddingContext.Provider value={PaddingConfig}>
      <MarginContext.Provider value={MarginConfig}>
        <FontSizeContext.Provider value={FontSizeConfig}>
          <ColorFamilyContext.Provider value={{...ColorFamilyConfig, isDark : isDarkMode}}>
            {props.children}
          </ColorFamilyContext.Provider>
        </FontSizeContext.Provider>
      </MarginContext.Provider>
    </PaddingContext.Provider>
  )
}

export default StyleContext
