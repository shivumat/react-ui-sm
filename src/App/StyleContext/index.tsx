import React from 'react';
import {
  DesignSystemContext,
  DesignSystemOverrides,
  createDesignSystem,
} from '../../Mixins/context'
import { ThemeModeType } from '../../Mixins/Theme'

interface StyleContextType {
    children : React.ReactNode
    isDarkMode?: boolean
    themeMode?: ThemeModeType
    tokenOverrides?: DesignSystemOverrides
}

const StyleContext = (props : StyleContextType) => {

  const {isDarkMode = false, themeMode, tokenOverrides} = props
  const styleSystem = React.useMemo(() => createDesignSystem({
    isDarkMode,
    themeMode,
    overrides: tokenOverrides,
  }), [isDarkMode, themeMode, tokenOverrides])

  return (
    <DesignSystemContext.Provider value={styleSystem}>
      {props.children}
    </DesignSystemContext.Provider>
  )
}

export default StyleContext
