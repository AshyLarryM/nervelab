import React from 'react';

interface MailSidebarProps {
  onSelect: (folder: 'inbox' | 'sent') => void;
  selectedFolder: 'inbox' | 'sent';
}

export function MailSidebar({ onSelect, selectedFolder }: MailSidebarProps) {
  return (
    <div className="w-1/5 border-r border-gray-700 p-4">
      <h2 className="text-2xl font-bold mb-4">Folders</h2>
      <ul>
        <li
          className={`cursor-pointer p-2 ${selectedFolder === 'inbox' ? 'bg-gray-700' : ''}`}
          onClick={() => onSelect('inbox')}
        >
          Inbox
        </li>
        <li
          className={`cursor-pointer p-2 ${selectedFolder === 'sent' ? 'bg-gray-700' : ''}`}
          onClick={() => onSelect('sent')}
        >
          Sent Mail
        </li>
      </ul>
    </div>
  );
}
