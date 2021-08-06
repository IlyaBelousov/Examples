import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import {OnOff} from './components/OnOff/OnOff';
import {Rating, ControlledRatingType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {Select} from './components/Select/Select';
import {CraftedSelect} from './components/CraftedSelect/CraftedSelect';

function App() {

    let [ratingValue, setRatingValue] = useState<ControlledRatingType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    let items = [{title: 'Ilya', value: 1}, {title: 'Dimych', value: 2}, {title: 'Viktor', value: 3}];

    let [selectedValue, setSelectedValue] = useState<string | undefined>();
    let ItemsArray = [{id: 1, name: 'Ilya'}, {id: 2, name: 'Dimych'}, {id: 3, name: 'Viktor'}];
    const onItemClick = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <div className="app">
            <AppTitle/>
            <UncontrolledRating/>
            {/*<UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff/>

            <UncontrolledAccordion title={'Users'}/>
            <Accordion items={items}
                       title={'Menu'}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<UncontrolledAccordion title={'Menu'}/>*/}
            <Select/>
            <CraftedSelect onItemClick={onItemClick}
                           selectedValue={selectedValue}
                           ItemsArray={ItemsArray}/>
        </div>
    );
}

export default App;

export function AppTitle() {
    return <>This is App Component</>;
}




