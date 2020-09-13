import React, {useState} from 'react';
import dayjs from "dayjs";

import './MessageForm.scss';
import socket from "../../../core/socket";

const MessageForm = ({userName, roomId, onAddMessage}) => {
    const [messageValue, setMessageValue] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSendMessage()
        }
    };

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

    return (
        <form className="message-form">
                <textarea
                    value={messageValue}
                    onChange={e => setMessageValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="form-control"
                    rows="3" />
                <button type="button" className="btn btn-primary" onClick={onSendMessage}>Send</button>
        </form>
    );
};

export default MessageForm;