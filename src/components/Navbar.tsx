'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface NavItem {
  name: string,
  href?: string,
}

const loggedOutNavigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/comingsoon" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState<boolean>(false);

  function toggleMenu() {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setShouldRenderMenu(true);
    } else {
      setIsMenuOpen(false);
      setTimeout(() => setShouldRenderMenu(false), 300);
    }
  }

  function handleLinkClick() {
    setIsMenuOpen(false);
    setTimeout(() => {
      setShouldRenderMenu(false);
    }, 300);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setShouldRenderMenu(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className='flex items-center justify-center h-[75px] w-full z-50 bg-transparent text-white'>
      <div className="relative flex justify-between items-center max-w-screen-xl w-full px-5 z-50">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="https://picsum.photos/seed/picsum/40" alt="Nerve Lab Logo" className="h-10" />
            <span className="ml-4 text-white font-medium text-xl"><span className='text-bright-green'>Nerve</span>Lab</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          {loggedOutNavigation.map(item => (
            <Link className='py-2 px-4 mr-4 font-light text-white text-glow hover:text-bright-green/75 transition-colors duration-500 ease-in-out' key={item.name} href={item.href || '#'}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden absolute top-0 right-0 mr-4" onClick={toggleMenu}>
          <svg
            className={`h-8 w-8 text-bright-green nav-icon ${isMenuOpen ? 'open' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-16 6h16"
              />
            )}
          </svg>
        </div>

        {/* Drop menu */}
        {shouldRenderMenu && (
          <div className={`absolute w-full top-10 right-0 mt-2 py-2 flex bg-transparent/80 flex-col pb-12 min-h-screen ${isMenuOpen ? 'animate-fade-in' : 'animate-fade-out'}`}>
            {loggedOutNavigation.map(item => (
              <Link className='py-6 px-4 mr-4 font-light hover:text-bright-green text-center text-lg' key={item.name} href={item.href || '#'} onClick={handleLinkClick}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}