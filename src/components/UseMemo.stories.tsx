import {useMemo, useState} from 'react';

export default {
    title: 'Example/Demo Use Memo',
};
export const Example2 = () => {
    const [a, setA] = useState<number | null>(null);
    const [b, setB] = useState<number | null>(null);
    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(() => {
        let tempResultA = 1;
        if (a) {
            for (let i = 1; i <= a; i++) {

                let fake = 0;
                while (fake < 10000000) {
                    fake++;
                    const fakeValue = Math.random();
                }
                tempResultA *= i;
            }
        }
        return tempResultA;
    }, [a]);

    if (b) {
        for (let i = 1; i <= b; i++) {
            resultB *= i;
        }
    }
    return <>
        <input value={a ? a : ''} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b ? b : ''} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a {resultA}</div>
        <div>Result for b {resultB}</div>
    </>;
};
