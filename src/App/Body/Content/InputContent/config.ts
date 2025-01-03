import newStyled from "@emotion/styled";
import { ContentBlock, ContentPropsTableProps } from "../Content";

export const StyledContentBlock = newStyled(ContentBlock)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const InputContentPropsConfig: ContentPropsTableProps = [
    {
        prop: 'label',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'The label text associated with the input field.',
    },
    {
        prop: 'placeholder',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'The placeholder text displayed when the input is empty.',
    },
    {
        prop: 'customSize',
        defaultValue: { value: 'm' },
        valueType: { value: 'SizeProps', link: '/sizing' },
        description: 'Adjusts the size of the input field, affecting padding, margin, and font size.',
    },
    {
        prop: 'className',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'CSS class to style the input field.',
    },
    {
        prop: 'fontSize',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Font size CSS value for the input text.',
    },
    {
        prop: 'padding',
        defaultValue: { value: '' },
        valueType: { value: 'SpacingProps', link: '/spacing' },
        description: 'Custom padding for the input field.',
    },
    {
        prop: 'margin',
        defaultValue: { value: '' },
        valueType: { value: 'SpacingProps', link: '/spacing' },
        description: 'Custom margin for the input field.',
    },
    {
        prop: 'bgColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Background color of the input field.',
    },
    {
        prop: 'color',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Text color for the input.',
    },
    {
        prop: 'colorFamily',
        defaultValue: { value: 'primary' },
        valueType: { value: 'ColorProps', link: '/color' },
        description: 'Select from predefined color families for the input field.',
    },
    {
        prop: 'outlined',
        defaultValue: { value: 'true' },
        valueType: { value: 'boolean' },
        description: 'Defines whether the input has an outlined style.',
    },
    {
        prop: 'disabled',
        defaultValue: { value: 'false' },
        valueType: { value: 'boolean' },
        description: 'Disables the input field.',
    },
    {
        prop: 'borderColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border color of the input field.',
    },
    {
        prop: 'iconLeft',
        defaultValue: { value: '' },
        valueType: { value: 'ReactNode' },
        description: 'Icon displayed on the left side of the input field.',
    },
    {
        prop: 'iconRight',
        defaultValue: { value: '' },
        valueType: { value: 'ReactNode' },
        description: 'Icon displayed on the right side of the input field.',
    },
    {
        prop: 'onFocusBorderColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border color when the input field is focused.',
    },
    {
        prop: 'onBlurBorderColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border color when the input field on hover.',
    },
    {
        prop: 'onErrorBorderColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border color when the input field is in an error state.',
    },
    {
        prop: 'helpText',
        defaultValue: { value: '' },
        valueType: { value: 'string | ReactNode' },
        description: 'Additional information or hint displayed below the input field.',
    },
    {
        prop: 'errorText',
        defaultValue: { value: '' },
        valueType: { value: 'string | ReactNode' },
        description: 'Error message displayed below the input field when validation fails.',
    },
    {
        prop: 'ariaLabel',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Accessible label for screen readers, providing a textual alternative to the input field.',
    },
    {
        prop: 'hasError',
        defaultValue: { value: 'false' },
        valueType: { value: 'boolean' },
        description: 'Indicates whether the input field is in an error state.',
    },
    {
        prop: 'labelClass',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'CSS class to style the label of the input field.',
    },
    {
        prop: 'helpClass',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'CSS class to style the help text of the input field.',
    },
    {
        prop: 'errorClass',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'CSS class to style the error text of the input field.',
    },
];
