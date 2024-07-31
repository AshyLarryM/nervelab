'use client'
import PageFrame from '@/components/layouts/PageFrame';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useReceivedEmails } from '@/lib/utils/server/state/useReceivedEmails';
import { Inbox } from '@/components/mail/Inbox';
import { MailSidebar } from '@/components/mail/MailSidebar';

export default function UserInboxPage() {
  const [selectedFolder, setSelectedFolder] = useState<'inbox' | 'sent'>('inbox');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { data: userEmails, isLoading, error } = useReceivedEmails(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading emails</div>;

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <PageFrame showFooter={true} showNavbar={true}>
      <div className="flex text-white max-w-full h-full overflow-hidden">
        {isSidebarOpen && (
          <MailSidebar
            onSelect={setSelectedFolder}
            selectedFolder={selectedFolder}
          />
        )}
        <div className="flex-1 overflow-auto">
          <Inbox
            userEmails={userEmails}
            selectedFolder={selectedFolder}
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
      </div>
    </PageFrame>
  );
}
