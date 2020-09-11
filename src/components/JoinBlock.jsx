import React, {useState} from 'react';
import axios from '../core/axios';

const JoinBlock = ({roomId, onLogin}) => {
    const [userName, setUserName] = useState('');
    const [warning, setWarning] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
            <input type="text" placeholder="Your name" value={userName} onChange={e => setUserName(e.target.value)}/>
            <button
                className="btn btn-success"
                disabled={isLoading}
                onClick={onEnter}
            >
                {isLoading ? 'Loading...' : 'ENTER'}
            </button>
            <p>Your room ID is: {roomId}</p>
            {warning ? <p className="text-danger">Не введено имя</p> : null}
        </div>
    );
};

export default JoinBlock;