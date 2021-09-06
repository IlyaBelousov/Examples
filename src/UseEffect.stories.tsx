import {useEffect, useState} from 'react';

export default {
    title: 'Example/Demo UseEffect',
};
export const UseEffectDemo = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('Effect');
        setTimeout(() => {
            console.log('Timeout');
            document.title=counter.toLocaleString()
        },2000);
    },[counter]);


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>;
};
