import newStyled from "@emotion/styled";
import React from "react";
import CardComponent from "../../../Components/Card";

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

export const CodeBlock = newStyled.code`
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
    border: 1px solid #e1e4e8; /* Subtle border */
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

const ContentPropsTable = newStyled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    overflow: hidden;
    margin: 1em 10%;
    border-radius: 0.5em;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    overflow: auto;
`
const ContentPropsTableCell = newStyled.div`
    display: flex;
    padding: 0.5em;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    font-family: 'Fira Code', 'Courier New', monospace; /* Use a modern coding font !important */
    >a {
        font-family: 'Fira Code', 'Courier New', monospace; /* Use a modern coding font !important */
        color: #3498db;
    }
`
const ContentPropsTableHeader = newStyled(ContentPropsTableCell)`
    font-weight: bold;
    background-color: #eaeaea;
`

export type ContentPropsTableProps = {
    prop : string,
    defaultValue : {value : string, link? : string},
    valueType : {value : string, link? : string},
    description : string,
}[]



export const ContentPropsTableContainer = (props : {propsConfig : ContentPropsTableProps}) => {
    return <ContentPropsTable>
        <ContentPropsTableHeader>Property</ContentPropsTableHeader>
        <ContentPropsTableHeader>Default Value</ContentPropsTableHeader>
        <ContentPropsTableHeader>Type</ContentPropsTableHeader>
        <ContentPropsTableHeader>Description</ContentPropsTableHeader>
        {props.propsConfig.sort((a,b) => a.prop.localeCompare(b.prop)).map((prop, index) => {
            return <React.Fragment key={index}>
                <ContentPropsTableCell>{prop.prop}</ContentPropsTableCell>
                <ContentPropsTableCell>{prop.defaultValue.link ? <a href={prop.defaultValue.link} target="_blank" rel="noreferrer">{prop.defaultValue.value}</a> : prop.defaultValue.value}</ContentPropsTableCell>
                <ContentPropsTableCell>{prop.valueType.link ? <a href={prop.valueType.link} target="_blank" rel="noreferrer">{prop.valueType.value}</a> : prop.valueType.value}</ContentPropsTableCell>
                <ContentPropsTableCell>{prop.description}</ContentPropsTableCell>
            </React.Fragment>
        })}
    </ContentPropsTable>
}

export const EnumTable = newStyled.div`

`