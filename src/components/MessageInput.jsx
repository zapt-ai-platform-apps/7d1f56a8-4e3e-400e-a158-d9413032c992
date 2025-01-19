import React, { useState } from 'react';

export default function MessageInput({ onSend }) {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            onSend({ text: inputValue });
            setInputValue('');
        }
    };

    return (
        <div className="flex items-center border-t p-2">
            <input
                type="text"
                className="flex-1 p-2 border rounded box-border"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message"
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer" onClick={handleSend}>
                Send
            </button>
        </div>
    );
}