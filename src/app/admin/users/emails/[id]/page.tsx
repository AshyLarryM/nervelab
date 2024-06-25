'use client'
import AdminPageFrame from '@/components/admin/AdminPageFrame';
import { useUserEmails } from '@/lib/utils/server/state/useUserEmails';
import React from 'react';

export default function UserEmailPage({ params }: { params: { id: string } }) {
  const userId = params.id;
  const { data, isLoading, isError, error } = useUserEmails(userId);

  if (isLoading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500 text-center py-10">{error?.message}</div>;
  }

  const emails = data?.userEmails?.sentEmails;
  if (!emails || emails.length === 0) {
    return <div className="text-gray-500 text-center py-10">No sent emails found.</div>;
  }

  return (
    <AdminPageFrame>
      <div className="p-4 bg-gray-50 text-gray-800">
        <h1 className="text-xl font-bold mb-4">Emails for {data.userEmails.name}</h1>
        <ul>
          {emails.map(email => (
            <li key={email.id} className="mb-4 p-4 bg-white shadow-md rounded-lg">
              <strong>From:</strong> {email.fromUser.name} ({email.fromUser.email})<br />
              <strong>Subject:</strong> {email.subject}<br />
              <strong>Body:</strong>
              <div dangerouslySetInnerHTML={{ __html: email.body }} className="whitespace-pre-line" /><br />
              
              <strong>Sent At:</strong> {new Date(email.createdAt).toLocaleString()}
              {email.replies && email.replies.length > 0 && (
                <div className="mt-4">
                  
                  <ul>
                    {email.replies.map(reply => (
                      <li key={reply.id} className="mt-2 bg-gray-100 rounded-lg p-2">
                        <div><strong>Reply From:</strong> {reply.user.name} ({reply.user.email})</div>
                        <div dangerouslySetInnerHTML={{ __html: reply.body }} className="whitespace-pre-line" />
                        <div className="text-xs text-gray-600">At: {new Date(reply.createdAt).toLocaleString()}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </AdminPageFrame>
  );
}
