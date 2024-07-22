import React from 'react';
import { AdminNavbar } from '../admin/AdminNavbar';
import { AdminSidebar } from '../admin/AdminSidebar';
import { Inter } from 'next/font/google';

interface AdminPageFrameProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
  showParticles?: boolean;
  showAdminSidebar?: boolean;
}


const inter = Inter({ subsets: ["latin"] });

export default function AdminPageFrame({ children, showNavbar = true, showFooter = true, showParticles = false, showAdminSidebar = true }: AdminPageFrameProps) {
  return (
    <div className="flex flex-col h-screen">
      {showNavbar && <AdminNavbar />}
      <div className="flex flex-1 overflow-hidden">
        {showAdminSidebar && <AdminSidebar />}
        <main className={`flex-1 flex flex-col overflow-y-auto p-4 ${inter.className}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
