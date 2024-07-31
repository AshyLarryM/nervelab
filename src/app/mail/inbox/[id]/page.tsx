// UserInboxPage.tsx
'use client'
import PageFrame from '@/components/layouts/PageFrame';
import React, { useState } from 'react';
import { UserEmailResponse } from '@/lib/utils/server/types';
import { Inbox } from '@/components/mail/Inbox';
import { MailSidebar } from '@/components/mail/MailSidebar';
import { useSession } from 'next-auth/react';
import { useReceivedEmails } from '@/lib/utils/server/state/useReceivedEmails';

export default function UserInboxPage() {
  const [selectedFolder, setSelectedFolder] = useState<'inbox' | 'sent'>('inbox');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { data: userEmails, isLoading, error } = useReceivedEmails(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading emails</div>;

  const toggleSidebar = () => setIsSidebarVisible(prev => !prev);

  return (
    <PageFrame showFooter={true} showNavbar={true}>
      <div className='flex text-white max-w-full h-full'>
        {isSidebarVisible && <MailSidebar onSelect={setSelectedFolder} selectedFolder={selectedFolder} />}
        <Inbox userEmails={userEmails} selectedFolder={selectedFolder} isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>
    </PageFrame>
  );
}
