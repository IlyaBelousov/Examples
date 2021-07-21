import React, {useState} from 'react';
import s from './CraftedSelect.module.css';

export const CraftedSelect = () => {
    let [collapsed, setCollapsed] = useState(true);
    let [selectValue,setSelectValue]=useState<string|undefined>()
    let ItemsArray = ['Ilya', 'Dimych', 'Viktor'];
    const onItemClick = (value:string) => {
        setSelectValue(value)
        setCollapsed(true)
    };
    return (
        <div className={s.selectContainer}>
            <div className={s.select} onClick={() => setCollapsed(!collapsed)}>{selectValue}</div>
            {!collapsed && ItemsArray.map((i, index) => {
                return <div onClick={()=>onItemClick(i)} className={s.item} key={index}>{i}</div>;
            })}
        </div>
    );
};

