import { ColorConfigType, ColorFamilyConfig } from './Color'

export enum ThemeModeEnum {
  light = 'light',
  dark = 'dark',
  highContrast = 'highContrast',
}

export type ThemeModeType = keyof typeof ThemeModeEnum

export type ThemeModeColorMap = { [K in ThemeModeType]: ColorConfigType }

export const ThemeColorConfig: ThemeModeColorMap = {
  light: {
    ...ColorFamilyConfig,
    foreGround: '#171818',
    backGround: '#F7F8F9',
    disable: '#C2C2C2',
    isDark: false,
  },
  dark: {
    ...ColorFamilyConfig,
    primary: '#4C9AFF',
    secondary: '#998DD9',
    tertiary: '#A5ADBA',
    foreGround: '#F7F8F9',
    backGround: '#171818',
    disable: '#5E6C84',
    isDark: true,
  },
  highContrast: {
    ...ColorFamilyConfig,
    primary: '#0033FF',
    secondary: '#5A31F4',
    tertiary: '#000000',
    success: '#007A1F',
    info: '#0052CC',
    warning: '#B85000',
    danger: '#B00020',
    foreGround: '#000000',
    backGround: '#FFFFFF',
    disable: '#6B6B6B',
    isDark: false,
  },
}

export const resolveThemeMode = (info: {
  themeMode?: ThemeModeType
  isDarkMode?: boolean
}): ThemeModeType => {
  const { themeMode, isDarkMode = false } = info
  if (themeMode) return themeMode
  return isDarkMode ? 'dark' : 'light'
}

export const getColorConfigByTheme = (info: {
  themeMode?: ThemeModeType
  isDarkMode?: boolean
}) => {
  const mode = resolveThemeMode(info)
  return ThemeColorConfig[mode]
}
