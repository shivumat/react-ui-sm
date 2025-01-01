enum SizeEnum {
    xxs = 'xxs',
    xs = 'xs',
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl',
    xxl = 'xxl',
}

export type SizeType = keyof typeof SizeEnum

export type SizeProps = { [K in keyof typeof SizeEnum] : string | number}