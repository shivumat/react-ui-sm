import { ComponentType, createContext, useContext } from "react"
import { MarginConfig, PaddingConfig } from './Spacing'
import { FontSizeConfig } from './Font'
import { ColorConfigType, ColorFamilyConfig } from './Color'
import { ElevationConfig, ElevationProps } from './Elevation'
import { BorderStyleConfig, BorderStyleProps, BorderWidthConfig, BorderWidthProps } from './Border'
import { OpacityConfig, OpacityProps } from './Opacity'
import { BreakpointConfig, BreakpointProps } from './Breakpoints'
import { DurationConfig, DurationProps, EasingConfig, EasingProps } from './Motion'
import { ZIndexConfig, ZIndexProps } from './ZIndex'
import { ContainerMaxWidthConfig, ContainerMaxWidthProps, GridConfig, GridConfigType } from './Layout'
import { TypographyScaleConfig, TypographyScaleProps } from './Typography'
import { ThemeColorConfig, ThemeModeColorMap, ThemeModeType, resolveThemeMode } from './Theme'
import { RadiusConfig, RadiusProps } from './Radius'
import { SizeProps } from './Size'
import { LineHeightConfig } from './LineHeight'
import { SpacingScaleConfig, SpacingScaleProps } from './Spacing'

export type DesignSystemTokens = {
  themeMode: ThemeModeType
  colors: ColorConfigType
  spacing: {
    padding: SizeProps
    margin: SizeProps
    scale: SpacingScaleProps
  }
  typography: {
    fontSize: SizeProps
    lineHeight: SizeProps
    scale: TypographyScaleProps
  }
  radius: RadiusProps
  elevation: ElevationProps
  border: {
    width: BorderWidthProps
    style: BorderStyleProps
  }
  opacity: OpacityProps
  motion: {
    duration: DurationProps
    easing: EasingProps
  }
  breakpoints: BreakpointProps
  zIndex: ZIndexProps
  layout: {
    containerMaxWidth: ContainerMaxWidthProps
    grid: GridConfigType
  }
  themeColors: ThemeModeColorMap
}

export type DesignSystemOverrides = {
  colors?: Partial<ColorConfigType>
  spacing?: {
    padding?: Partial<SizeProps>
    margin?: Partial<SizeProps>
    scale?: Partial<SpacingScaleProps>
  }
  typography?: {
    fontSize?: Partial<SizeProps>
    lineHeight?: Partial<SizeProps>
    scale?: Partial<TypographyScaleProps>
  }
  radius?: Partial<RadiusProps>
  elevation?: Partial<ElevationProps>
  border?: {
    width?: Partial<BorderWidthProps>
    style?: Partial<BorderStyleProps>
  }
  opacity?: Partial<OpacityProps>
  motion?: {
    duration?: Partial<DurationProps>
    easing?: Partial<EasingProps>
  }
  breakpoints?: Partial<BreakpointProps>
  zIndex?: Partial<ZIndexProps>
  layout?: {
    containerMaxWidth?: Partial<ContainerMaxWidthProps>
    grid?: Partial<GridConfigType>
  }
  themeColors?: Partial<ThemeModeColorMap>
}

