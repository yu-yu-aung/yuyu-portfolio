"use client"

import React, { useEffect, useState } from 'react'

const EntryLoader = ({children}) => {

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
     }, 2000)

    return () => clearTimeout(timer);
  }, [])

  if (loading) {
    return (
      <div className='min-h-dvh flex flex-col items-center justify-center bg-radial-[at_50%_50%] from-sky-200 via-blue-400 to-blue-900 to-90% '>
        <div className='flex items-center gap-6 relative'>
          {["Y", "U", "Y", "U"].map((cha, i) => (
            <span 
              key={i}
              style={{animationDelay: `${i * 0.15}s`}}
              className='px-2 py-4 text-4xl sm:text-7xl font-extrabold rounded-sm bg-blue-200 text-blue-600 text-3d card-3d animate-wave'
            >
              {cha}
            </span>
          ))}
        </div>
      </div>
      
    )
  }
  return children;
}


export default EntryLoader