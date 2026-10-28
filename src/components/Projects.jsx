'use client'

import { ActivityIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ProjectFilter from './ProjectFilter';

const Projects = () => {
  return (
    <section className="flex flex-col px-4 py-8 text-foreground sm:px-10 sm:py-10 lg:px-24 lg:py-12">
      <ProjectFilter />
      
    </section>
  );
};

export default Projects;