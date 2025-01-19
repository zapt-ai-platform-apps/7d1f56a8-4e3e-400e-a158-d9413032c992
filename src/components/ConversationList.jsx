import React from 'react';
import { Link } from 'react-router-dom';

export default function ConversationList() {
    const conversations = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];

    return (
        <div className="h-full px-4 py-2 space-y-4">
            <h1 className="text-2xl font-bold">Conversations</h1>
            <ul>
                {conversations.map(conversation => (
                    <li key={conversation.id} className="pb-1">
                        <Link to={`/chat/${conversation.id}`} className="text-blue-500">{conversation.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}