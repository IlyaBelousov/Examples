import {ComponentMeta, ComponentStory} from '@storybook/react';
import {CraftedSelect} from './CraftedSelect';
import React, {useState} from 'react';

export default {
    title: 'Example/CraftedSelect',
    component: CraftedSelect,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CraftedSelect>;
export const Select: ComponentStory<typeof CraftedSelect> = (args) => {
    let [collapsed, setCollapsed] = useState(true);
    let [selectedValue, setSelectedValue] = useState<string | undefined>();
    let ItemsArray = [{id: 1, name: 'Ilya'}, {id: 2, name: 'Dimych'}, {id: 3, name: 'Viktor'}];
    const onItemClick = (value: string) => {
        setSelectedValue(value);
        setCollapsed(!collapsed);
    };
    return <CraftedSelect onItemClick={onItemClick}
                          selectedValue={selectedValue}
                          ItemsArray={ItemsArray}/>;
};