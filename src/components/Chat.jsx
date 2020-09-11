import React, {useEffect, useRef, useState} from 'react';
import dayjs from "dayjs";

import socket from '../core/socket';

const Chat = ({users, messages, userName, roomId, onAddMessage}) => {
    const [messageValue, setMessageValue] = useState('');
    const messagesRef = useRef(null);

    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            roomId,
            text: messageValue,
            sendingTime: dayjs().format('D-MM-YYYY HH:mm')
        });
        onAddMessage({userName, text: messageValue, sendingTime: dayjs().format('D-MM-YYYY HH:mm')});
        setMessageValue('')
    };

    useEffect(() => {
        messagesRef.current.scrollTo(0, 99999)
    }, [messages]);

    return (
        <div className="chat">
            <div className="chat-users">
                Room: <b>{roomId}</b>
                <hr/>
                <b>Online:</b>
                <ul>
                    {users.map((name, index) => <li key={name + index}>{name}</li>)}
                </ul>
            </div>

            <div className="chat-messages">
                <div ref={messagesRef} className="messages">
                    {messages.map((message, index) => (
                        <div key={message.userName + index} className="message">
                            <p>{message.text}</p>

                            <div>
                                <span className="message-username">{message.userName}</span>
                                <span>{message.sendingTime}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <form>
                    <textarea
                        value={messageValue}
                        onChange={e => setMessageValue(e.target.value)}
                        className="form-control"
                        rows="3" />
                    <button type="button" className="btn btn-primary" onClick={onSendMessage}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;