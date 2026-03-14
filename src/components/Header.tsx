"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleMobileLink = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 px-5 sm:px-10 md:px-[15%] py-4">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 w-full ${
            isScrolled ? "shadow-lg shadow-black/20" : ""
          }`}
          style={{
            background: isScrolled
              ? "color-mix(in srgb, var(--bg-secondary) 85%, transparent)"
              : "color-mix(in srgb, var(--bg-secondary) 60%, transparent)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {/* Logo */}
          <Link href={isHome ? "#about" : "/"} className="flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="Eva Machová logo"
              width={56}
              height={56}
              priority
            />
          </Link>

          {/* Right side: nav links + controls */}
          <div className="flex items-center gap-2">
            {/* Desktop nav links */}
            {isHome && (
              <ul className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.03]"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-secondary)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Divider */}
            {isHome && (
              <div
                className="hidden md:block w-px h-4 mx-1"
                style={{ background: "var(--border-subtle)" }}
                aria-hidden="true"
              />
            )}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                color: "var(--text-secondary)",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Mobile hamburger */}
            {isHome && (
              <button
                className="flex items-center justify-center w-8 h-8 rounded-lg md:hidden transition-all duration-200"
                style={{
                  color: "var(--text-secondary)",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                }}
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

      {/* Mobile drawer */}
      {mobileOpen && isHome && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div
            className="fixed top-20 right-4 z-50 rounded-2xl p-5 flex flex-col gap-2 min-w-40 md:hidden"
            style={{
              background:
                "color-mix(in srgb, var(--bg-secondary) 92%, transparent)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleMobileLink}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 animate-fade-up in-view"
                style={{
                  color: "var(--text-primary)",
                  transitionDelay: `${i * 60}ms`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
