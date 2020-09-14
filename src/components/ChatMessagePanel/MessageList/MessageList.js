import React, {useEffect, useRef} from 'react';

import './MessageList.scss';
import Message from "./Message/Message";

/**
 * Component with the list of messages
 * @param {array} messages
 * @param {string} userName
 * @component
 */

const MessageList = ({messages, userName}) => {
    const messagesRef = useRef(null);

    /**
     * Set the scroll for the message list
      */
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