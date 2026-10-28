"use client"

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="relative bg-transparent p-2 text-foreground transition-colors hover:border-brand hover:text-brand"
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <Moon className="size-4 focus:outline-none sm:size-6" />
      ) : (
        <Sun className="size-4 focus:outline-none sm:size-6" />
      )}
    </button>
  );
};

export default ThemeButton;