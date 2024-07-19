'use client'
import React, { useState } from 'react';
import { AccessDeniedModal } from './AccessDeniedModal';

interface MailSidebarProps {
  onSelect: (folder: 'inbox' | 'sent') => void;
  selectedFolder: 'inbox' | 'sent';
}

export function MailSidebar({ onSelect, selectedFolder }: MailSidebarProps) {
  const [showAccessModal, setShowAccessModal] = useState<boolean>(false);

  function showAccessDeniedModal() {
    setShowAccessModal(true);
  }

  function closeAccessDeniedModal() {
    setShowAccessModal(false);
  }

  return (
    <div className="w-1/5 border-r border-gray-700 p-4">
      <h2 className="text-2xl font-bold mb-4 text-glow text-center">VECTORBALL</h2>
      <div className='text-center'>
        <button onClick={showAccessDeniedModal} className='my-4 bg-transparent border border-purple-500 p-4 rounded-md button-glow hover:bg-purple-500'>Compose</button>
      </div>
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
      <AccessDeniedModal isOpen={showAccessModal} onClose={closeAccessDeniedModal} />
    </div>
  );
}
