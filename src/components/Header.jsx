'use client';

import React, { useState } from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-1/2 top-14 sm:top-16 lg:top-20 z-40 w-[320px] -translate-x-1/2 rounded-4xl border border-border/80 bg-slate-20/40 dark:bg-card/40 shadow-lg backdrop-blur-md  sm:w-[520px] lg:w-[720px] transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6 sm:py-2">
        <Link
          href="/"
          onClick={closeMenu}
          className="whitespace-nowrap text-lg font-bold tracking-tight text-brand sm:text-2xl"
        >
          YU&nbsp;YU
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-4 text-sm sm:text-base lg:gap-6">
          <Link
            href="/about"
            className="font-medium text-foreground/80 transition hover:text-brand"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="font-medium text-foreground/80 transition hover:text-brand"
          >
            Projects
          </Link>
          <Link
            href="/experiences"
            className="font-medium text-foreground/80 transition hover:text-brand"
          >
            Experiences
          </Link>
          <Link
            href="/contact"
            className="font-medium text-foreground/80 transition hover:text-brand"
          >
            Contact
          </Link>
          <div className="ml-2 flex items-center">
            <ThemeButton />
          </div>
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeButton />
          
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1 text-foreground/80 hover:bg-foreground/10 focus:outline-none"
          >
            <svg
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="flex flex-col gap-3 px-6 pb-4 pt-2 text-center text-sm font-medium sm:hidden border-t border-border/40 mt-1">
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-foreground/80 transition hover:text-brand py-1"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={closeMenu}
            className="text-foreground/80 transition hover:text-brand py-1"
          >
            Projects
          </Link>
          <Link
            href="/experiences"
            onClick={closeMenu}
            className="text-foreground/80 transition hover:text-brand py-1"
          >
            Experiences
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-foreground/80 transition hover:text-brand py-1"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;