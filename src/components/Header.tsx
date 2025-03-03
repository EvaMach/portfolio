"use client";

import Link from 'next/link';
import React from 'react';
import { MobileNav } from './MobileNav';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  return (
    <header className='sticky top-0 bg-background opacity-90 z-10 flex justify-between items-center my-4 mx-5 sm:mx-10 md:mx-[15%]'>
      <Link href="#about"><Image src="/img/logo.png" alt="Logo" width={70} height={70} /></Link>
      <nav className='hidden lg:flex'>
        {pathName === '/' ? (
          <ul className='flex gap-4'>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#work">Work & Fun</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        ) : (
          null
        )
        }
      </nav>

      <div className='lg:hidden'>
        <MobileNav />
      </div>
    </header >
  );
};

export default Header;