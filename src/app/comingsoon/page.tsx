import PageFrame from '@/components/layouts/PageFrame';
import React from 'react';

export default function ComingSoon() {
  return (
    <PageFrame showFooter={true} showNavbar={true}>
      <div className='h-screen w-full flex justify-center items-center'>
        <h1 className='text-6xl text-green-200 text-glow z-10 text-center'>Coming Soon!</h1>
      </div>
    </PageFrame>
  );
}
