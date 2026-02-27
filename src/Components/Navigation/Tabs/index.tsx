import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getTextColor } from '@/Mixins/Color'
import { withStyleSystem, WithStyleSystemProps } from '@/Mixins/context'

export type TabItem = {
  key: string
  label: React.ReactNode
  disabled?: boolean
}

type TabsProps = {
  items: TabItem[]
  activeKey?: string
  defaultActiveKey?: string
  onChange?: (key: string) => void
  className?: string
}

const Root = newStyled.div<{ borderColor: string }>`
  display: flex;
  gap: 0.25rem;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`

const TabButton = newStyled.button<{ isActive: boolean; textColor: string; borderColor: string }>`
  border: none;
  background: transparent;
  color: ${({ textColor }) => textColor};
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-bottom: 2px solid ${({ isActive, borderColor }) => (isActive ? borderColor : 'transparent')};
`

const TabsBase = (props: TabsProps & WithStyleSystemProps) => {
  const { items, activeKey, defaultActiveKey, onChange, className, styleSystem } = props
  const [internalActive, setInternalActive] = React.useState(defaultActiveKey ?? items[0]?.key)
  const currentActive = activeKey ?? internalActive

  const borderColor = getBorderColor(styleSystem.colors, 0.5)
  const textColor = getTextColor(styleSystem.colors)

  return (
    <Root className={className} borderColor={borderColor}>
      {items.map((item) => (
        <TabButton
          key={item.key}
          type="button"
          disabled={item.disabled}
          isActive={currentActive === item.key}
          textColor={textColor}
          borderColor={borderColor}
          onClick={() => {
            if (item.disabled) return
            setInternalActive(item.key)
            onChange?.(item.key)
          }}
        >
          {item.label}
        </TabButton>
      ))}
    </Root>
  )
}

export default React.memo(withStyleSystem(TabsBase))
