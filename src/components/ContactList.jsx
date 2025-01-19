import React from 'react';

export default function ContactList() {
    const contacts = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];

    return (
        <div className="h-full p-4 space-y-4">
            <h1 className="text-2xl font-bold">Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <span className="text-blue-500">{contact.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}