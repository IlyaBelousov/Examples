import React, {useEffect, useState} from 'react';
import s from './Time.module.css';

export const AnalogClock = () => {
    const deg = 6;
    const [date, setDate] = useState(new Date());
    const hours = date.getHours() * 30;
    const minutes = date.getMinutes() * deg;
    const seconds = date.getSeconds() * deg;
    useEffect(() => {
        let clock = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(clock);

    }, [date]);
    return (
        <div className={s.clock}>
            <div className={s.hour}>
                <div style={{transform:`rotateZ(${(hours)+(minutes/12)}deg)`}} className={s.hr}>
                </div>
            </div>
            <div className={s.min}>
                <div style={{transform:`rotateZ(${(minutes)}deg)`}} className={s.mn}>
                </div>
            </div>
            <div className={s.sec}>
                <div style={{transform:`rotateZ(${(seconds)}deg)`}} className={s.sc}>
                </div>
            </div>

        </div>
    );
};
