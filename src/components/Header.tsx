import Link from 'next/link';
import React from 'react';
import { MobileNav } from './MobileNav';

const Header = () => {
  return (
    <header className='flex justify-between items-center w-full py-8 xl:py-12'>
      <Link href="#about">eva</Link>
      <nav className='hidden xl:flex'>
        <ul className='flex gap-4'>
          <li><Link href="#about" scroll={false}>About</Link></li>
          <li><Link href="#work" scroll={false}>Work</Link></li>
          <li><Link href="#contact" scroll={false}></Link>Contact</li>
        </ul>
      </nav>

      <div className='xl:hidden'>
        <MobileNav />
      </div>
    </header >
  );
};

export default Header;