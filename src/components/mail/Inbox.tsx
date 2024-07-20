'use client'
import React, { useState } from 'react';
import { EmailCard } from './EmailCard';
import { UserEmails, EmailWithReplies } from '@/lib/utils/server/types';

interface InboxProps {
  userEmails: UserEmails;
  selectedFolder: 'inbox' | 'sent';
}

export function Inbox({ userEmails, selectedFolder }: InboxProps) {
  const [selectedEmail, setSelectedEmail] = useState<EmailWithReplies | null>(null);

  function handleEmailClick(email: EmailWithReplies) {
    if (selectedEmail && selectedEmail.id === email.id) {
      setSelectedEmail(null);
    } else {
      setSelectedEmail(email);
    }
  };

  const emails = selectedFolder === 'inbox' ? userEmails?.receivedEmails : userEmails.sentEmails;

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-4xl font-bold text-white text-header-glow text-center">{selectedFolder === 'inbox' ? 'Inbox' : 'Sent Emails'}</h2>
      <div className="border-b border-gray-700">
        {emails?.map(email => (
          <div
            key={email.id}
            onClick={() => handleEmailClick(email)}
            className="cursor-pointer flex items-center justify-between p-2 hover:bg-gray-700"
          >
            <div className="flex items-center">
              <div className="font-bold mr-2">{selectedFolder === 'inbox' ? email.fromUser.name : email.toUser.name}</div>
              <div>{email.subject}</div>
            </div>
            <div>{new Date(email.createdAt).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
      {selectedEmail && (
        <div className="mt-4">
          <EmailCard email={selectedEmail} />
        </div>
      )}
    </div>
  );
}
