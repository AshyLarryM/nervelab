import React from 'react';
import { AdminNavbar } from '../admin/AdminNavbar';
import { AdminSidebar } from '../admin/AdminSidebar';

interface AdminPageFrameProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
  showParticles?: boolean;
  showAdminSidebar?: boolean;
}

export default function AdminPageFrame({ children, showNavbar = true, showFooter = true, showParticles = false, showAdminSidebar = true }: AdminPageFrameProps) {
  return (
    <div className="flex flex-col h-full">
      {showNavbar && <AdminNavbar />}
      <div className="flex flex-1">
        {showAdminSidebar && <AdminSidebar />}
        <main className="flex-1 flex flex-col overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
