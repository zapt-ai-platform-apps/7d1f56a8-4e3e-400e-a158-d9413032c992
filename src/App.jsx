import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConversationList from './components/ConversationList';
import Conversation from './components/Conversation';
import ContactList from './components/ContactList';

export default function App() {
    return (
        <div className="min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ConversationList />} />
                    <Route path="/chat/:id" element={<Conversation />} />
                    <Route path="/contacts" element={<ContactList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}