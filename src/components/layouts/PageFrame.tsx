import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import ParticlesComponent from '../particles/Particles';

interface PageFrameProps {
  children: React.ReactNode;
  showNavbar?: boolean,
  showFooter?: boolean,
  showParticles?: boolean,
}

export default function PageFrame({ showNavbar, showFooter, children }: PageFrameProps) {
  return (
    <div className="flex flex-col h-full">
      {showNavbar && <Navbar />}
      <main className="flex-1">
        <ParticlesComponent />
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};


