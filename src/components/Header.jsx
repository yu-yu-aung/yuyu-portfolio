import React from 'react'
import ThemeButton from './ThemeButton'


const Header = () => {
  return (
    <header
      className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[320px] sm:w-[520px] lg:w-[720px] rounded-full bg-neutral-200/30 dark:bg-white/10 hover:bg-neutral-200/40 dark:hover:bg-white/15 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <a
          href="#home"
          className="font-bold text-lg sm:text-2xl tracking-tight text-blue-900 dark:text-blue-300 whitespace-nowrap"
        >
          YU&nbsp;YU
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a
            href="#about-me"
            className="text-base font-medium text-sepia-black-950 dark:text-sepia-black-100 hover:opacity-80 transition"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-base font-medium text-sepia-black-950 dark:text-sepia-black-100 hover:opacity-80 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-base font-medium text-sepia-black-950 dark:text-sepia-black-100 hover:opacity-80 transition"
          >
            Contact
          </a>

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