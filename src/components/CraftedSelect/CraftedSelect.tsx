import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './CraftedSelect.module.css';

type ItemType = {
    id: number
    name: string
}
type CraftedSelectPropsType = {
    selectedValue: string | undefined
    ItemsArray: ItemType[]
    onItemClick: (value: string) => void
}

export const CraftedSelect = (props: CraftedSelectPropsType) => {
    const [hoveredItem, setHoveredItem] = useState(props.selectedValue);
    const [collapsed, setCollapsed] = useState(true);
    useEffect(() => {
        setHoveredItem(props.selectedValue)
    }, [props.selectedValue]);

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.ItemsArray.length; i++) {
                if (props.ItemsArray[i].name === hoveredItem) {
                    let nextItem = e.key === 'ArrowDown' ? props.ItemsArray[i + 1] : props.ItemsArray[i - 1];
                    if (nextItem) {
                        setHoveredItem(nextItem.name);
                        props.onItemClick(nextItem.name);
                        return;
                    }
                }

            }
            setHoveredItem(props.ItemsArray[0].name)

        }
    };

    return (
        <div tabIndex={0}
             onKeyUp={onKeyUpHandler} className={s.selectContainer}>
            <div className={s.select}
                 onClick={() => setCollapsed(!collapsed)}>{props.selectedValue}</div>
            {!collapsed &&
            props.ItemsArray.map((i) => {
                const onItemClickHandler = () => {
                    props.onItemClick(i.name);
                    setCollapsed(true);
                };
                return <div
                    onMouseEnter={() => {
                        setHoveredItem(i.name);
                    }}
                    onClick={onItemClickHandler}
                    className={s.item + '' + (hoveredItem && hoveredItem === i.name && s.item + ' ' + s.selected)}
                    key={i.id}>{i.name}</div>;
            })}
        </div>
    );
};
