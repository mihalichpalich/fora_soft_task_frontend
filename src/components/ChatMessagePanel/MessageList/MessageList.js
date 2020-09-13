import React, {useEffect, useRef} from 'react';

import './MessageList.scss';
import Message from "./Message/Message";

const MessageList = ({messages, userName}) => {
    const messagesRef = useRef(null);

    useEffect(() => {
        messagesRef.current.scrollTo(0, 99999)
    }, [messages]);

    return (
        <div ref={messagesRef} className="message-list">
            {messages.map((message, index) => (
                <Message message={message} key={index} userName={userName}/>
            ))}
        </div>
    );
};

export default MessageList;