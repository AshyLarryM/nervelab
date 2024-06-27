
import React from 'react'
import Image from 'next/image'

export default function LoadingHome() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Image src='/assets/logo/nervelablogo.png?version=1' alt="nervelab-logo" className=" image-glow" height='200' width='200' />
    </div>
  )
}
