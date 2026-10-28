'use client';

import React, { useState } from 'react';
import { ActivityIcon, CodeXml, Cpu, GithubIcon, Palette } from 'lucide-react';
import Link from 'next/link';

const TABS = [
  {
    id: 'software',
    label: 'Software Development',
    icon: CodeXml,
  },
  {
    id: 'ai',
    label: 'ML & AI',
    icon: Cpu,
  },
  {
    id: 'uiux',
    label: 'UI/UX',
    icon: Palette,
  },
];

const ProjectFilter = () => {
  const [filter, setFilter] = useState('software');

  return (
    <section className="w-full">
      {/* Tabs */}
      <div className="mb-10 overflow-x-auto">
        <div
          role="tablist"
          aria-label="Project filter options"
          className="relative flex min-w-[500px] bg-background p-1.5 border-b-1 border-border"
        >
          {/* Sliding background */}
          <span
            className={`pointer-events-none absolute bottom-1.5 left-1.5 top-1.5 w-[calc((100%-0.75rem)/3)] rounded-xl bg-card shadow-sm ring-1 ring-border/60 transition-transform duration-300 ease-out ${
              filter === 'software'
                ? 'translate-x-0'
                : filter === 'ai'
                  ? 'translate-x-full'
                  : 'translate-x-[200%]'
            }`}
          />

          {TABS.map((tab) => {
            const isActive = filter === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(tab.id)}
                className={`relative z-10 flex h-11 w-1/3 items-center justify-center gap-2 rounded-xl px-3 text-xs font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-primary bg-brand/20'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Sections */}
      {filter === 'software' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="grid grid-cols-1 items-stretch gap-12 py-12 lg:grid-cols-3">
            <div className="card-slide-in mx-auto flex h-full w-[330px] flex-col rounded-xl border border-border bg-sepia-black-50 shadow-md sm:w-100 dark:bg-sepia-black-900/80">
              <div className="flex h-auto w-full items-center gap-2 rounded-t-xl bg-brand px-2 py-2 text-primary-foreground sm:px-4">
                <img src="/eagle.png" className="w-[80px] rounded-full p-3 sm:w-[100px]" />
                <div className="flex flex-col items-start justify-between">
                  <h2 className="text-lg font-semibold sm:text-2xl">Eagle&apos;s Daily News</h2>
                  <h4 className="text-base font-medium uppercase sm:text-lg">Daily News Website</h4>
                </div>
              </div>
              <p className="px-4 py-2 text-base font-medium italic text-foreground sm:px-6 sm:py-4 sm:text-lg">
                Eagle’s Daily News is a modern news platform that allows users to read, share, and save daily updated articles. It is built with React and Next.js, using Zustand for state management, Flowbite UI for interface components, and React Hot Toast for user feedback. Supabase is used as a BaaS solution for authentication, while the GNews API provides real-time news data.
              </p>

              <div className="mt-auto mb-2 flex items-center justify-between px-4 py-2 text-xs font-medium text-primary-foreground sm:text-sm">
                <Link
                  href="https://eagle-daily-news.vercel.app/"
                  target="_blank"
                  className="flex gap-2 rounded-sm bg-primary px-4 py-2 transition duration-100 ease-in-out hover:scale-105 hover:bg-primary/90"
                >
                  <ActivityIcon className="size-4 sm:size-6" /> Live Demo
                </Link>

                <Link
                  href="https://github.com/yu-yu-aung/eagle-daily-news.git"
                  target="_blank"
                  className="flex gap-2 rounded-sm bg-primary px-4 py-2 transition duration-100 ease-in-out hover:scale-105 hover:bg-primary/90"
                >
                  <GithubIcon className="size-4 sm:size-6" /> GitHub Repo
                </Link>
              </div>
            </div>

            <div className="card-slide-in mx-auto flex h-full w-[330px] flex-col rounded-xl border border-border bg-aths-special-50 shadow-md sm:w-100 dark:bg-aths-special-900/80">
              <div className="flex h-auto w-full items-center gap-2 rounded-t-xl bg-accent px-2 py-2 text-accent-foreground sm:px-4">
                <img src="/novio.png" className="w-[80px] rounded-full sm:w-[100px]" />
                <div className="flex flex-col items-start justify-between">
                  <h2 className="text-lg font-semibold sm:text-2xl">Novio</h2>
                  <h4 className="text-base font-medium uppercase sm:text-lg">Online Writing Platform</h4>
                </div>
              </div>
              <p className="px-4 py-2 text-base font-medium italic text-foreground sm:px-6 sm:py-4 sm:text-lg">
                Novio is an online writing platform that allows users to write, publish, share own stories, read, like, and comment on others’ work, and follow other users. Users can organize stories into personalized bookshelves and control their visibility. I implemented the backend requirement with 14 Supabase tables and enhanced the user experience with Sonner for user-friendly notifications.
              </p>

              <div className="mt-auto mb-2 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary-foreground">
                <Link
                  href="https://novio-writing-app-mcmb.vercel.app/"
                  target="_blank"
                  className="flex gap-2 rounded-sm bg-accent px-4 py-2 transition duration-100 ease-in-out hover:scale-105 hover:bg-accent/90"
                >
                  <ActivityIcon className="size-4 sm:size-6" /> Live Demo
                </Link>

                <Link
                  href="https://github.com/yu-yu-aung/novio-writing-app.git"
                  target="_blank"
                  className="flex gap-2 rounded-sm bg-accent px-4 py-2 transition duration-100 ease-in-out hover:scale-105 hover:bg-accent/90"
                >
                  <GithubIcon className="size-4 sm:size-6" /> GitHub Repo
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {filter === 'ai' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          ai projects here
        </div>
      )}

      {filter === 'uiux' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="card-slide-in mx-auto flex h-full w-[330px] flex-col rounded-xl border border-border bg-secondary shadow-md sm:w-100">
              <div className="flex h-auto w-full items-center gap-2 rounded-t-xl bg-primary px-2 py-2 text-primary-foreground sm:px-4">
                <img src="/skillsphere.png" className="w-[80px] rounded-full p-3 sm:w-[100px]" />
                <div className="flex flex-col items-start justify-between">
                  <h2 className="text-lg font-semibold sm:text-2xl">Skillsphere</h2>
                  <h4 className="text-base font-medium uppercase sm:text-lg">Online Learning App</h4>
                </div>
              </div>
              <p className="px-4 py-2 text-base font-medium italic text-foreground sm:px-6 sm:py-4 sm:text-lg">
                Skillsphere is a UI/UX case study for an online learning app. I conducted UX research, developed user personas, built a design system, and created wireframes and high-fidelity interfaces in Figma. This project strengthened my understanding of design principles and allowed me to approach problems from a designer’s perspective.
              </p>

              <div className="mt-auto mb-2 flex items-center justify-between px-4 py-2 text-sm font-medium text-primary-foreground">
                <Link
                  href="https://www.behance.net/gallery/232689389/SkillSphere-Educational-App-UIUX-Case-Study"
                  target="_blank"
                  className="flex gap-2 rounded-sm bg-primary px-4 py-2 transition duration-100 ease-in-out hover:scale-105 hover:bg-primary/90"
                >
                  <img src="/behance_dark.png" className="size-4 dark:hidden sm:size-6" />
                  <img src="/behance_light.png" className="hidden size-4 dark:block sm:size-6" />
                  Behance
                </Link>
              </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default ProjectFilter;