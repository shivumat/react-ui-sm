import React from 'react'
import TextComponent from '@/Components/DataDisplay/Text'
import { CodeBlock, ContentBlock, ContentBody, ContentCard, ContentPropsTableContainer, ContentPropsTableProps } from '../../Content'

type DocSectionProps = {
  title: string
  code: string
  children: React.ReactNode
}

export const DocSection = (props: DocSectionProps) => {
  const { title, code, children } = props
  return (
    <ContentBody>
      <TextComponent margin={{ y: '12px' }} label={title} size='xl' />
      <ContentCard>
        <div style={{ display: 'grid', gap: '12px', padding: '8px', width: '100%' }}>{children}</div>
        <CodeBlock>
          {code.split('\n').map((line, index) => <div key={index}>{line}</div>)}
        </CodeBlock>
      </ContentCard>
    </ContentBody>
  )
}

type DocExample = {
  title: string
  code: string
  preview: React.ReactNode
}

type ComponentDocPageProps = {
  title: string
  propsConfig: ContentPropsTableProps
  examples: DocExample[]
}

export const ComponentDocPage = (props: ComponentDocPageProps) => {
  const { title, propsConfig, examples } = props

  return (
    <>
      <TextComponent margin={{ y: '12px' }} label={title} size='xxl' />
      <ContentPropsTableContainer propsConfig={propsConfig} />
      {examples.map((example, index) => (
        <ContentBody key={`${example.title}-${index}`}>
          <TextComponent margin={{ y: '12px' }} label={example.title} size='xl' />
          <ContentCard>
            <ContentBlock>{example.preview}</ContentBlock>
            <CodeBlock>
              {example.code.split('\n').map((line, lineIndex) => <div key={lineIndex}>{line}</div>)}
            </CodeBlock>
          </ContentCard>
        </ContentBody>
      ))}
    </>
  )
}
