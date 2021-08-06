import {useState} from 'react';
import React from 'react';

export default {
    title: 'Example/Demo React.memo',

};

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>;
};
const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users');
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>;
});
export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Ilya', 'Dimych', 'Viktor']);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUsers([...users,'Katya'+ new Date().getTime()])}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>;
};
