import React, {useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import socket from './core/socket';
import axios from './core/axios';
import JoinBlock from "./components/JoinBlock";
import Chat from "./components/Chat";
import reducer from './reducers/reducer';

const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        roomId: null,
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
        if (message.text) {
            dispatch({
                type: 'NEW_MESSAGE',
                payload: message
            })
        }
    };

    const unjoin = () => {
        dispatch({
            type: 'UNJOINED'
        })
    };

    useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers);
        socket.on('ROOM:NEW_MESSAGE', addMessage);
    }, []);

    return (
        <div className="wrapper">
            <Router>
                <Switch>
                    <Route exact path="/" component={({match}) => <JoinBlock onLogin={onLogin} match={match}/>}/>
                    <Route
                        path="/dialog/:id"
                        render={({match}) => (
                            !state.joined
                                ? <JoinBlock onLogin={onLogin} match={match}/>
                                : <Chat {...state} onAddMessage={addMessage} onUnjoin={unjoin}/>
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
