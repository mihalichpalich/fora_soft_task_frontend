import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import randomId from 'random-id';

import axios from '../core/axios';
import socket from "../core/socket";

const JoinBlock = ({match, onLogin, history}) => {
    const [roomId, setRoomId] = useState(match.params.id);
    const [userName, setUserName] = useState('');
    const [warning, setWarning] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [wrongRoomIdWarning, setWrongRoomIdWarning] = useState(false);

    useEffect(() => {
        if (!roomId) {
            setRoomId(randomId(10, 'a0'));
        } else {
            if (roomId.match('(?=.*[0-9])(?=.*[a-z])[0-9a-z]{10}') === null) {
                setWrongRoomIdWarning(true)
            }
        }
    }, [roomId]);

    const onEnter = async () => {
        const dataObj = {
            roomId,
            userName
        };

        if (userName) {
            setIsLoading(true);
            await axios.post('/rooms', dataObj);
            socket.connect();
            onLogin(dataObj);
            setWarning(false)
        } else {
            setWarning(true)
        }

        history.push(`/dialog/${roomId}`)
    };

    return (
        <div className="join-block">
            {wrongRoomIdWarning
                ? <p className="text-danger">RoomID is wrong!</p>
                : (
                    <>
                        <input type="text" placeholder="Your name" value={userName} onChange={e => setUserName(e.target.value.trim())}/>
                        <button
                            className="btn btn-success"
                            disabled={isLoading}
                            onClick={onEnter}
                        >
                            {isLoading ? 'Loading...' : 'ENTER'}
                        </button>
                        <p>Your room ID is: {roomId}</p>
                        {warning ? <p className="text-danger">Username is required!</p> : null}
                    </>
                )
            }
        </div>
    );
};

export default withRouter(JoinBlock);