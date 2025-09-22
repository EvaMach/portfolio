"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 flex justify-between items-center my-4 mx-5 sm:mx-10 md:mx-[15%] transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "opacity-90"
      }`}
    >
      <Link href="#about">
        <Image src="/img/logo.png" alt="Logo" width={80} height={80} />
      </Link>
      <nav className="flex">
        {pathName === "/" ? (
          <ul className="flex gap-4">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
