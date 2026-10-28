import React from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed left-1/2 top-8 z-40 w-[320px] -translate-x-1/2 rounded-full border border-border/80 bg-card/80 shadow-lg backdrop-blur-md sm:top-12 lg:top-16 sm:w-[520px] lg:w-[720px]">
      <div className="flex items-center justify-between px-3 py-0.5 sm:px-6 sm:py-1">
        <Link
          href="/"
          className="whitespace-nowrap text-lg font-bold tracking-tight text-brand sm:text-2xl"
        >
          YU&nbsp;YU
        </Link>

        <nav className="flex items-center gap-2 text-sm sm:gap-4 sm:text-base lg:gap-6">
          <Link href='/about'
            className="font-medium text-foreground/80 transition hover:text-brand"
          >
            About
          </Link>

          <Link href='/projects'
            className="font-medium text-foreground/80 transition hover:text-brand"
          >
            Projects
          </Link>

          <Link href='/experiences'
            className="font-medium text-foreground/80 transition hover:text-brand"
          >
            Experiences
          </Link>

          <Link href='/contact'
            className="font-medium text-foreground/80 transition hover:text-brand"
          >
            Contact
          </Link>

          <div className="ml-2 flex items-center">
            <ThemeButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;