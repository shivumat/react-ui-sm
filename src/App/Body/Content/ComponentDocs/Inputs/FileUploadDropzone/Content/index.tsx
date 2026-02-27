import { FileUploadDropzone } from '@/Components/Inputs'
import type { ContentPropsTableProps } from '../../../../Content'
import { ComponentDocPage } from '../../../Shared'

const propsConfig: ContentPropsTableProps = [
  { prop: 'accept', defaultValue: { value: '-' }, valueType: { value: 'string' }, description: 'Accepted file MIME types/extensions.' },
  { prop: 'multiple', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Allows selecting multiple files.' },
  { prop: 'disabled', defaultValue: { value: 'false' }, valueType: { value: 'boolean' }, description: 'Disables drag/click selection.' },
  { prop: 'onFilesSelected', defaultValue: { value: '-' }, valueType: { value: '(files: File[]) => void' }, description: 'Selected files callback.' },
  { prop: 'children', defaultValue: { value: 'default text' }, valueType: { value: 'ReactNode' }, description: 'Custom dropzone content.' },
]

export default function FileUploadDoc() {
  return (
    <ComponentDocPage
      title='File Upload / Dropzone'
      propsConfig={propsConfig}
      examples={[
        {
          title: 'Basic Dropzone',
          code: `<FileUploadDropzone onFilesSelected={(files: File[]) => console.log(files)} />`,
          preview: <FileUploadDropzone onFilesSelected={(files: File[]) => console.log('files', files)} />,
        },
        {
          title: 'Accept + Multiple Combination',
          code: `<FileUploadDropzone accept='image/*' multiple>Upload images</FileUploadDropzone>\n<FileUploadDropzone disabled>Uploads disabled</FileUploadDropzone>`,
          preview: (
            <div style={{ display: 'grid', gap: '10px', width: '100%', maxWidth: '460px' }}>
              <FileUploadDropzone accept='image/*' multiple>Upload images</FileUploadDropzone>
              <FileUploadDropzone disabled>Uploads disabled</FileUploadDropzone>
            </div>
          ),
        },
      ]}
    />
  )
}
