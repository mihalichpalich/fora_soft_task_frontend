import React from 'react';
import {Link} from "react-router-dom";

import './ChatUsers.scss';

const ChatUsers = ({roomId, onGoBack, users}) => {
    return (
        <div className="chat-users">
            RoomID: <b>{roomId}</b>
            <hr/>

            <Link onClick={() => onGoBack()} to={`/dialog/${roomId}`}>
                <button type="button" className="btn btn-secondary chat-go-back">Back</button>
            </Link>

            <b>Online:</b>
            <ul>
                {users.map((name, index) => <li key={name + index}>{name}</li>)}
            </ul>

            <p className="chat-users-invitation-link">
                The link for invitation: <span style={{fontSize: 11}}>{window.location.href}</span>
            </p>
        </div>
    );
};

export default ChatUsers;