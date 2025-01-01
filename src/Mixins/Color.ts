import tinycolor from 'tinycolor2';

enum ColorFamilyEnum {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
    success = 'success',
    info = 'info',
    warning = 'warning',
    danger = 'danger',
}

export type ColorFamilyType = keyof typeof ColorFamilyEnum
export type ColorFamilyProps = { [K in keyof typeof ColorFamilyEnum] : string }
export type ColorConfigType = ColorFamilyProps & {disable: string; foreGround: string; backGround: string; isDark: boolean}

export const DISABLED_COLOR = '#D3D3D3'
export const FOREGROUND_COLOR = '#020202'
export const BACKGROUND_COLOR = '#fdfdfd'

export const ColorfamilyConfig : ColorConfigType = {
  primary: '#0052CC',
  secondary: '#6554C0',
  tertiary : 'gray',
  success: '#00B646',
  info: '#00B8D9',
  warning: '#FF7C18',
  danger: '#F00505',
  disable: DISABLED_COLOR,
  foreGround: FOREGROUND_COLOR,
  backGround: BACKGROUND_COLOR,
  isDark : false,
}


export const getColor = (info : {colorFamily?: ColorFamilyType; color?: string; colorConfig: ColorConfigType; disabled?: boolean}) => {
    const {colorFamily = 'primary', color, colorConfig, disabled = false} = info
    if (disabled) return colorConfig.disable
    return `${color ?? colorConfig?.[colorFamily]}`
}
 
// --------------------------------------------------------------------------------------------------------------------
// Helper Functions for Color Manipulation
// --------------------------------------------------------------------------------------------------------------------

const convertToHex = (color: string) => {
    return tinycolor(color).toHexString();
}
// Define HSL Type
type HSL = { h: number; s: number; l: number };

// Convert hex to HSL
const hexToHsl = (hex: string): HSL => {
  let r = 0, g = 0, b = 0;

  if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h: number = 0, s: number = 0, l: number = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
};

// Convert HSL to hex
const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));

  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
};

// Lighten Function
export const lighten = (amount: number, color: string): string => {
    const hexColor = convertToHex(color);
    const { h, s, l } = hexToHsl(hexColor);
    const newL = Math.min(100, l + amount);
    return hslToHex(h, s, newL);
};

// Darken Function
export const darken = (amount: number, color: string): string => {
    const hexColor = convertToHex(color);
    const { h, s, l } = hexToHsl(hexColor);
    const newL = Math.max(0, l - amount);
    return hslToHex(h, s, newL);
};

