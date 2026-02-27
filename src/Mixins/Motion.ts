export enum DurationEnum {
  instant = 'instant',
  fast = 'fast',
  normal = 'normal',
  slow = 'slow',
  slower = 'slower',
}

export enum EasingEnum {
  linear = 'linear',
  standard = 'standard',
  accelerate = 'accelerate',
  decelerate = 'decelerate',
  emphasized = 'emphasized',
}

export type DurationType = keyof typeof DurationEnum
export type EasingType = keyof typeof EasingEnum

export type DurationProps = { [K in DurationType]: string }
export type EasingProps = { [K in EasingType]: string }

export const DurationConfig: DurationProps = {
  instant: '0ms',
  fast: '120ms',
  normal: '200ms',
  slow: '320ms',
  slower: '480ms',
}

export const EasingConfig: EasingProps = {
  linear: 'linear',
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  accelerate: 'cubic-bezier(0.3, 0, 1, 1)',
  decelerate: 'cubic-bezier(0, 0, 0, 1)',
  emphasized: 'cubic-bezier(0.2, 0, 0, 1.2)',
}

export const getTransitionStyling = (info: {
  property?: string
  duration?: string
  durationType?: DurationType
  easing?: string
  easingType?: EasingType
  delay?: string
  durationConfig?: DurationProps
  easingConfig?: EasingProps
}) => {
  const {
    property = 'all',
    duration,
    durationType = 'normal',
    easing,
    easingType = 'standard',
    delay = '0ms',
    durationConfig,
    easingConfig,
  } = info

  const finalDuration = duration ?? durationConfig?.[durationType]
  const finalEasing = easing ?? easingConfig?.[easingType]
  if (!finalDuration || !finalEasing) return ''
  return `transition: ${property} ${finalDuration} ${finalEasing} ${delay};`
}
