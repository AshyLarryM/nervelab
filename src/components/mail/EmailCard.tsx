'use client'
import React from 'react';
import { EmailWithReplies } from '@/lib/utils/server/types';

interface EmailCardProps {
  email: EmailWithReplies;
}

export function EmailCard({ email }: EmailCardProps) {
  return (
    <div className="p-4 border border-green-400">
      <h3 className="text-lg font-bold">{email.subject}</h3>
      <p className="text-sm text-gray-400">From: {email.fromUser.name}</p>
      <p className="text-sm text-gray-400">To: {email.toUser.name}</p>
      <div dangerouslySetInnerHTML={{ __html: email.body }} className='mt-4'></div>
      {email.replies.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-bold mb-2">Replies:</h4>
          {email.replies.map(reply => (
            <div key={reply.id} className="border border-purple-500 p-6">
              <p>{reply.subject}</p>
              <p className="text-sm text-gray-400">From: {reply.user.name}</p>
              <div dangerouslySetInnerHTML={{ __html: reply.body }}></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
