import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ControlledRatingType, Rating} from './Rating';


export default {
    title: 'Example/Rating',
    component: Rating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Rating>;

export const EmptyStars: ComponentStory<typeof Rating> = (args) => <Rating value={0} onClick={() => {}}/>;
export const Rating1: ComponentStory<typeof Rating> = (args) => <Rating value={1} onClick={() => {}}/>;
export const Rating2: ComponentStory<typeof Rating> = (args) => <Rating value={2} onClick={() => {}}/>;
export const Rating3: ComponentStory<typeof Rating> = (args) => <Rating value={3} onClick={() => {}}/>;
export const Rating4: ComponentStory<typeof Rating> = (args) => <Rating value={4} onClick={() => {}}/>;
export const Rating5: ComponentStory<typeof Rating> = (args) => <Rating value={5} onClick={() => {}}/>;

export const ChangeRating: ComponentStory<typeof Rating> = (args) => {
    const [rating,setRating]=useState<ControlledRatingType>(0)
    return <Rating value={rating} onClick={setRating}/>;
};


