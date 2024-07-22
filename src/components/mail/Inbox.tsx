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

  function formatDateTime(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const isOlderThan24Hours = (now.getTime() - date.getTime()) > 24 * 60 * 60 * 1000;

    if (isOlderThan24Hours) {
      return date.toLocaleDateString();
    } else {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }

  const emails = selectedFolder === 'inbox' ? userEmails?.receivedEmails : userEmails.sentEmails;

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-4xl font-bold text-white text-header-glow text-center mb-4">{selectedFolder === 'inbox' ? 'Inbox' : 'Sent Emails'}</h2>
      <div>
        {emails?.map(email => (
          <div
            key={email.id}
            onClick={() => handleEmailClick(email)}
            className={`cursor-pointer flex items-center justify-between p-2 border border-gray-700 hover:bg-gray-700 ${selectedEmail?.id === email.id ? 'bg-gray-700' : ''}`}
          >
            <div className="flex items-center">
              <div className="font-bold mr-2 text-xl p-1">{selectedFolder === 'inbox' ? email.fromUser.name : email.toUser.name}</div>
              <div className='text-xl font-thin'>- {email.subject}</div>
            </div>
            <div>{formatDateTime(email.createdAt)}</div>
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
