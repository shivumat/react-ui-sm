import newStyled from "@emotion/styled";
import { ContentBlock, ContentPropsTableProps } from "../Content";

export const StyledContentBlock = newStyled(ContentBlock)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
`
export const DropdownContentPropsConfig: ContentPropsTableProps = [
    {
        prop: 'label',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'The label text associated with the dropdown.',
    },
    {
        prop: 'areaLabel',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Accessible label for screen readers, providing a textual alternative to the dropdown.',
    },
    {
        prop: 'options',
        defaultValue: { value: '[]' },
        valueType: { value: 'DropdownOption[]' },
        description: 'List of options to display in the dropdown.',
    },
    {
        prop: 'placeholder',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Placeholder text displayed when no value is selected.',
    },
    {
        prop: 'value',
        defaultValue: { value: '' },
        valueType: { value: 'string | number' },
        description: 'The currently selected value in the dropdown.',
    },
    {
        prop: 'onChange',
        defaultValue: { value: '' },
        valueType: { value: '(value: string | number) => void' },
        description: 'Callback function triggered when the selected value changes.',
    },
    {
        prop: 'hasError',
        defaultValue: { value: 'false' },
        valueType: { value: 'boolean' },
        description: 'Indicates whether the dropdown is in an error state.',
    },
    {
        prop: 'color',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Text color for the dropdown.',
    },
    {
        prop: 'onErrorBorderColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border color when the dropdown is in an error state.',
    },
    {
        prop: 'colorFamily',
        defaultValue: { value: 'primary' },
        valueType: { value: 'ColorFamilyType', link: '/color' },
        description: 'Select from predefined color families for the dropdown.',
    },
    {
        prop: 'helpText',
        defaultValue: { value: '' },
        valueType: { value: 'string | ReactNode' },
        description: 'Additional information or hint displayed below the dropdown.',
    },
    {
        prop: 'errorText',
        defaultValue: { value: '' },
        valueType: { value: 'string | ReactNode' },
        description: 'Error message displayed below the dropdown when validation fails.',
    },
    {
        prop: 'disabled',
        defaultValue: { value: 'false' },
        valueType: { value: 'boolean' },
        description: 'Disables the dropdown input.',
    },
    {
        prop: 'customSize',
        defaultValue: { value: 'm' },
        valueType: { value: 'SizeType', link: '/sizing' },
        description: 'Adjusts the size of the dropdown.',
    },
    {
        prop: 'padding',
        defaultValue: { value: '' },
        valueType: { value: 'SpacingProps', link: '/spacing' },
        description: 'Custom padding for the dropdown.',
    },
    {
        prop: 'margin',
        defaultValue: { value: '' },
        valueType: { value: 'SpacingProps', link: '/spacing' },
        description: 'Custom margin for the dropdown.',
    },
    {
        prop: 'bgColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Background color of the dropdown.',
    },
    {
        prop: 'borderColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border color of the dropdown.',
    },
    {
        prop: 'borderRadius',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border radius of the dropdown.',
    },
    {
        prop: 'fontSize',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Font size CSS value for the dropdown.',
    },
    {
        prop: 'outlined',
        defaultValue: { value: 'false' },
        valueType: { value: 'boolean' },
        description: 'Defines whether the dropdown has an outlined style.',
    },
    {
        prop: 'labelClass',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'CSS class to style the label of the dropdown.',
    },
    {
        prop: 'helpClass',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'CSS class to style the help text of the dropdown.',
    },
    {
        prop: 'errorClass',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'CSS class to style the error text of the dropdown.',
    },
    {
        prop: 'className',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'CSS class to style the dropdown container.',
    },
    {
        prop: 'onFocusBorderColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border color when the dropdown is focused.',
    },
    {
        prop: 'onBlurBorderColor',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Border color when the dropdown loses focus.',
    },
];
export const DropdownOptionConfig: ContentPropsTableProps = [
    {
        prop: 'label',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'The text to display for the dropdown option.',
    },
    {
        prop: 'value',
        defaultValue: { value: '' },
        valueType: { value: 'string | number' },
        description: 'The value associated with the dropdown option.',
    },
    {
        prop: 'component',
        defaultValue: { value: '' },
        valueType: { value: 'ReactNode' },
        description: 'Custom React component to render instead of the default label.',
    },
];
