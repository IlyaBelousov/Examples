import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff';

function App() {

    return (
        <div>
            <AppTitle/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff />
            <OnOff />
            <OnOff />
            <Accordion title={'Users'}/>
            <Accordion title={'Menu'}/>
            {/*<Accordion title={'Menu'} collapsed={true}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'Users'} collapsed={false}/>*/}

        </div>
    );
}

export default App;

export function AppTitle() {
    return <>This is App Component</>
}




