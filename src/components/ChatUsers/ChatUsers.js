import React from 'react';
import {Link} from "react-router-dom";

import './ChatUsers.scss';

/**
 * Component with the list of users in the room, logging out button and the invitation link
 * @param roomId
 * @param onGoBack Function for logging out and disconnecting from the room
 * @param users
 * @component
 */

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
                The link for invitation: <a
                                            href={window.location.href}
                                            style={{fontSize: 11}}>{window.location.href}</a>
            </p>
        </div>
    );
};

export default ChatUsers;