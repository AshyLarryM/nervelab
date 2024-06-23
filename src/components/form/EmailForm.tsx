'use client';
import { useUsers } from '@/lib/utils/server/state/useUsers';
import { useState } from 'react';

export function EmailForm() {
  const [subject, setSubject] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [fromUserId, setFromUserId] = useState<string>('');
  const [toUserId, setToUserId] = useState<string>('');
  const [replySubject, setReplySubject] = useState<string>('');
  const [replyBody, setReplyBody] = useState<string>('');

  const { data, error, isLoading } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading users: {error.message}</p>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          body,
          fromUserId,
          toUserId,
          replySubject,
          replyBody,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setSubject('');
        setBody('');
        setFromUserId('');
        setToUserId('');
        setReplySubject('');
        setReplyBody('');
      } else {
        const data = await response.json();
        console.log(`Failed to send email: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-2xl w-full mx-auto bg-transparent/20 p-6">
        <h1 className='text-center text-white text-3xl text-header-glow'>Create Email Chain</h1>
        <div className="mb-4">
          <label className="block text-gray-300">From:</label>
          <select
            value={fromUserId}
            onChange={(e) => setFromUserId(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-500 text-gray-300"
          >
            <option value="">Select user</option>
            {data?.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} - ({user.email})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-500 text-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-500 text-gray-300 h-32"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">To:</label>
          <select
            value={toUserId}
            onChange={(e) => setToUserId(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-500 text-gray-300"
          >
            <option value="">Select user</option>
            {data?.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} - ({user.email})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Reply Subject:</label>
          <input
            type="text"
            value={replySubject}
            onChange={(e) => setReplySubject(e.target.value)}
            className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-500 text-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Reply Body:</label>
          <textarea
            value={replyBody}
            onChange={(e) => setReplyBody(e.target.value)}
            className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-purple-500 text-gray-300 h-32"
          ></textarea>
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-transparent border border-purple-500 text-white rounded-md transition-colors duration-200 hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-500">
          Create Email
        </button>
      </form>
    </div>
  );
}
