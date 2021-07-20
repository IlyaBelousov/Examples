import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    setAccordionCollapsed: () => void
    items?: ItemType[]
    onClick?: (i: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle ClickHandler={props.setAccordionCollapsed} titleValue={props.title}/>
            {props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
}

type AccordionTitleProps = {
    titleValue: string
    ClickHandler: () => void
}

export function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={() => props.ClickHandler()}>--{props.titleValue}--</h3>;
}

type AccordionBodyProps = {
    items?: ItemType[]
    onClick?: (i: any) => void
}

export function AccordionBody(props: AccordionBodyProps) {

    return (
        <ul>
            {
                props.items?.map((i, index) => {
                    return <li onClick={() => {
                        props.onClick&&props.onClick(i.value);
                    }} key={index}>{i.title}</li>;
                })
            }
        </ul>

    );


}