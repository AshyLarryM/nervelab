import React from 'react';
import { EmailWithReplies } from '@/lib/utils/server/types';

interface EmailCardProps {
  email: EmailWithReplies;
}

export function EmailCard({ email }: EmailCardProps) {
  return (
    <div className="p-4 border border-gray-700">
      <h3 className="text-lg font-bold">{email.subject}</h3>
      <p>{email.body}</p>
      <p className="text-sm text-gray-400">From: {email.fromUser.name}</p>
      <p className="text-sm text-gray-400">To: {email.toUser.name}</p>
      {email.replies.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-bold">Replies:</h4>
          {email.replies.map(reply => (
            <div key={reply.id} className="p-2 border-t border-gray-700">
              <p className="text-sm text-gray-400">From: {reply.user.name}</p>
              <p>{reply.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
