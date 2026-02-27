import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor } from '@/Mixins/Color'
import { getElevationStyling } from '@/Mixins/Elevation'
import { getRadiusStyling, RadiusType } from '@/Mixins/Radius'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'

type SurfacePaperProps = {
  children: React.ReactNode
  radiusType?: RadiusType
  radius?: string
  elevation?: string
  elevationType?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl'
  border?: string
  background?: string
  className?: string
}

const StyledSurface = newStyled.div<SurfacePaperProps & { surfaceColor: string; borderColor: string; radiusRule: string; elevationRule: string }>`
  ${({ radiusRule }) => radiusRule}
  ${({ elevationRule }) => elevationRule}
  background: ${({ background, surfaceColor }) => background ?? surfaceColor};
  border: ${({ border, borderColor }) => border ?? `1px solid ${borderColor}`};
`

const SurfacePaperBase = (props: SurfacePaperProps & WithStyleSystemProps) => {
  const { styleSystem, ...rest } = props
  const radiusRule = getRadiusStyling({
    radius: rest.radius,
    radiusType: rest.radiusType,
    radiusConfig: styleSystem.radius,
  })
  const elevationRule = getElevationStyling({
    elevation: rest.elevation,
    elevationType: rest.elevationType ?? 's',
    elevationConfig: styleSystem.elevation,
  })
  return (
    <StyledSurface
      {...rest}
      radiusRule={radiusRule}
      elevationRule={elevationRule}
      surfaceColor={getSurfaceColor(styleSystem.colors)}
      borderColor={getBorderColor(styleSystem.colors)}
    />
  )
}

export default React.memo(withStyleSystem(SurfacePaperBase))
