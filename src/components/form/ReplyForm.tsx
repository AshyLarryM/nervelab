'use client'
import { useState } from "react";
import TiptapEditor from "./TiptapEditor";
import toast from "react-hot-toast";

interface ReplyFormProps {
  emailId: string;
  userId: string;
  onReplySubmit: (reply: { subject: string; body: string }) => void;
}

export function ReplyForm({ emailId, userId, onReplySubmit }: ReplyFormProps) {

  const [subject, setSubject] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      subject,
      body,
      emailId,
      userId,
    };

    console.log('Reply Form Data:', formData);

    try {
      const response = await fetch('/api/admin/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newReply = await response.json();
        console.log('Reply sent successfully', newReply);
        toast.success(`Reply Sent!`)
        setSubject('');
        setBody('');
        onReplySubmit(formData);
      } else {
        const data = await response.json();
        toast.error(`Failed to send reply: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        console.error('Error:', error.message);
        toast.error(`An error occurred: ${error.message}`);
      } else {
        console.error('Unexpected error:', error);
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border border-gray-500 p-6 mt-6 bg-gray-900 rounded-lg">
      <h2 className=' text-white text-2xl mb-4'>Reply to Email</h2>
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
        <TiptapEditor
          value={body}
          onChange={(value) => setBody(value)}
        />
      </div>
      <button type="submit" className="w-full py-2 mt-4 bg-transparent border border-purple-500 text-white rounded-md transition-colors duration-200 hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-500">
        Send Reply
      </button>
    </form>
  );
}
