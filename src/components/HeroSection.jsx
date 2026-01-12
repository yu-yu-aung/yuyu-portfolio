'use client'

import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const text = "HELLO!";

  return (
    <section className="relative w-full max-w-7xl px-6 sm:px-10 lg:px-24 mx-auto py-24" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 sm:gap-16 items-center">
        
        {/* LEFT */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-6 sm:gap-10">
          
          {/* Animated hello */}
          <h2 className="hello-text text-stone-900 dark:text-stone-200">
            {text.split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {char}
              </span>
            ))}
          </h2>

          {/* Text glass frame */}
          <div className="text-lb-frame p-6 sm:p-10 sm:p-12 flex flex-col gap-4 sm:gap-6 text-stone-900 dark:text-sepia-black-100 backdrop-blur-md">
            <p className="text-2xl sm:text-4xl font-semibold leading-tight">
              I'm{" "}
              <span className="text-3xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400">
                Yu Yu Aung
              </span>
            </p>

            <p className="text-xl sm:text-3xl font-medium opacity-90">
              You can call me Yu Yu or Karmine.
            </p>

            <p className="text-xl sm:text-2xl font-medium leading-relaxed">
              I'm a frontend engineer <br />
              who builds clean, user-focused interfaces <br />
              with a strong foundation in UI/UX design.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4">
            <button
              onClick={() => (window.open("/YuYuCV.pdf"))}
              className="py-2 sm:py-4 px-6 sm:px-10 rounded-full text-xl sm:text-2xl font-semibold border-2 border-orange-600 text-orange-700 bg-transparent transition-all duration-300 hover:bg-orange-600 hover:text-white hover:shadow-lg dark:border-orange-400 dark:text-orange-300 dark:hover:bg-orange-500 dark:hover:text-white"
            >
              Download CV
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
        </div>

        <div className="lg:col-span-3 flex justify-center">
          <div className="image-rb-frame">
            <img
              src="/yuyu_tech.png"
              alt="Yu Yu portrait"
              className="w-full image-content"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
