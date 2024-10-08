import Link from 'next/link';
import React from 'react';

export function AdminSidebar() {
  return (
    <div className="h-screen w-64 bg-transparent/20 text-white flex flex-col border-r border-r-purple-700">
      <div className="p-4 text-xl font-bold text-center text-glow text-purple-100">Admin Dashboard</div>
      <div className="flex flex-col p-4 space-y-2">
        <Link href="/admin/users" className="transition-colors duration-300 hover:bg-purple-700 p-2 rounded">Users</Link>
        <Link href="/admin/emails/create" className="transition-colors duration-300 hover:bg-purple-700 p-2 rounded">Emails</Link>
      </div>
    </div>
  );
}
