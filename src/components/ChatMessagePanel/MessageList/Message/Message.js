import React from 'react';

import './Message.scss';

const Message = ({message, index, userName}) => {
    return (
        <div className={(message.userName !== userName) ? "message" : "message message-is-me"}
        >
            <p>{message.text}</p>

            <div>
                <span className="message-username">{message.userName}</span>
                <span>{message.sendingTime}</span>
            </div>
        </div>
    );
};

export default Message;