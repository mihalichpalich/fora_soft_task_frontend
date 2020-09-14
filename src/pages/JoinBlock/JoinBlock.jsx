import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import randomId from 'random-id';
import PropTypes from 'prop-types';

import axios from '../../core/axios';
import socket from "../../core/socket";
import './JoinBlock.scss';

/**
 * Component for logging in to the chat
 * @param {object} match Object with query params
 * @param {func} onLogin Function for logging in into the room and load users and messages
 * @component
 */

const JoinBlock = ({match, onLogin}) => {
    const [roomId, setRoomId] = useState(match.params.id);
    const [userName, setUserName] = useState('');
    const [nameWarning, setNameWarning] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [wrongRoomIdWarning, setWrongRoomIdWarning] = useState(false);

    /**
     * Set the roomID unless it's not inside the query
     * If it is, check if it consists of 10 symbols - lowercase letters and numbers
     */

    useEffect(() => {
        if (!roomId) {
            setRoomId(randomId(10, 'a0'));
        } else {
            if (roomId.match('(?=.*[0-9])(?=.*[a-z])[0-9a-z]{10}') === null) {
                setWrongRoomIdWarning(true)
            }
        }
    }, [roomId]);

    /**
     * Function to check the username, create the room in the server and send the users data
     */

    const onEnter = async () => {
        const dataObj = {
            roomId,
            userName
        };

        if (!userName) {
            setNameWarning(true)
        } else {
            setIsLoading(true);
            await axios.post('/rooms', dataObj);
            socket.connect();
            onLogin(dataObj);
            setNameWarning(false)
        }
    };

    return (
        <div className="join-block">
            {wrongRoomIdWarning
                ? <p className="text-danger">RoomID is wrong!</p>
                : (
                    <>
                        <input type="text" placeholder="Your name" value={userName} onChange={e => setUserName(e.target.value.trim())}/>

                        <Link to={`/dialog/${roomId}`}>
                            <button className="btn btn-success" onClick={onEnter} disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'ENTER'}
                            </button>
                        </Link>

                        <p>Your room ID is: {roomId}</p>
                        {nameWarning ? <p className="text-danger">Username is required!</p> : null}
                    </>
                )
            }
        </div>
    );
};

JoinBlock.propTypes = {
    match: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default JoinBlock;