import newStyled from "@emotion/styled";
import React from "react";
import CardComponent from "../../../Components/Card";
import { getBorderColor, getTextColor } from "../../../Mixins/Color";
import { useStyleSystem } from "../../../Mixins/context";

export const ContentCard = newStyled(CardComponent)`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 2em);
    margin: 1em;
    border-radius: 0.5em;
`

export const ContentBody = newStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const CodeBlock = newStyled.code<{borderColor?: string}>`
    flex-grow: 1;
    margin: 1em;
    flex-wrap: wrap;
    > div {
        font-family: 'Fira Code', 'Courier New', monospace; /* Use a modern coding font !important */
    }
    background-color: #2c3e50 ; /* Light gray background for visibility */
    color: #f5f5f5; /* Dark gray text for readability */
    padding: 0.2em 0.4em; /* Add padding for spacing */
    font-size: 0.95em; /* Slightly smaller than normal text */
    border-radius: 0.5em; /* Rounded corners for a soft look */
    border: 1px solid ${({borderColor}) => borderColor ?? '#e1e4e8'}; /* Subtle border */
    white-space: nowrap; /* Prevent wrapping */
    display: inline-block; /* Ensure inline-block behavior */
    padding: 1em;
    max-width: 480px;
    overflow: auto;
`

export const ContentBlock = newStyled.div`
    display: flex;
    margin: 1em;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 0.5em; /* Rounded corners for a soft look */
`

const ContentPropsTable = newStyled.div<{borderColor: string}>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    overflow: hidden;
    margin: 1em 10%;
    border-radius: 0.5em;
    border-left: 1px solid ${({borderColor}) => borderColor};
    border-top: 1px solid ${({borderColor}) => borderColor};
    overflow: auto;
`
const ContentPropsTableCell = newStyled.div<{borderColor: string; backgroundColor: string; textColor: string}>`
    display: flex;
    padding: 0.5em;
    border-right: 1px solid ${({borderColor}) => borderColor};
    border-bottom: 1px solid ${({borderColor}) => borderColor};
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${({backgroundColor}) => backgroundColor};
    color: ${({textColor}) => textColor};
    font-family: 'Fira Code', 'Courier New', monospace; /* Use a modern coding font !important */
    >a {
        font-family: 'Fira Code', 'Courier New', monospace; /* Use a modern coding font !important */
        color: ${({textColor}) => textColor};
    }
`
const ContentPropsTableHeader = newStyled(ContentPropsTableCell)<{headerBackgroundColor: string}>`
    font-weight: bold;
    background-color: ${({headerBackgroundColor}) => headerBackgroundColor};
`

export type ContentPropsTableProps = {
    prop : string,
    defaultValue : {value : string, link? : string},
    valueType : {value : string, link? : string},
    description : string,
}[]



export const ContentPropsTableContainer = (props : {propsConfig : ContentPropsTableProps}) => {
    const colorConfig = useStyleSystem().colors
    const borderColor = getBorderColor(colorConfig)
    const tableCellBackground = colorConfig.isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)'
    const tableHeaderBackground = colorConfig.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.07)'
    const tableTextColor = getTextColor(colorConfig)

    return <ContentPropsTable borderColor={borderColor}>
        <ContentPropsTableHeader borderColor={borderColor} backgroundColor={tableCellBackground} textColor={tableTextColor} headerBackgroundColor={tableHeaderBackground}>Property</ContentPropsTableHeader>
        <ContentPropsTableHeader borderColor={borderColor} backgroundColor={tableCellBackground} textColor={tableTextColor} headerBackgroundColor={tableHeaderBackground}>Default Value</ContentPropsTableHeader>
        <ContentPropsTableHeader borderColor={borderColor} backgroundColor={tableCellBackground} textColor={tableTextColor} headerBackgroundColor={tableHeaderBackground}>Type</ContentPropsTableHeader>
        <ContentPropsTableHeader borderColor={borderColor} backgroundColor={tableCellBackground} textColor={tableTextColor} headerBackgroundColor={tableHeaderBackground}>Description</ContentPropsTableHeader>
        {props.propsConfig.sort((a,b) => a.prop.localeCompare(b.prop)).map((prop, index) => {
            return <React.Fragment key={index}>
                <ContentPropsTableCell borderColor={borderColor} backgroundColor={tableCellBackground} textColor={tableTextColor}>{prop.prop}</ContentPropsTableCell>
                <ContentPropsTableCell borderColor={borderColor} backgroundColor={tableCellBackground} textColor={tableTextColor}>{prop.defaultValue.link ? <a href={prop.defaultValue.link} target="_blank" rel="noreferrer">{prop.defaultValue.value}</a> : prop.defaultValue.value}</ContentPropsTableCell>
                <ContentPropsTableCell borderColor={borderColor} backgroundColor={tableCellBackground} textColor={tableTextColor}>{prop.valueType.link ? <a href={prop.valueType.link} target="_blank" rel="noreferrer">{prop.valueType.value}</a> : prop.valueType.value}</ContentPropsTableCell>
                <ContentPropsTableCell borderColor={borderColor} backgroundColor={tableCellBackground} textColor={tableTextColor}>{prop.description}</ContentPropsTableCell>
            </React.Fragment>
        })}
    </ContentPropsTable>
}

export const EnumTable = newStyled.div`

`
