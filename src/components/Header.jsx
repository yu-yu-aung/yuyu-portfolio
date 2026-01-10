import React from 'react'
import ThemeButton from './ThemeButton'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-neutral-300/30 backdrop-blur-xs border-3 border-neutral-300/30 hover:bg-neutral-300/30 rounded-full flex justify-between items-center py-2 px-4 fixed top-20 z-40 w-[320px] sm:w-155 lg:w-300 mx-24'> 
      <Link href="/" className='font-bold text-2xl text-blue-900 inline'> 
       YU YU 
      </Link>
      <nav className=' flex px-4 items-center justify-between py-4'>
        <Link href="/" className='text-xl font-semibold w-full text-sepia-black-950 dark:text-sepia-black-100'>
          Projects
        </Link> 
        <button className='text-xl font-semibold w-full text-sepia-black-950 dark:text-sepia-black-100'>
          About Me
        </button> 
        <button className='text-xl font-semibold w-full text-sepia-black-950 dark:text-sepia-black-100'>
          My Skills
        </button>
        
        <Link href="#" className='text-xl font-semibold w-full text-sepia-black-950 dark:text-sepia-black-100 inline'>
          Contact
        </Link>
        <div className='w-full flex flex-col items-center justify-between text-sepia-black-950 dark:text-sepia-black-100'>
          <ThemeButton/>
        </div>
      </nav>
    </header>
  )
}

export default Header