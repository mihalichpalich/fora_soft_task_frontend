import React from 'react';

import './ChatMessagePanel.scss';
import MessageList from "./MessageList/MessageList";
import MessageForm from "./MessageForm/MessageForm";

const ChatMessagePanel = ({messages, userName, roomId, onAddMessage}) => {
    return (
        <div className="chat-message-panel">
            <MessageList messages={messages} userName={userName}/>
            <MessageForm userName={userName} roomId={roomId} onAddMessage={onAddMessage}/>
        </div>
    );
};

export default ChatMessagePanel;