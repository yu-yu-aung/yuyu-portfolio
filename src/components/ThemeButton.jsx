"use client"

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false); 
  
  useEffect(() => {
    setMounted(true); 
  }, [])

  if (!mounted) return null;  

  useEffect
  return (
    <button 
      className='rounded-full p-2 relative  text-sepia-black-950 dark:text-sepia-black-100'
      type='button'
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")}}
    >
      {theme === "light" ? <Moon className="size-6 focus:outline-none" /> : <Sun className="size-6 focus:outline-none" />}
    </button>
  )
}

export default ThemeButton