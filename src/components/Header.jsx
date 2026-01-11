import React from 'react'
import ThemeButton from './ThemeButton'
import Link from 'next/link'

const Header = () => {
  return (
    <header
      className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[320px] sm:w-[520px] lg:w-[720px] rounded-full bg-neutral-200/30 dark:bg-white/10 hover:bg-neutral-200/40 dark:hover:bg-white/15 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-2xl tracking-tight text-blue-900 dark:text-blue-300 whitespace-nowrap"
        >
          YU&nbsp;YU
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="#about-me"
            className="text-base font-medium text-sepia-black-950 dark:text-sepia-black-100 hover:opacity-80 transition"
          >
            About
          </Link>

          <Link
            href="#projects"
            className="text-base font-medium text-sepia-black-950 dark:text-sepia-black-100 hover:opacity-80 transition"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="text-base font-medium text-sepia-black-950 dark:text-sepia-black-100 hover:opacity-80 transition"
          >
            Contact
          </Link>

          {/* Theme toggle */}
          <div className="ml-2 flex items-center">
            <ThemeButton />
          </div>
        </nav>
      </div>
    </header>

  )
}

export default Header