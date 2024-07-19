'use client'
import PageFrame from '@/components/layouts/PageFrame';
import React, { useState } from 'react';
import { UserEmailResponse } from '@/lib/utils/server/types';
import { Inbox } from '@/components/mail/Inbox';
import { MailSidebar } from '@/components/mail/MailSidebar';
import { useSession } from 'next-auth/react';
import { useReceivedEmails } from '@/lib/utils/server/state/useReceivedEmails';

export const mockData: UserEmailResponse = {
  userEmails: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    sentEmails: [
      {
        id: 'email1',
        subject: 'Hello',
        body: 'This is a test email.',
        fromUserId: '1',
        toUserId: '2',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        fromUser: { name: 'John Doe', email: 'john.doe@example.com' },
        toUser: { name: 'Jane Smith', email: 'jane.smith@example.com' },
        replies: []
      },
    ],
    receivedEmails: [
      {
        id: 'email2',
        subject: 'Hello - Please Get Back to Me ASAP',
        body: 'Thanks for the email.',
        fromUserId: '2',
        toUserId: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        fromUser: { name: 'Jane Smith', email: 'jane.smith@example.com' },
        toUser: { name: 'John Doe', email: 'john.doe@example.com' },
        replies: [
          {
            id: 'reply1',
            subject: 'Re: Hello',
            body: 'You are welcome!',
            emailId: 'email2',
            userId: '1',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            user: { name: 'John Doe', email: 'john.doe@example.com' },
          }
        ]
      }
    ]
  }
};

export default function UserInboxPage() {

  const [selectedFolder, setSelectedFolder] = useState<'inbox' | 'sent'>('inbox');

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { data: userEmails, isLoading, error } = useReceivedEmails(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading emails</div>;

  console.log(userEmails)


  return (
    <PageFrame showFooter={true} showNavbar={true}>
      <div className='flex text-white max-w-full'>
        <MailSidebar onSelect={setSelectedFolder} selectedFolder={selectedFolder} />
        <Inbox userEmails={mockData.userEmails} selectedFolder={selectedFolder} />
      </div>
    </PageFrame>
  );
}
