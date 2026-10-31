'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';


export const ProjectCard = ({
  title,
  category,
  description,
  logoSrc,
  logoAlt = title,
  demoUrl,
  githubUrl,
  customLinks = [],
}) => {
  return (
    <div className="fade-up group relative flex flex-col gap-5 rounded-lg border border-border/60 bg-card p-5 shadow-xs transition-all duration-300 hover:border-border hover:shadow-md sm:flex-row sm:items-start sm:p-6">
      {/* Left Column: Logo */}
      <div className="flex shrink-0 items-center justify-center">
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden  p-2 sm:h-20 sm:w-20">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Right Column: Title, Subtitle, Description, Links */}
      <div className="flex flex-1 flex-col justify-between space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {title}
            </h3>
            <span className="hidden sm:inline-block rounded-md px-2.5 py-0.5 text-xs font-medium text-heading bg-accent/80">
              {category}
            </span>
          </div>
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase ">
            {category}
          </p>
        </div>

        <p className="text-sm text-muted-foreground/90 leading-relaxed">
          {description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </Link>
          )}

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-input bg-background px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub Repo
            </Link>
          )}

          {customLinks.map((link, idx) => {
            const LinkIcon = link.icon || ExternalLink;
            return (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-input bg-background px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
              >
                <LinkIcon className="h-3.5 w-3.5" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};