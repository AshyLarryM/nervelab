'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { isAdmin, isUser } from '@/lib/utils/admin';
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

type NavItem = {
  name: string,
  href?: string,
  onClick?: () => void,
}

const adminNavigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admin", href: "/admin/users" },
  {
    name: "Logout", onClick: () => {
      signOut({ callbackUrl: '/', redirect: true });
      toast.success('Logging out...');
    }
  },
];

export function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState<boolean>(false);
  const { data: session } = useSession();

  const userName = session?.user.name

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
    <header className='flex items-center justify-center h-[75px] w-full z-50 bg-transparent/20 text-white border-b border-b-purple-700'>
      <div className="relative flex justify-between items-center max-w-screen-xl w-full px-5 z-50">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="/assets/logo/nervelablogo.png" alt="Nerve Lab Logo" className="md:h-12 h-10 pb-2" />
            <span className="text-white font-medium text-xl"><span></span><img className='md:h-10 h-8' src='/assets/logo/NerveLabs.png' /></span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          {adminNavigation.map(item => (
            <Link className='py-2 px-4 mr-4 font-light text-white text-glow hover:text-bright-green/75 transition-colors duration-500 ease-in-out'
              key={item.name}
              href={item.href || '#'}
              onClick={item.onClick || handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
          <p className=' mr-4 font-light text-white text-glow'>{userName}</p>
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
            {adminNavigation.map(item => (
              <Link className='py-6 px-4 mr-4 font-light hover:text-bright-green text-center text-lg'
                key={item.name}
                href={item.href || '#'}
                onClick={item.onClick || handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
