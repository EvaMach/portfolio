"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useScrolled } from "@/hooks/useScrolled";
import ThemeToggle from "./ui/themeToggle";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isScrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 px-5 sm:px-10 md:px-[15%] py-4">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 w-full border border-border-subtle ${
            isScrolled ? "shadow-lg shadow-black/20" : ""
          }`}
          style={{
            background: isScrolled
              ? "color-mix(in srgb, var(--bg-secondary) 85%, transparent)"
              : "color-mix(in srgb, var(--bg-secondary) 60%, transparent)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <Link href={isHome ? "#about" : "/"} className="flex-shrink-0">
            <Image
              src={theme === "dark" ? "/img/logo-dark.png" : "/img/logo-light.png"}
              alt="Eva Machová logo"
              width={56}
              height={56}
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            {isHome && (
              <ul className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.03] text-text-secondary hover:text-accent-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {isHome && (
              <div
                className="hidden md:block w-px h-4 mx-1 bg-border-subtle"
                aria-hidden="true"
              />
            )}

            <ThemeToggle theme={theme} onToggle={toggle} />

            {isHome && (
              <button
                className="flex items-center justify-center w-8 h-8 rounded-lg md:hidden transition-all duration-200 bg-bg-tertiary border border-border-subtle text-text-secondary"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={15} /> : <Menu size={15} />}
              </button>
            )}
          </div>
        </nav>
      </header>

      {mobileOpen && isHome && (
        <MobileMenu links={navLinks} onClose={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default Header;
