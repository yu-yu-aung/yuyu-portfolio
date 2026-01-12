"use client"
import { Download, DownloadIcon, GithubIcon, LinkedinIcon, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className="text-center py-12 text-stone-900 dark:text-stone-200" id='contact'>
      <h3 className="text-2xl sm:text-4xl font-bold mb-4">Contact Me</h3>
      <p className="mb-4 text-sm sm:text-base">Feel free to reach out via email or connect on LinkedIn.</p>
      <div className="flex justify-center gap-4 px-4">
        <button
          onClick={() => (window.open("/YuYuCV.pdf"))}
          className="p-2 sm:p-4 rounded-full border text-stone-800 dark:text-stone-200 border-stone-400 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:border-stone-600 dark:hover:border-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950"
        >
          <DownloadIcon className="size-6 sm:size-8" />
        </button>

        <Link
          href="https://github.com/yu-yu-aung"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full border text-stone-800 dark:text-stone-200 border-stone-400 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:border-stone-600 dark:hover:border-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950"
        >
          <GithubIcon className="size-6 sm:size-8" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/yu-yu-aung-38b462235/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full border text-stone-800 dark:text-stone-200 border-stone-400 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:border-stone-600 dark:hover:border-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950"
        >
          <LinkedinIcon className="size-6 sm:size-8" />
        </Link>

        <Link
          href="mailto:yuyuaungayy@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:p-4 rounded-full border text-stone-800 dark:text-stone-200 border-stone-400 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:border-stone-600 dark:hover:border-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950"
        >
          <Mail className="size-6 sm:size-8" />
        </Link>
      </div>
    </section>

  )
}

export default Contact