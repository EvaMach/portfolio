'use client';

import { Menu, } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const links = [
  {
    name: 'About',
    path: '#about',
  },
  {
    name: 'Work',
    path: '#work',
  },
  {
    name: 'Contact',
    path: '#contact',
  },
];
export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetTitle className="hidden">Menu</SheetTitle>
      <SheetContent side="right" className="flex flex-col gap-4">
        {links.map((link) => (
          <SheetClose key={link.name}>
            <Link href={link.path} key={link.name} scroll={false}>{link.name}</Link>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet >
  );
};
