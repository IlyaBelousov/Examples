import React from 'react';

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    setAccordionCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle ClickHandler={props.setAccordionCollapsed} titleValue={props.title}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitleProps = {
    titleValue: string
    ClickHandler: () => void
}

export function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={()=>props.ClickHandler()}>--{props.titleValue}--</h3>;
}

type AccordionBodyProps = {
    //isCollapsed: boolean
}

export function AccordionBody(props: AccordionBodyProps) {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    );


}