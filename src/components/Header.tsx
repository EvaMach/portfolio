"use client";

import Link from 'next/link';
import React from 'react';
import { MobileNav } from './MobileNav';

const Header = () => {
  return (
    <header className='fixed top-0 bg-background z-10 flex justify-between items-center w-11/12 py-8 xl:py-12'>
      <Link href="#about">eva</Link>
      <nav className='hidden lg:flex'>
        <ul className='flex gap-4'>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#work">Work</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      <div className='lg:hidden'>
        <MobileNav />
      </div>
    </header >
  );
};

export default Header;