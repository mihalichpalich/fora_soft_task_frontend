import React, {useEffect, useReducer} from 'react';
import socket from './core/socket';
import axios from './core/axios';
import randomId from 'random-id';

import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";
import reducer from './reducers/reducer';

const App = ({match}) => {
    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        roomId: match.params.id || randomId(10, 'a0'),
        userName: null,
        users: [],
        messages: []
    });

    const onLogin = async (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj
        });

        socket.emit('ROOM:JOIN', obj);
        const {data} = await axios.get(`/room/${obj.roomId}`);
        dispatch({
            type: 'SET_DATA',
            payload: data
        })
    };

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users
        })
    };

    const addMessage = (message) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message
        })
    };

    useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers);
        socket.on('ROOM:NEW_MESSAGE', addMessage);
    }, []);

    return (
        <div className="wrapper">
            {!state.joined
                ? <JoinBlock roomId={state.roomId} onLogin={onLogin}/>
                : <Chat {...state} onAddMessage={addMessage}/>}
        </div>
    );
};

export default App;
