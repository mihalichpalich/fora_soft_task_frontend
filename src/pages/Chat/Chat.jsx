import React from 'react';
import PropTypes from 'prop-types';

import socket from '../../core/socket';
import './Chat.scss';
import ChatUsers from "../../components/ChatUsers/ChatUsers";
import ChatMessagePanel from "../../components/ChatMessagePanel/ChatMessagePanel";

/**
 * Main component for the chat
 * @param {array} users Array of users
 * @param {array} messages Array of messages
 * @param {string} userName Username
 * @param {string} roomId RoomID
 * @param {func} onAddMessage Function for dispatching message to the state
 * @param {func} onUnjoin Function for logging out from the chat
 * @component
 */

const Chat = ({users, messages, userName, roomId, onAddMessage, onUnjoin}) => {
    /**
     * Function for logging out and disconnecting from the room
     */
    const goBack = () => {
        socket.disconnect();
        onUnjoin();
    };

    return (
        <div className="chat">
            <ChatUsers roomId={roomId} onGoBack={goBack} users={users}/>
            <ChatMessagePanel messages={messages} userName={userName} roomId={roomId} onAddMessage={onAddMessage}/>
        </div>
    );
};

Chat.propTypes = {
    users: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired,
    userName: PropTypes.string.isRequired,
    roomId: PropTypes.string.isRequired,
    onAddMessage: PropTypes.func.isRequired,
    onUnjoin: PropTypes.func.isRequired
};

Chat.defaultProps = {
    messages: []
};

export default Chat;