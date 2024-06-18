'use client'
import React, { useState, useEffect } from 'react';
import { Hero } from "@/components/landing/Hero";
import ParticlesComponent from "@/components/particles/Particles";
import LoadingHome from '@/components/LoadingHome';
import PageFrame from '@/components/layouts/PageFrame';


export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <LoadingHome />;
  // }

  return (
    <PageFrame>
      <div className="flex justify-center min-h-full text-white z-10 sm:mx-16 mx-0">
        <Hero />
      </div>
    </PageFrame>
  );
}
