import { ContentPropsTableProps } from "../Content";

export const ButtonContentPropsConfig : ContentPropsTableProps = [
    {
        prop : 'label',
        defaultValue : {value : ''},
        valueType : {value : 'string'},
        description : 'The text to display on the button. Required when children is not provided'
    }
    ,{
        prop : 'size',
        defaultValue : {value : 'm'},
        valueType : {value : 'SizeProps' , link : '/sizing'},
        description : 'Updates the default padding, margin and font-size of the button'
    }
    ,{
        prop : 'children',
        defaultValue : {value : ''},
        valueType : {value : 'ReactNode'},
        description : 'React children'
    }
    ,{
        prop : 'trailingComp',
        defaultValue : {value : ''},
        valueType : {value : 'ReactNode'},
        description : 'React component before the label'
    }
    ,{
        prop : 'leadingComp',
        defaultValue : {value : ''},
        valueType : {value : 'ReactNode'},
        description : 'React component after the label'
    }
    ,{
        prop : 'fontSize',
        defaultValue : {value : ''},
        valueType : {value : 'string'},
        description : 'font-size css value'
    }
    ,{
        prop : 'padding',
        defaultValue : {value : ''},
        valueType : {value : 'SpacingProps' , link : '/spacing'},
        description : 'Adjust the padding of the button'
    }
    ,{
        prop : 'margin',
        defaultValue : {value : ''},
        valueType : {value : 'SpacingProps' , link : '/spacing'},
        description : 'Adjust the margin of the button'
    }
    ,{
        prop : 'bgColor',
        defaultValue : {value : ''},
        valueType : {value : 'string' },
        description : 'Background color of the button'
    }
    ,{
        prop : 'color',
        defaultValue : {value : ''},
        valueType : {value : 'string' },
        description : 'Font color of the button'
    }
    ,{
        prop : 'colorFamily',
        defaultValue : {value : 'primary'},
        valueType : {value : 'ColorProps', link : '/color'},
        description : 'Select from predefined color families'
    }
    ,{
        prop : 'variant',
        defaultValue : {value : 'filled'},
        valueType : {value : 'filled | outlined | subtle'},
        description : 'Variant of the button'
    },
    {
        prop: 'ariaLabel',
        defaultValue: { value: '' },
        valueType: { value: 'string' },
        description: 'Accessible label for screen readers, providing a textual alternative to the input field.',
    }
]