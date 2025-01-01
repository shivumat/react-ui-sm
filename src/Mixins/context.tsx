import { createContext } from "react"
import { MarginConfig, PaddingConfig } from './Spacing'
import { FontSizeConfig } from './Font'
import { ColorfamilyConfig } from './Color'


export const PaddingContext = createContext(PaddingConfig)
export const MarginContext = createContext(MarginConfig)
export const FontSizeContext = createContext(FontSizeConfig)
export const ColorFamilyContext = createContext(ColorfamilyConfig)