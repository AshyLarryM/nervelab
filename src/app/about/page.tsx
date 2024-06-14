import ParticlesComponent from '@/components/particles/Particles'
import React from 'react'

export default function About() {
  const content = [
    { id: 1, img: 'https://picsum.photos/500/300?random=1', description: 'Description for Image 1' },
    { id: 2, img: 'https://picsum.photos/500/300?random=2', description: 'Description for Image 2' },
    { id: 3, img: 'https://picsum.photos/500/300?random=3', description: 'Description for Image 3' },
    { id: 4, img: 'https://picsum.photos/500/300?random=1', description: 'Description for Image 1' },
    { id: 5, img: 'https://picsum.photos/500/300?random=2', description: 'Description for Image 2' },
    { id: 6, img: 'https://picsum.photos/500/300?random=3', description: 'Description for Image 3' },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white relative py-16">
        <ParticlesComponent />
        <h1 className="z-10 text-4xl font-bold text-glow text-white/80 ">About Us</h1>
        <div className="w-full px-16 flex flex-col z-0 items-center justify-center">
          {content.map((item, index) => (
            <div key={item.id} className={`flex flex-row items-center justify-center w-full mb-10 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2 p-4 flex items-center justify-center">
                <p className="text-white text-center">{item.description}</p>
              </div>
              <div className="w-1/2 p-4 flex items-center justify-center">
                <img src={item.img} alt={`Image ${item.id}`} className="max-w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
