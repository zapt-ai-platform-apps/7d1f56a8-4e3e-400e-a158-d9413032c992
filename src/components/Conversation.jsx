import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageInput from './MessageInput';

export default function Conversation() {
    const { id } = useParams();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch messages for conversation ID
        // Implement real-time updates with WebSockets or similar
    }, [id]);

    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 overflow-auto p-4 space-y-2">
                {messages.map((msg, index) => (
                    <div key={index} className="bg-gray-200 p-2 rounded">{msg.text}</div>
                ))}
            </div>
            <MessageInput onSend={(newMessage) => setMessages([...messages, newMessage])} />
        </div>
    );
}