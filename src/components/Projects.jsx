"use client"

import { ActivityIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Projects = () => {
  const router = useRouter(); 

  return (
    <section className='text-stone-900 flex flex-col px-4 sm:px-10 py-12 sm:py-18 lg:py-24' id="projects">
      <div className='flex flex-col items-center justify-around mt-8 sm:mt-14 mb-4'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-700 dark:text-stone-300 mb-4'>My Projects</h2> 
        <hr className="text-blue-900 dark:to-blue-200 w-xs sm:w-lg lg:w-3xl border mt-2" />
        <p className='text-base sm:text-lg italic font-medium dark:text-stone-300 mt-1 text-center'>
          I build frontend projects and UI/UX case studies to strengthen my problem-solving and product design skills.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-between items-center py-12 gap-12'>
        
        {/* Eagle's Card */}
        <div className='w-[330px] sm:w-100 bg-orange-100 dark:bg-orange-700 rounded-xl shadow-md flex flex-col'>
          <div className='w-full h-auto flex gap-2 items-center px-2 sm:px-4 py-2 bg-orange-600 dark:bg-orange-900 rounded-t-xl text-white'>
            <img src='/eagle.png' className='rounded-full w-[80px] sm:w-[100px] p-3'/>
            <div className='flex flex-col justify-between items-start'>
              <h2 className='text-lg sm:text-2xl font-semibold'>Eagle's Daily News</h2>
              <h4 className='text-base sm:text-lg uppercase font-medium '>Daily News Website</h4>
            </div> 
          </div>
          <p className='py-2 sm:py-4 text-base sm:text-lg font-medium italic px-4 sm:px-6 text-stone-800 dark:text-stone-200'>
            Eagle’s Daily News is a modern news platform that allows users to read, share, and save daily updated articles. It is built with React and Next.js, using Zustand for state management, Flowbite UI for interface components, and React Hot Toast for user feedback. Supabase is used as a BaaS solution for authentication, while the GNews API provides real-time news data.
          </p> 


           <div className="flex justify-between items-center mt-auto text-xs sm:text-sm font-medium py-2 px-4 mb-2 text-stone-200 dark:text-stone-800">
              <Link
                href="https://eagle-daily-news.vercel.app/"
                target="_blank"
                className=" bg-orange-800 dark:bg-orange-300 py-2 px-4 flex gap-2 rounded-sm hover:scale-105 hover:bg-orange-700 dark:hover:bg-orange-400 duration-100 ease-in-out"
              >
                <ActivityIcon className='size-4 sm:size-6'/> Live Demo
              </Link>

              <Link
                href="https://github.com/yu-yu-aung/eagle-daily-news.git"
                target="_blank"
                className=" bg-orange-800 dark:bg-orange-300 py-2 px-4 flex gap-2 rounded-sm hover:scale-105 hover:bg-orange-700 dark:hover:bg-orange-400 duration-100 ease-in-out"
              >
                <GithubIcon className='size-4 sm:size-6'/> GitHub Repo
              </Link>
            </div>
        </div> 

        {/* Novio Card */}
        <div className='w-[330px] sm:w-100 bg-purple-200 dark:bg-purple-700 rounded-lg sm:rounded-xl shadow-md flex flex-col'>
          <div className='w-full h-auto flex gap-2 items-center px-2 sm:px-4 py-2 bg-purple-600 dark:bg-purple-900 rounded-t-xl text-white'>
            <img src='/novio.png' className='rounded-full w-[80px] sm:w-[100px]'/>
            <div className='flex flex-col justify-between items-start'>
              <h2 className='text-lg sm:text-2xl font-semibold'>Novio</h2>
              <h4 className='text-base sm:text-lg uppercase font-medium'>Online Writing Platform</h4>
            </div> 
          </div>
          <p className='py-2 sm:py-4 text-base sm:text-lg font-medium italic px-4 sm:px-6 text-stone-800 dark:text-stone-200'>
            Novio is an online writing platform that allows users to write, publish, share own stories, read, like, and comment on others’ work, and follow other users. Users can organize stories into personalized bookshelves and control their visibility. I implemented the backend requirement with 14 Supabase tables and enhanced the user experience with Sonner for user-friendly notifications.
          </p>

           <div className="flex justify-between items-center mt-auto text-sm font-medium py-2 px-4 mb-2 text-stone-200 dark:text-stone-800">
              <Link
                href="https://novio-writing-app-mcmb.vercel.app/"
                target="_blank"
                className=" bg-purple-800 dark:bg-purple-300 py-2 px-4 flex gap-2 rounded-sm hover:scale-105 hover:bg-purple-700 dark:hover:bg-purple-400 duration-100 ease-in-out"
              >
                <ActivityIcon className='size-4 sm:size-6'/> Live Demo
              </Link>

              <Link
                href="https://github.com/yu-yu-aung/novio-writing-app.git"
                target="_blank"
                className="  bg-purple-800 dark:bg-purple-300 py-2 px-4 flex gap-2 rounded-sm hover:scale-105 hover:bg-purple-700 dark:hover:bg-purple-400 duration-100 ease-in-out"
              >
                <GithubIcon className='size-4 sm:size-6'/> GitHub Repo
              </Link>
            </div>
        </div> 

        {/* Skillsphere's Card */}
        <div className='w-[330px] sm:w-100 bg-blue-100 dark:bg-blue-700 rounded-lg sm:rounded-xl shadow-md flex flex-col'>
          <div className='w-full h-auto flex gap-2 items-center px-2 sm:px-4 py-2 bg-blue-600 dark:bg-blue-900 rounded-t-xl text-white'>
            <img src='/skillsphere.png' className='rounded-full w-[80px] sm:w-[100px] p-3'/>
            <div className='flex flex-col justify-between items-start'>
              <h2 className='text-lg sm:text-2xl font-semibold'>Skillsphere</h2>
              <h4 className='text-base sm:text-lg uppercase font-medium'>Online Learning App</h4>
            </div> 
          </div>
          <p className='py-2 sm:py-4 text-base sm:text-lg font-medium italic px-4 sm:px-6 text-stone-800 dark:text-stone-200'>
            Skillsphere is a UI/UX case study for an online learning app. I conducted UX research, developed user personas, built a design system, and created wireframes and high-fidelity interfaces in Figma. This project strengthened my understanding of design principles and allowed me to approach problems from a designer’s perspective.
          </p> 

           <div className="flex justify-between items-center mt-auto text-sm font-medium py-2 px-4 mb-2 text-stone-200 dark:text-stone-800">
              <Link
                href="https://www.behance.net/gallery/232689389/SkillSphere-Educational-App-UIUX-Case-Study"
                target="_blank"
                className="bg-blue-800 dark:bg-blue-300 py-2 px-4 flex gap-2 rounded-sm hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-400 duration-100 ease-in-out"
              >
                <img src='/behance_dark.png' className='size-4 sm:size-6 dark:hidden'/> <img src='/behance_light.png' className='size-4 sm:size-6 hidden dark:block'/> Behance
              </Link>
            </div>
        </div> 
      </div>
    </section>
  ) 
}

export default Projects