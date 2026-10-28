"use client";

import React, { useEffect, useState } from 'react';

const EntryLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-background">
        <div className="relative flex items-center gap-6">
          {['Y', 'U', 'Y', 'U'].map((cha, i) => (
            <span
              key={i}
              style={{ animationDelay: `${i * 0.15}s` }}
              className="animate-wave rounded-sm border border-border bg-secondary px-2 py-4 text-3d text-4xl font-extrabold text-brand card-3d sm:text-7xl"
            >
              {cha}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return children;
};

export default EntryLoader;