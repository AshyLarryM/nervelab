import ParticlesComponent from '@/components/particles/Particles'
import React from 'react'

export default function ComingSoon() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <ParticlesComponent />
      <div className=''>
        <h1 className='text-6xl text-white text-glow z-10'>Coming Soon!</h1>
      </div>
    </div>
  )
}
