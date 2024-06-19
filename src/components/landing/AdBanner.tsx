import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from "@fortawesome/free-brands-svg-icons/faSteam";
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

interface AdBannerProps {
  title: string;
  link: string;
}

export function AdBanner({ title, link }: AdBannerProps) {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center my-16'>
      <h2 className='text-white lg:text-5xl text-2xl text-glow flex lg:flex-row flex-col items-center'>
        {title}
        <div className='flex lg:flex-row flex-col items-center'>
          <ArrowRightIcon className="lg:block hidden text-bright-green/80 h-12 lg:ml-4 lg:mr-3 animateArrowRight" />
          <ArrowDownIcon className="lg:hidden block text-bright-green/80 h-8 mt-2 mb-2 animateArrowDown" />
          <Link href={link} className="text-white mt-2 lg:mt-0 lg:ml-2">
            <FontAwesomeIcon icon={faSteam} className='text-white/90 transition-colors duration-200 hover:text-white h-12' />
          </Link>
        </div>
      </h2>
    </div>
  )
}
