'use client';

import React, { useState } from 'react';
import { CodeXml, Cpu, Palette, Layers } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const TABS = [
  {
    id: 'all',
    label: 'All',
    icon: Layers,
  },
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

const BehanceIcon = ({ className }) => (
  <>
    <img src="/behance_dark.png" alt="Behance" className={`${className} dark:hidden`} />
    <img src="/behance_light.png" alt="Behance" className={`${className} hidden dark:block`} />
  </>
);

const ProjectFilter = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section className="w-full max-w-5xl mx-auto py-6 px-4 sm:px-6">
      {/* YouTube-style Horizontal Scrollable Filter Bar */}
      <div className="mb-8 overflow-x-auto no-scrollbar scroll-smooth py-1">
        <div
          role="tablist"
          aria-label="Project filter options"
          className="flex items-center gap-4 w-max"
        >
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 border ${
                  isActive
                    ? 'bg-brand text-brand-foreground border-brand shadow-sm scale-[1.02]'
                    : 'bg-card/60 text-muted-foreground border-border/60 hover:bg-card hover:text-foreground hover:border-border'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300 mb-10 sm:mb-20 lg:mb-32">
        {(filter === 'all' || filter === 'software') && (
          <>
            <ProjectCard
              title="Novio"
              category="Online Writing Platform"
              description="Novio is an online writing platform allowing users to write, publish, share stories, read, like, comment, and follow creators. Users can organize stories into custom bookshelves and manage visibility. Features a robust Supabase backend with 14 tables and Sonner notifications."
              logoSrc="/novio.png"
              demoUrl="https://novio-writing-app-mcmb.vercel.app/"
              githubUrl="https://github.com/yu-yu-aung/novio-writing-app.git"
            />

            <ProjectCard
              title="Eagle's Daily News"
              category="Daily News Website"
              description="Eagle’s Daily News is a modern news platform that allows users to read, share, and save daily updated articles. Built with React and Next.js, using Zustand for state management, Flowbite UI for interface components, React Hot Toast for feedback, Supabase for authentication, and GNews API for real-time news data."
              logoSrc="/eagle.png"
              demoUrl="https://eagle-daily-news.vercel.app/"
              githubUrl="https://github.com/yu-yu-aung/eagle-daily-news.git"
            />
          </>
        )}

        {(filter === 'all' || filter === 'ai') && (
          <>
            <ProjectCard
              title="Yolo26 Reverse Engineering"
              category="Exploring Pretrained Model"
              description="An independent research project focused on understanding the internal architecture of YOLO26n. Using PyTorch and Ultralytics, I explored the model's computational graph, layer configurations, module connections, learnable parameters, and bias initialization. I examined components such as C3k2 and C2PSA, investigated how feature extraction and processing flow through the network, and analyzed model configuration, tensor dimensions, and inference behavior. The project focuses on architectural understanding and hands-on experimentation rather than production deployment."
              logoSrc="/yolo.png"
              githubUrl="https://github.com/yu-yu-aung/yolo26n_exploration.git"
            />

            <ProjectCard
              title="Attendance AI with Face Recognition"
              category="AI Integration for System Software"
              description="A facial recognition attendance prototype designed to integrate with existing school management systems. Built with InsightFace and FastAPI, it exposes APIs for face enrollment and recognition, allowing external applications to process recognition results and manage attendance records. Currently under development and not yet production-ready."
              logoSrc="/face_detect.png"
            />
          </>
        )}

        {(filter === 'all' || filter === 'uiux') && (
          <ProjectCard
            title="Skillsphere"
            category="Online Learning App"
            description="Skillsphere is a UI/UX case study for an online learning app. It covers UX research, user personas, design system creation, and wireframing to high-fidelity Figma prototypes."
            logoSrc="/skillsphere.png"
            customLinks={[
              {
                label: 'Behance',
                href: 'https://www.behance.net/gallery/232689389/SkillSphere-Educational-App-UIUX-Case-Study',
                icon: BehanceIcon,
              },
            ]}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectFilter;