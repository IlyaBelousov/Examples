import React, {useState} from 'react';

type AccordionPropsType = {
    title: string,
    //collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle titleValue={props.title}/>
            <button onClick={() => {
                if (collapsed === false) {
                    setCollapsed(true);
                } else {
                    setCollapsed(false);
                }
            }}>Toggle
            </button>
            {collapsed&&<AccordionBody />}
        </div>
    );
}

type AccordionTitleProps = {
    titleValue: string
}

export function AccordionTitle(props: AccordionTitleProps) {
    return <h3>--{props.titleValue}--</h3>;
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