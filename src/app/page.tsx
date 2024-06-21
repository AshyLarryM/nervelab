'use client'
import React, { useState, useEffect } from 'react';
import { Hero } from "@/components/landing/Hero";
import ParticlesComponent from "@/components/particles/Particles";
import LoadingHome from '@/components/LoadingHome';
import PageFrame from '@/components/layouts/PageFrame';
import { AdBanner } from '@/components/landing/AdBanner';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingHome />;
  }

  return (
    <PageFrame showNavbar={true} showFooter={true} showParticles={true} >
      <div className="flex justify-center text-white z-20 sm:mx-16 mx-0">
        <Hero />
      </div>
      <AdBanner
        title='Add Vector Ball to Steam WishList'
        link='https://store.steampowered.com/app/2512660/VectorBall/' />
    </PageFrame>
  );
}
