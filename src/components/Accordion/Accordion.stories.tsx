import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from './Accordion';



export default {
    title: 'Example/Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;

export const AccordionCollapsed: ComponentStory<typeof Accordion> = (args) =>
    <Accordion collapsed={true} setAccordionCollapsed={()=>{}} title={'Menu'}/>;
export const UnCollapsed: ComponentStory<typeof Accordion> = (args) =>
    <Accordion collapsed={false} setAccordionCollapsed={()=>{}} title={'Menu'} />;


export const AccordionCollapsing: ComponentStory<typeof Accordion> = (args) => {
    let [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false)
    return <Accordion
        collapsed={accordionCollapsed}
        setAccordionCollapsed={()=>setAccordionCollapsed(!accordionCollapsed)}
        title={'Menu'} />;
};