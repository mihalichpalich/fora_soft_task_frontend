import React, {useEffect, useState} from 'react';
import axios from '../core/axios';

const JoinBlock = ({roomId, onLogin}) => {
    const [userName, setUserName] = useState('');
    const [warning, setWarning] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [wrongRoomIdWarning, setWrongRoomIdWarning] = useState(false);

    console.log(typeof roomId, roomId);

    useEffect(() => {
        const roomIdRegEx = /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{10}/g;

        if (roomId.match('(?=.*[0-9])(?=.*[a-z])[0-9a-z]{10}') === null) {
            setWrongRoomIdWarning(true)
        }
    }, []);

    const onEnter = async () => {
        const dataObj = {
            roomId,
            userName
        };

        if (userName) {
            setIsLoading(true);
            await axios.post('/rooms', dataObj);
            onLogin(dataObj);
            setWarning(false)
        } else {
            setWarning(true)
        }
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

export default JoinBlock;