import {Select} from './Select';
import {ChangeEvent, useState} from 'react';
import {ComponentStory} from '@storybook/react';



export default {
    title: 'Example/Select',
    component: Select,
};
export const Selecting: ComponentStory<typeof Select> = () => {
    let [parentValue,setParentValue]=useState<string|undefined>('3')
    const OnChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return <Select value={parentValue} onChange={OnChangeHandler}/>
};