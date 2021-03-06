import React, {useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import socket from './core/socket';
import axios from './core/axios';
import JoinBlock from "./pages/JoinBlock/JoinBlock";
import Chat from "./pages/Chat/Chat";
import reducer from './reducers/reducer';
import './App.scss';

/**
 * Main component for chat
 * @component
 */

const App = () => {
    /**
     * Initial app state
     */

    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: []
    });

    /**
     * Function to join the created room and set the data inside
     * @param {object} obj Object with user data (roomID and username)
     */

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

    /**
     * Dispatch users to the state
     * @param {array} users Array of users
     */

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users
        })
    };

    /**
     * Dispatch message to the state
     * @param {object} message Object with message data (username, text and sending date)
     */

    const addMessage = (message) => {
        if (message.text) {
            dispatch({
                type: 'NEW_MESSAGE',
                payload: message
            })
        }
    };

    /**
     * Function for logging out from the chat
     */

    const unjoin = () => {
        dispatch({
            type: 'UNJOINED'
        })
    };

    /**
     * Get arrays of users and messages in the room
     */

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
