import Link from 'next/link'
import React from 'react'

interface NavItem {
  name: string,
  href?: string,
}

const loggedOutNavigation: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Login", href: "/commingsoon" },
];

export default function Navbar() {
  // const navigationLinks = loggedOutNavigation;

  return (
    <header className='flex items-center justify-center h-[70px] w-full z-10 bg-black px-5 text-white'>
       <div className="relative flex justify-between items-center max-w-screen-xl w-full px-5">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="https://picsum.photos/seed/picsum/40" alt="Nerve Lab Logo" className="h-10" />
            <span className="ml-4 text-white font-medium text-xl"><span className='text-bright-green 2xl'>Nerve</span>Lab</span>
          </div>
        </Link>

       {/* Desktop Nav */}
       <nav className="hidden md:flex items-center">
          {loggedOutNavigation.map(item => (
            <Link className='py-2 px-4 mr-4 font-light hover:text-bright-green' key={item.name} href={item.href || '#'}>
                {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header> 
  )
}
