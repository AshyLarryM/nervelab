// Inbox.tsx
'use client'
import React, { useState } from 'react';
import { EmailCard } from './EmailCard';
import { UserEmails, EmailWithReplies } from '@/lib/utils/server/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface InboxProps {
  userEmails: UserEmails;
  selectedFolder: 'inbox' | 'sent';
  toggleSidebar: () => void; // Add this prop
  isSidebarVisible: boolean;
}

export function Inbox({ userEmails, selectedFolder, toggleSidebar, isSidebarVisible }: InboxProps) {
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
      return new Intl.DateTimeFormat('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' }).format(date);
    } else {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }

  const emails = selectedFolder === 'inbox' ? userEmails?.receivedEmails : userEmails.sentEmails;

  return (
    <div className="w-full p-4 sm:w-3/4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={toggleSidebar} className="p-2 rounded-full">
          {isSidebarVisible ? <ChevronLeftIcon className="h-6 w-6 text-green-300" /> : <ChevronRightIcon className="h-6 w-6 text-green-300" />}
        </button>
        <h2 className="font-bold text-white text-header-glow text-center sm:text-4xl text-3xl flex-grow">
          {selectedFolder === 'inbox' ? 'Inbox' : 'Sent Emails'}
        </h2>
      </div>
      <div>
        {emails?.map(email => (
          <div key={email.id}>
            <div
              onClick={() => handleEmailClick(email)}
              className={`cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 border border-gray-700 hover:bg-gray-700 
                ${selectedEmail?.id === email.id ? 'bg-gray-700' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center w-full">
                <div className="flex justify-between w-full sm:w-auto">
                  <div className="font-bold text-md sm:text-xl">
                    {selectedFolder === 'inbox' ? email.fromUser.name : email.toUser.name}
                  </div>
                  <div className="text-sm sm:text-right sm:ml-4 block sm:hidden">
                    {formatDateTime(email.createdAt)}
                  </div>
                </div>
                <div className="sm:ml-6 text-gray-400 sm:text-left truncate overflow-hidden text-ellipsis w-full sm:w-auto">
                  {email.subject}
                </div>
                <div className="text-sm sm:text-right hidden sm:flex ml-auto">
                  {formatDateTime(email.createdAt)}
                </div>
              </div>
            </div>
            {selectedEmail?.id === email.id && (
              <div className="mt-2">
                <EmailCard email={selectedEmail} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
