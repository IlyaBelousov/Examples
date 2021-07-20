import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Example/Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;
let items = [{title: 'Ilya', value: 1}, {title: 'Dimych', value: 2}, {title: 'Viktor', value: 3}];
const onItemClick = action('some item was clicked');
export const AccordionCollapsed: ComponentStory<typeof Accordion> = (args) =>
    <Accordion collapsed={false} setAccordionCollapsed={() => {
    }} title={'Menu'}/>;

export const UnCollapsed: ComponentStory<typeof Accordion> = (args) => {

    return <Accordion onClick={onItemClick} items={items} collapsed={true} setAccordionCollapsed={() => {
    }} title={'Menu'}/>;
};


export const AccordionCollapsing: ComponentStory<typeof Accordion> = (args) => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    return <Accordion onClick={onItemClick}
                      items={items}
                      collapsed={accordionCollapsed}
                      setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                      title={'Menu'}/>;
};