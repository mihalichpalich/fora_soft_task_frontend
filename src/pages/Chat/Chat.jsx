import React from 'react';

import socket from '../../core/socket';
import './Chat.scss';
import ChatUsers from "../../components/ChatUsers/ChatUsers";
import ChatMessagePanel from "../../components/ChatMessagePanel/ChatMessagePanel";

const Chat = ({users, messages, userName, roomId, onAddMessage, onUnjoin}) => {
    const goBack = () => {
        onUnjoin();
        socket.disconnect();
    };

    return (
        <div className="chat">
            <ChatUsers roomId={roomId} onGoBack={goBack} users={users}/>
            <ChatMessagePanel messages={messages} userName={userName} roomId={roomId} onAddMessage={onAddMessage}/>
        </div>
    );
};

export default Chat;