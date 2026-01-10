import { GithubIcon, Linkedin, LinkedinIcon } from 'lucide-react';
import React from 'react'

const HeroSection = () => { 

  const text = "HELLO!"; 
  
  return (
    <div className="flex flex-col gap-0 py-8 mx-24"> 
      {/* <h1 className='text-9xl font-bold text-aths-special-400 dark:text-aths-special-500 text-center'>PORTFOLIO</h1> */}
      <div className='grid grid-cols-7'>
        <div className='col-span-4 flex flex-col items-start py-12 gap-4 text-end justify-center'>
          <h2 className='hello-text text-stone-900 dark:text-stone-200 mt-28'>
            {text.split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s`}}>
                {char}
              </span>
            ))}
          </h2>
          <div className='text-lb-frame p-12 flex flex-col text-start gap-4 text-stone-900 dark:text-sepia-black-100'> 
            <p className='text-4xl font-semibold'>I'm <span className='text-5xl font-semibold text-blue-700'>
            Yu Yu Aung</span>
          </p> 
          <p className='text-3xl font-semibold'>
            You can call me Yu Yu or Karmine.
          </p>
          <p className='text-3xl font-medium  text-start'>
            I'm a frontend engineer <br/> 
            who builds clean, user-focused interfaces <br/> 
            with a strong foundation in UI/UX design.
          </p>
          </div>
          <div className='flex justify-between items-center gap-12 mx-auto my-auto text-stone-800 dark:text-stone-200'>
            <button
              className="py-4 px-10 rounded-full text-3xl font-semibold border-2 border-blue-600 text-blue-700 bg-transparent transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              Download CV
            </button>

            <button className='p-4 rounded-full border border-stone-400 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:border-stone-600 dark:hover:border-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950'>
              <GithubIcon className='size-8'/>
            </button> 

            <button className='p-4 rounded-full border border-stone-400 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:border-stone-600 dark:hover:border-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950'>
              <LinkedinIcon className='size-8'/>
            </button>
          </div>
          
        </div> 
        <div 
          className='col-span-3 flex '>
            {/* <div className='image-border h-full w-1'> 
            </div> */}
            <div className='image-rb-frame'>
              <img src='/yuyu_tech.png' className='w-full image-content'/>
            </div>
        </div> 
      </div>
    </div>
    
  )
}

export default HeroSection