export const createDesignSystem = (info?: {
  isDarkMode?: boolean
  themeMode?: ThemeModeType
  overrides?: DesignSystemOverrides
}): DesignSystemTokens => {
  const { isDarkMode = false, themeMode, overrides } = info ?? {}
  const resolvedThemeMode = resolveThemeMode({ themeMode, isDarkMode })

  const base: DesignSystemTokens = {
    themeMode: resolvedThemeMode,
    colors: ThemeColorConfig[resolvedThemeMode],
    spacing: {
      padding: PaddingConfig,
      margin: MarginConfig,
      scale: SpacingScaleConfig,
    },
    typography: {
      fontSize: FontSizeConfig,
      lineHeight: LineHeightConfig,
      scale: TypographyScaleConfig,
    },
    radius: RadiusConfig,
    elevation: ElevationConfig,
    border: {
      width: BorderWidthConfig,
      style: BorderStyleConfig,
    },
    opacity: OpacityConfig,
    motion: {
      duration: DurationConfig,
      easing: EasingConfig,
    },
    breakpoints: BreakpointConfig,
    zIndex: ZIndexConfig,
    layout: {
      containerMaxWidth: ContainerMaxWidthConfig,
      grid: GridConfig,
    },
    themeColors: ThemeColorConfig,
  }

  if (!overrides) return base

  return {
    themeMode: base.themeMode,
    colors: { ...base.colors, ...overrides.colors },
    spacing: {
      padding: { ...base.spacing.padding, ...overrides.spacing?.padding },
      margin: { ...base.spacing.margin, ...overrides.spacing?.margin },
      scale: { ...base.spacing.scale, ...overrides.spacing?.scale },
    },
    typography: {
      fontSize: { ...base.typography.fontSize, ...overrides.typography?.fontSize },
      lineHeight: { ...base.typography.lineHeight, ...overrides.typography?.lineHeight },
      scale: { ...base.typography.scale, ...overrides.typography?.scale },
    },
    radius: { ...base.radius, ...overrides.radius },
    elevation: { ...base.elevation, ...overrides.elevation },
    border: {
      width: { ...base.border.width, ...overrides.border?.width },
      style: { ...base.border.style, ...overrides.border?.style },
    },
    opacity: { ...base.opacity, ...overrides.opacity },
    motion: {
      duration: { ...base.motion.duration, ...overrides.motion?.duration },
      easing: { ...base.motion.easing, ...overrides.motion?.easing },
    },
    breakpoints: { ...base.breakpoints, ...overrides.breakpoints },
    zIndex: { ...base.zIndex, ...overrides.zIndex },
    layout: {
      containerMaxWidth: { ...base.layout.containerMaxWidth, ...overrides.layout?.containerMaxWidth },
      grid: { ...base.layout.grid, ...overrides.layout?.grid },
    },
    themeColors: { ...base.themeColors, ...overrides.themeColors },
  }
}

export const DesignSystemContext = createContext<DesignSystemTokens>(createDesignSystem())
export const useStyleSystem = () => useContext(DesignSystemContext)

export type WithStyleSystemProps = {
  styleSystem: DesignSystemTokens
}

export const withStyleSystem = <P extends WithStyleSystemProps>(WrappedComponent: ComponentType<P>) => {
  type ExternalProps = Omit<P, keyof WithStyleSystemProps>

  const ComponentWithStyleSystem = (props: ExternalProps) => {
    const styleSystem = useStyleSystem()
    return <WrappedComponent {...(props as P)} styleSystem={styleSystem} />
  }

  const wrappedName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
  ComponentWithStyleSystem.displayName = `withStyleSystem(${wrappedName})`
  return ComponentWithStyleSystem
}


export const PaddingContext = createContext(PaddingConfig)
export const MarginContext = createContext(MarginConfig)
export const FontSizeContext = createContext(FontSizeConfig)
export const ColorFamilyContext = createContext(ColorFamilyConfig)
export const RadiusContext = createContext(RadiusConfig)
export const ElevationContext = createContext(ElevationConfig)
export const BorderWidthContext = createContext(BorderWidthConfig)
export const BorderStyleContext = createContext(BorderStyleConfig)
export const OpacityContext = createContext(OpacityConfig)
export const BreakpointContext = createContext(BreakpointConfig)
export const DurationContext = createContext(DurationConfig)
export const EasingContext = createContext(EasingConfig)
export const ZIndexContext = createContext(ZIndexConfig)
export const ContainerMaxWidthContext = createContext(ContainerMaxWidthConfig)
export const GridContext = createContext(GridConfig)
export const TypographyScaleContext = createContext(TypographyScaleConfig)
export const ThemeModeContext = createContext<ThemeModeType>('light')
export const ThemeColorMapContext = createContext(ThemeColorConfig)
