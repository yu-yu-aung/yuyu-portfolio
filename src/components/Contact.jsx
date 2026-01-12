"use client"
import React from 'react'

const Contact = () => {
  return (
    <section className="text-center py-12 text-stone-900 dark:text-stone-200" id='contact'>
      <h3 className="text-4xl font-bold mb-4">Contact Me</h3>
      <p className="mb-4">Feel free to reach out via email or connect on LinkedIn.</p>
      <div className="flex justify-center gap-4">
        <button
            onClick={() => (window.open("/YuYuCV.pdf"))}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
        >
            Download CV
        </button>
        <a href="mailto:your-email@example.com" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-500">Email Me</a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">LinkedIn</a>
        <a href="https://github.com/yu-yu-aung" target="_blank" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">GitHub</a>
      </div>
    </section>

  )
}

export default Contact