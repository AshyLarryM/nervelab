import ParticlesComponent from '@/components/particles/Particles'
import React from 'react'

export default function About() {
  const content = [
    { id: 1, img: 'https://picsum.photos/500/300?random=1', description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    { id: 2, img: 'https://picsum.photos/500/300?random=2', description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
    { id: 3, img: 'https://picsum.photos/500/300?random=3', description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
    { id: 4, img: 'https://picsum.photos/500/300?random=1', description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
    { id: 5, img: 'https://picsum.photos/500/300?random=2', description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
    { id: 6, img: 'https://picsum.photos/500/300?random=3', description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white relative py-16">
        <ParticlesComponent />
        <h1 className="z-10 text-4xl font-bold text-glow text-white/80">About Us</h1>
        <div className="w-full px-16 flex flex-col z-0 items-center justify-center mt-8">
          {content.map((item, index) => (
            <div key={item.id} className={`grid grid-cols-2 gap-4 w-full mb-10`}>
              <div className="col-span-1 flex flex-col p-4 justify-center bg-transparent/20 transform translate-y-52 border border-purple-500">
                <p className="text-white text-center">{item.description}</p>
              </div>
              <div className="col-span-1 flex flex-col p-4 justify-center bg-transparent/20 border border-cyan-400">
                <img src={item.img} alt={`Image ${item.id}`} className="max-w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
