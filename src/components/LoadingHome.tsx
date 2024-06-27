'use client'
import React from 'react'
import Image from 'next/image'

export default function LoadingHome() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Image src='/assets/logo/nervelab-logo.png?version=1' alt="Company Logo" className=" image-glow" height='200' width='200' />
    </div>
  )
}
