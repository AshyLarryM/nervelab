import React from 'react'
import Image from 'next/image'

export default function LoadingHome() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Image src='/assets/logo/nervelab-logo.png?version=1' alt="Company Logo" className="w-48 image-glow" />
    </div>
  )
}
