import React, {useEffect, useState} from 'react';
import s from './Time.module.css';
import pauseIcon from './Pause.png'
import startIcon from './Start.png'

export const Timer = () => {
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [start, setStart] = useState(false);
    const TwoDigitsTime = (time: number) => time < 10 ? '0' + time : time;
    useEffect(() => {
        if (!start) return;
        let time = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        return () => {
            clearInterval(time);
        };
    }, [seconds, start]);
    if (seconds === 60) {
        setMinutes(minutes + 1);
        setSeconds(0);
    }
    if (minutes === 60) {
        setHours(hours + 1);
        minutes = 0;
    }
    return <>
        <div className={s.timer}>
            {TwoDigitsTime(hours)}:{TwoDigitsTime(minutes)}:{TwoDigitsTime(seconds)}
            <img src={start?pauseIcon:startIcon} onClick={() => setStart(!start)}/>
        </div>

    </>;
};

