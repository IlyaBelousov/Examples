import React, {useState} from 'react';

type AccordionPropsType = {
    title: string,
    //collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);
    const ClickHandler = () => {
        if (!collapsed) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }

    };
    return (
        <div>
            <AccordionTitle ClickHandler={ClickHandler} titleValue={props.title}/>

            {collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitleProps = {
    titleValue: string
    ClickHandler: () => void
}

export function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={props.ClickHandler}>--{props.titleValue}--</h3>;
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