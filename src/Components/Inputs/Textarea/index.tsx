import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getColor, getSurfaceColor, getTextColor, ColorFamilyType } from '@/Mixins/Color'
import { getFontStyling } from '@/Mixins/Font'
import { SizeProps, SizeType } from '@/Mixins/Size'
import { getSpacing, SpacingProps } from '@/Mixins/Spacing'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'

type NativeTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>

type TextareaProps = NativeTextareaProps & {
  label?: string
  helpText?: React.ReactNode
  errorText?: React.ReactNode
  hasError?: boolean
  colorFamily?: ColorFamilyType
  color?: string
  customSize?: SizeType
  padding?: SpacingProps
  margin?: SpacingProps
  borderColor?: string
  onFocusBorderColor?: string
  onBlurBorderColor?: string
  fontSize?: string
  className?: string
  labelClassName?: string
}

const Wrapper = newStyled.div<{ margin?: SpacingProps } & { marginConfig: SizeProps }>`
  display: flex;
  flex-direction: column;
  ${({ margin, marginConfig }) => getSpacing({ spacingProps: margin, size: 'm', spaceConfig: marginConfig, key: 'margin' })}
`

const Label = newStyled.label<{ textColor: string }>`
  margin-bottom: 0.4rem;
  color: ${({ textColor }) => textColor};
  font-weight: 500;
`

const StyledTextarea = newStyled.textarea<{
  colorValue: string
  surfaceColor: string
  borderValue: string
  focusBorderValue: string
  hoverBorderValue: string
  hasError?: boolean
  errorBorderValue: string
  customSize?: SizeType
  fontSize?: string
  fontSizeConfig: SizeProps
  padding?: SpacingProps
  paddingConfig: SizeProps
}>`
  width: 100%;
  min-height: 100px;
  resize: vertical;
  outline: none;
  background: ${({ surfaceColor }) => surfaceColor};
  color: ${({ colorValue }) => colorValue};
  border: 1px solid ${({ hasError, errorBorderValue, borderValue }) => (hasError ? errorBorderValue : borderValue)};
  border-radius: 0.375rem;
  ${({ customSize, fontSize, fontSizeConfig }) => getFontStyling({ size: customSize, fontSize, fontConfig: fontSizeConfig })}
  ${({ customSize, padding, paddingConfig }) => getSpacing({ spacingProps: padding, size: customSize, spaceConfig: paddingConfig, key: 'padding' })}

  &:focus {
    border-color: ${({ hasError, errorBorderValue, focusBorderValue }) => (hasError ? errorBorderValue : focusBorderValue)};
  }

  &:hover {
    border-color: ${({ hasError, errorBorderValue, hoverBorderValue }) => (hasError ? errorBorderValue : hoverBorderValue)};
  }
`

const Helper = newStyled.div<{ color: string }>`
  margin-top: 0.35rem;
  font-size: 0.8rem;
  color: ${({ color }) => color};
`

const TextareaBase = (props: TextareaProps & WithStyleSystemProps) => {
  const {
    styleSystem,
    label,
    helpText,
    errorText,
    hasError,
    colorFamily,
    color,
    customSize,
    padding,
    margin,
    borderColor,
    onFocusBorderColor,
    onBlurBorderColor,
    className,
    labelClassName,
    fontSize,
    ...rest
  } = props

  const colorConfig = styleSystem.colors
  const textColor = color ?? (colorFamily ? getColor({ colorFamily, color, colorConfig }) : getTextColor(colorConfig))
  const surfaceColor = getSurfaceColor(colorConfig)
  const defaultBorder = borderColor ?? getBorderColor(colorConfig, 0.45)
  const focusBorder = onFocusBorderColor ?? getTextColor(colorConfig)
  const hoverBorder = onBlurBorderColor ?? getTextColor(colorConfig)

  return (
    <Wrapper className={className} margin={margin} marginConfig={styleSystem.spacing.margin}>
      {label && <Label className={labelClassName} textColor={getTextColor(colorConfig)}>{label}</Label>}
      <StyledTextarea
        {...rest}
        customSize={customSize}
        fontSize={fontSize}
        fontSizeConfig={styleSystem.typography.fontSize}
        padding={padding}
        paddingConfig={styleSystem.spacing.padding}
        colorValue={textColor}
        surfaceColor={surfaceColor}
        borderValue={defaultBorder}
        focusBorderValue={focusBorder}
        hoverBorderValue={hoverBorder}
        errorBorderValue={colorConfig.danger}
        hasError={hasError}
      />
      {hasError && errorText && <Helper color={colorConfig.danger}>{errorText}</Helper>}
      {!hasError && helpText && <Helper color={colorConfig.tertiary}>{helpText}</Helper>}
    </Wrapper>
  )
}

export default React.memo(withStyleSystem(TextareaBase))
