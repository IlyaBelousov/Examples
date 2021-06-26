import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {OnOff} from './OnOff';



export default {
    title: 'Example/OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

export const OnMode: ComponentStory<typeof OnOff> = (args) => <OnOff on={true} onChange={()=>{}} />;
export const OffMode: ComponentStory<typeof OnOff> = (args) => <OnOff on={false} onChange={()=>{}} />;


export const OnOffChanging: ComponentStory<typeof OnOff> = (args) => {
    const [value,setValue]=useState<boolean>(false)
    return <OnOff on={value} onChange={setValue} />;
};