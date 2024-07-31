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
    <footer className="flex justify-center items-center  text-white/90 z-50">
      <div className="w-full">
        <hr className="w-full border-t border-purple-500 hero-gradient" />
        <div className="flex flex-col items-center justify-center h-full py-8">
          <div className="z-10 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm font-light text-secondary text-glow cursor-pointer">
            <p className="hover:text-white mr-2">
              © 2024 Nerve Lab. All rights Reserved
            </p>
            <Link className='underline hover:text-white mr-2' href="/about">About</Link>
            {session ? (
              <button
                className="underline hover:text-white mr-2 text-glow"
                onClick={() => signOut()}
              >
                Logout
              </button>
            ) : (
              <Link className="underline hover:text-white mr-2" href="/login">
                Sign In
              </Link>
            )}
            <div className="flex justify-center">
              <Link href='https://store.steampowered.com/app/2512660/VectorBall/'><FontAwesomeIcon icon={faSteam} className="h-6 sm:h-8 text-white/90 hover:text-white mx-4" /></Link>
              <Link href='https://www.instagram.com/vectorball.exe/'><FontAwesomeIcon icon={faInstagram} className="h-6 sm:h-8 text-white/85 hover:text-white mx-4" /></Link>
              <Link href='https://twitter.com/NerveLabGames'><FontAwesomeIcon icon={faXTwitter} className="h-6 sm:h-8 text-white/85 hover:text-white mx-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
