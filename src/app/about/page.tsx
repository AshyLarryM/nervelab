import ParticlesComponent from '@/components/particles/Particles'
import React from 'react'

export default function About() {
  return (
    <>
      <div className="flex items-center justify-center text-white ">
        <ParticlesComponent />
        <div className="w-full flex">
          <div className="flex-1 flex items-center justify-center  bg-transparent/60 clip-path-left">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis suscipit purus. Aliquam erat volutpat.</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-transparent/40 clip-path-right">
            <img src="https://picsum.photos/seed/picsum/200" alt="Descriptive Alt Text" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}