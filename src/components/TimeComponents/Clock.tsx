import React, {useEffect, useState} from 'react';


export const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [start, setStart] = useState(false);
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    const StartInterval = () => {
        setStart(true);
    };
    const StopInterval = () => {
        setStart(false);
    };


    useEffect(() => {
        if (!start) {
            return;
        }
        let clock = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(clock);

    }, [start, date]);
    return <>
        {hours}:{minutes}:{seconds}
        <button onClick={StartInterval}>start</button>
        <button onClick={StopInterval}>stop</button>
    </>;
};

