'use client'
import { faSteam } from "@fortawesome/free-brands-svg-icons/faSteam";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

export function Footer() {

  const { data: session } = useSession();

  return (
    <footer className="flex flex-col items-center text-white/90 z-50">
      <div className="w-full">
        <hr className="w-full border-t border-purple-500 hero-gradient" />
        <div className="flex flex-col items-center justify-center h-full py-8 space-y-4">
          <div className="text-xs sm:text-sm font-light text-secondary text-glow cursor-pointer">
            <p className="hover:text-white">
              © 2024 NerveLabs. All rights Reserved
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-4 text-xs sm:text-sm font-light text-secondary text-glow cursor-pointer">
            <Link className="underline hover:text-white" href="/about">About</Link>
            {session ? (
              <button
                className="underline hover:text-white text-glow"
                onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <Link className="underline hover:text-white" href="/login">
                Sign In
              </Link>
            )}
          </div>
          <div className="flex justify-center space-x-4">
            <Link href='https://store.steampowered.com/app/2512660/VectorBall/' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSteam} className="h-6 sm:h-8 text-white/90 hover:text-white" />
            </Link>
            <Link href='https://www.instagram.com/nervelabgames/' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="h-6 sm:h-8 text-white/85 hover:text-white" />
            </Link>
            <Link href='https://x.com/NerveLabsGames' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="h-6 sm:h-8 text-white/85 hover:text-white" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};
