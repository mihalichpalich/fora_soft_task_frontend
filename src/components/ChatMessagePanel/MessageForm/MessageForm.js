import React, {useState} from 'react';
import dayjs from "dayjs";

import './MessageForm.scss';
import socket from "../../../core/socket";

/**
 * Component for messages sending
 * @param {string} userName
 * @param {string} roomId
 * @param {func} onAddMessage
 * @component
 */

const MessageForm = ({userName, roomId, onAddMessage}) => {
    const [messageValue, setMessageValue] = useState('');

    /**
     * Send message after key pressing
     * @param {object} e the handler object
     */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSendMessage()
        }
    };

    /**
     * Function for sending a message by sockets and dispatching it to the state
     */
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