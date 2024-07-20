'use client';
import AdminPageFrame from '@/components/admin/AdminPageFrame';
import { ReplyForm } from '@/components/form/ReplyForm';
import { useUserEmails } from '@/lib/utils/server/state/useUserEmails';
import React, { useState } from 'react';

export default function UserEmailPage({ params }: { params: { id: string } }) {
  const userId = params.id;
  const { data, isLoading, isError, error } = useUserEmails(userId);
  const [replyingEmailId, setReplyingEmailId] = useState<string | null>(null);
  const [replyingReplyId, setReplyingReplyId] = useState<string | null>(null);

  async function handleReplySubmit(reply: { subject: string; body: string }, emailId: string) {
    console.log('Reply submitted:', reply);
    setReplyingEmailId(null);
    setReplyingReplyId(null);
  };

  function toggleReplyForm(emailId: string) {
    if (replyingEmailId === emailId) {
      setReplyingEmailId(null);
    } else {
      setReplyingEmailId(emailId);
      setReplyingReplyId(null);
    }
  };

  function toggleReplyToReplyForm(replyId: string) {
    if (replyingReplyId === replyId) {
      setReplyingReplyId(null);
    } else {
      setReplyingReplyId(replyId);
      setReplyingEmailId(null);
    }
  };

  if (isLoading) {
    return <AdminPageFrame><div className="text-center py-10 text-white">Loading...</div></AdminPageFrame>;
  }

  if (isError) {
    return <AdminPageFrame><div className="text-red-500 text-center py-10">{error?.message}</div></AdminPageFrame>;
  }

  const sentEmails = data?.userEmails?.sentEmails;
  const receivedEmails = data?.userEmails.receivedEmails;

  if ((!sentEmails || sentEmails.length === 0) && (!receivedEmails || receivedEmails.length === 0)) {
    return <AdminPageFrame><div className="text-white text-center py-10">No emails found.</div></AdminPageFrame>;
  }


  return (
    <AdminPageFrame>
      <div className="p-4 bg-gray-50 text-gray-800">
        <h1 className="text-xl font-bold mb-4">Emails for {data.userEmails.name}</h1>
        <h2 className="text-lg font-semibold mb-2">Sent Emails</h2>
        <ul>
          {sentEmails?.map(email => (
            <li key={email.id} className="mb-4 p-4 bg-white shadow-md rounded-lg">
              <strong>From:</strong> {email.fromUser.name} ({email.fromUser.email})<br />
              <strong>To:</strong> {email.toUser.name} ({email.toUser.email})<br />
              <strong>Subject:</strong> {email.subject}<br />
              <strong>Body:</strong>
              <div dangerouslySetInnerHTML={{ __html: email.body }} className="whitespace-pre-line" /><br />
              <strong>Sent At:</strong> {new Date(email.createdAt).toLocaleString()}
              {email.replies && email.replies.length > 0 && (
                <div className="mt-4">
                  <ul>
                    {email.replies.map(reply => (
                      <li key={reply.id} className="mt-2 bg-gray-100 rounded-lg p-2">
                        <div><strong>Reply From: </strong> {reply.user.name} ({reply.user.email})</div>
                        <div><strong>Subject:</strong>{reply.subject}</div>
                        <div dangerouslySetInnerHTML={{ __html: reply.body }} className="whitespace-pre-line" />
                        <div className="text-xs text-gray-600">At: {new Date(reply.createdAt).toLocaleString()}</div>
                        <button
                          onClick={() => toggleReplyToReplyForm(reply.id)}
                          className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-md"
                        >
                          {replyingReplyId === reply.id ? 'Cancel' : 'Reply'}
                        </button>
                        {replyingReplyId === reply.id && (
                          <ReplyForm emailId={email.id} userId={userId} onReplySubmit={(reply) => handleReplySubmit(reply, email.id)} />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={() => toggleReplyForm(email.id)}
                className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md"
              >
                {replyingEmailId === email.id ? 'Cancel' : 'Reply'}
              </button>
              {replyingEmailId === email.id && (
                <ReplyForm emailId={email.id} userId={userId} onReplySubmit={(reply) => handleReplySubmit(reply, email.id)} />
              )}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mb-2">Received Emails</h2>
        <ul>
          {receivedEmails?.map(email => (
            <li key={email.id} className="mb-4 p-4 bg-white shadow-md rounded-lg">
              <strong>From:</strong> {email.fromUser.name} ({email.fromUser.email})<br />
              <strong>To:</strong> {email.toUser.name} ({email.toUser.email})<br />
              <strong>Subject:</strong> {email.subject}<br />
              <strong>Body:</strong>
              <div dangerouslySetInnerHTML={{ __html: email.body }} className="whitespace-pre-line" /><br />
              <strong>Received At:</strong> {new Date(email.createdAt).toLocaleString()}
              {email.replies && email.replies.length > 0 && (
                <div className="mt-4">
                  <ul>
                    {email.replies.map(reply => (
                      <li key={reply.id} className="mt-2 bg-gray-100 rounded-lg p-2">
                        <div><strong>Reply From: </strong> {reply.user.name} ({reply.user.email})</div>
                        <div><strong>Subject:</strong>{reply.subject}</div>
                        <div dangerouslySetInnerHTML={{ __html: reply.body }} className="whitespace-pre-line" />
                        <div className="text-xs text-gray-600">At: {new Date(reply.createdAt).toLocaleString()}</div>
                        <button
                          onClick={() => toggleReplyToReplyForm(reply.id)}
                          className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-md"
                        >
                          {replyingReplyId === reply.id ? 'Cancel' : 'Reply'}
                        </button>
                        {replyingReplyId === reply.id && (
                          <ReplyForm emailId={email.id} userId={userId} onReplySubmit={(reply) => handleReplySubmit(reply, email.id)} />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={() => toggleReplyForm(email.id)}
                className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md"
              >
                {replyingEmailId === email.id ? 'Cancel' : 'Reply'}
              </button>
              {replyingEmailId === email.id && (
                <ReplyForm emailId={email.id} userId={userId} onReplySubmit={(reply) => handleReplySubmit(reply, email.id)} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </AdminPageFrame>
  );
}
