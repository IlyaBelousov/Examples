import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useState} from 'react';

type DefaultSelectType= DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
type SelectType = {
    value?: string
}&DefaultSelectType

export const Select:React.FC<SelectType> = ({...restProps}) => {

    return (
        <>
            <select {...restProps} >
                <option value={'1'}>none</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Kiev</option>
                <option value={'4'}>Minsk</option>
            </select>
        </>
    );
};

