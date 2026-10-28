'use client'

import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  const text = 'HELLO!';
  const iconBaseClass = 'rounded-full border border-border bg-card p-1 text-foreground transition-all duration-300 hover:border-brand hover:bg-secondary hover:text-brand sm:p-2'; 
  const iconSizeClass = 'size-4 sm:size-5'; 

  return (
      <section className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-7 relative mx-auto w-full max-w-7xl px-6 sm:px-10 sm:py-20 lg:px-24 flex items-center mt-12 md:mt-16 lg:mt-20">

        <div className="flex justify-center lg:col-span-3 relative rounded-2xl items-center">
          <img 
            src="/yuyu_high_reso.png" 
            alt="Yu Yu portrait"
            className="w-40 md:w-60 lg:w-72 h-auto object-contain rounded-2xl border-border border-2"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 sm:gap-8 lg:col-span-4 items-start">
          <h2 className="hello-text text-foreground">
            {text.split('').map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                {char}
              </span>
            ))}
          </h2>

          <div className="flex flex-col gap-4 text-foreground backdrop-blur-md sm:gap-6">
            <p className="text-2xl font-semibold leading-tight sm:text-4xl">
              I&apos;m{' '}
              <span className="text-3xl font-bold text-brand sm:text-5xl">
                Yu Yu Aung
              </span>
            </p>

            <p className="text-xl font-medium leading-relaxed sm:text-2xl">
              I build thoughtful digital experiences <br />
              combining full-stack development, AI, and UI/UX design <br />
              to turn complex ideas into practical solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 sm:gap-6">
            <button
              onClick={() => window.open('/simple_resume.pdf')}
              className="rounded-full border border-primary bg-transparent px-4 py-1 text-lg font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg sm:px-10 sm:py-2 sm:text-xl"
            >
              Download CV
            </button>

            <Link
              href="https://github.com/yu-yu-aung"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconBaseClass}`}
            >
              <GithubIcon className={`${iconSizeClass}`} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/yu-yu-aung-38b462235/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconBaseClass}`}
            >
              <LinkedinIcon className={`${iconSizeClass}`} />
            </Link>

            <Link
              href="mailto:yuyuaungayy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconBaseClass}`}
            >
              <Mail className={`${iconSizeClass}`} />
            </Link>
          </div>
        </div>

        
      </section>
  );
};

export default HeroSection;
