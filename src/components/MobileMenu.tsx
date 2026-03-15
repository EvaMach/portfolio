"use client";

import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  onClose: () => void;
}

const MobileMenu = ({ links, onClose }: Props) => (
  <>
    <div
      className="fixed inset-0 z-40 md:hidden"
      onClick={onClose}
      aria-hidden="true"
    />
    <div
      className="fixed top-20 right-4 z-50 rounded-2xl p-5 flex flex-col gap-2 min-w-40 md:hidden border border-border-subtle"
      style={{
        background: "color-mix(in srgb, var(--bg-secondary) 92%, transparent)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {links.map((link, i) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onClose}
          className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 animate-fade-up in-view text-text-primary hover:text-accent-primary"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          {link.label}
        </Link>
      ))}
    </div>
  </>
);

export default MobileMenu;
