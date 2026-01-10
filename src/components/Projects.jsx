"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Projects = () => {
  const router = useRouter(); 

  return (
    <section className='text-stone-900'>
      <div>
        <div onClick={() => router.push("https://novio-writing-app-mcmb.vercel.app/")}>
          <img src='/yuyu_high_reso.png'/>
        <h1>Novio - Online Writing Platform</h1>
        <p>Novio is an online writing app where users can write, read stories and interact with other users.</p>
        </div>
        
        <Link href="https://github.com/yu-yu-aung/novio-writing-app.git" target='_blank'>GitHub Repo</Link>
      </div>
      
      <div className='w-[320px] flex flex-col rounded-2xl border-2 border-blue-300'>
          <Link href="https://eagle-daily-news.vercel.app/" target='_blank'>
            <img src='/yuyu_high_reso.png' className='w-full object-cover rounded-t-2xl'/>
          <h1>Eagle's Daily News</h1>
          <p>Novio is a news website where users can read updated daily news and save for later.</p>
          </Link>

        <Link href="https://github.com/yu-yu-aung/eagle-daily-news.git" target='_blank'>GitHub Repo</Link>
      </div>

      <div>
        <div onClick={() => router.push("https://novio-writing-app-mcmb.vercel.app/")}>
          <img src='/yuyu_high_reso.png'/>
        <h1>Skillsphere - Online Learning Platform</h1>
        <p>UI/UX Casestudy</p>
        <p></p>
        </div>
        
        <Link href="https://github.com/yu-yu-aung/novio-writing-app.git" target='_blank'>Behance</Link>
      </div>
    </section>
  ) 
}

export default Projects