import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import ParticlesComponent from '../particles/Particles';
import { AdminSidebar } from '../admin/AdminSidebar';

interface PageFrameProps {
  children: React.ReactNode;
  showNavbar?: boolean,
  showFooter?: boolean,
  showParticles?: boolean,
  showAdminSidebar?: boolean;
}

export default function PageFrame({ showNavbar, showFooter, children, showAdminSidebar,showParticles }: PageFrameProps) {
  return (
    <div className="flex flex-col h-full">
      {showNavbar && <Navbar />}
      <main className="flex-1">
        {showParticles && <ParticlesComponent />}
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};


