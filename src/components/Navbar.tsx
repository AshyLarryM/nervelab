import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className='flex items-center justify-center h-[70px] w-full z-10 bg-black'>
      <div className="relative flex justify-between items-center max-w-screen-xl w-full px-5">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="https://picsum.photos/seed/picsum/40" alt="Nerve Lab Logo" className="h-10" />
            <span className="ml-4 text-white font-medium text-xl"><span className='text-bright-green 2xl'>Nerve</span>Lab</span>
          </div>
        </Link>
      </div>
    </header>
  )
}
