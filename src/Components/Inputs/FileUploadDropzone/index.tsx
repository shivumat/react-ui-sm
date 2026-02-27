import newStyled from '@emotion/styled'
import React from 'react'
import { getBorderColor, getSurfaceColor, getTextColor } from '@/Mixins/Color'
import { useStyleSystem } from '@/Mixins/context'

type FileUploadDropzoneProps = {
  accept?: string
  multiple?: boolean
  disabled?: boolean
  onFilesSelected?: (files: File[]) => void
  children?: React.ReactNode
  className?: string
}

const Root = newStyled.label<{
  isDragging: boolean
  disabled?: boolean
  borderColor: string
  activeBorderColor: string
  surfaceColor: string
  textColor: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  border: 2px dashed ${({ isDragging, borderColor, activeBorderColor }) => (isDragging ? activeBorderColor : borderColor)};
  border-radius: 0.5rem;
  background: ${({ surfaceColor }) => surfaceColor};
  color: ${({ textColor }) => textColor};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: 140ms ease;
`

const HiddenInput = newStyled.input`
  display: none;
`

const FileUploadDropzone = (props: FileUploadDropzoneProps) => {
  const { accept, multiple, disabled, onFilesSelected, children, className } = props
  const colorConfig = useStyleSystem().colors
  const [isDragging, setIsDragging] = React.useState(false)

  const pushFiles = (list: FileList | null) => {
    if (!list) return
    onFilesSelected?.(Array.from(list))
  }

  return (
    <Root
      className={className}
      disabled={disabled}
      isDragging={isDragging}
      borderColor={getBorderColor(colorConfig, 0.45)}
      activeBorderColor={getTextColor(colorConfig)}
      surfaceColor={getSurfaceColor(colorConfig)}
      textColor={getTextColor(colorConfig)}
      onDragOver={(event) => {
        event.preventDefault()
        if (!disabled) setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(event) => {
        event.preventDefault()
        setIsDragging(false)
        if (!disabled) pushFiles(event.dataTransfer.files)
      }}
    >
      <HiddenInput
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(event) => pushFiles(event.target.files)}
      />
      {children ?? 'Drag files here or click to upload'}
    </Root>
  )
}

export default React.memo(FileUploadDropzone)
