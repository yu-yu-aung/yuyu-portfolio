"use client";
import { ArrowUpRight, DownloadIcon, GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const contactLinks = [
  {
    title: 'Email',
    value: 'yuyuaungayy@gmail.com',
    href: 'mailto:yuyuaungayy@gmail.com',
    icon: Mail,
  },
  {
    title: 'LinkedIn',
    value: 'yu-yu-aung',
    href: 'https://www.linkedin.com/in/yu-yu-aung-38b462235/',
    icon: LinkedinIcon,
  },
  {
    title: 'GitHub',
    value: 'yu-yu-aung',
    href: 'https://github.com/yu-yu-aung',
    icon: GithubIcon,
  },
  {
    title: 'Resume',
    value: 'Download PDF',
    href: '/simple_resume.pdf',
    icon: DownloadIcon,
    isDownload: true,
  },
];

const Contact = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 lg:px-12" id="contact">
      <div className="rounded-[30px] border border-border bg-card/70 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Let&apos;s connect
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              I&apos;m open to thoughtful collaborations and product roles.
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              I enjoy working across frontend, UI/UX, and product thinking to build experiences that feel clear, useful, and human.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => window.open('/simple_resume.pdf')}
                className="inline-flex items-center gap-2 rounded-full border border-brand bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand/90"
              >
                Download CV
                <DownloadIcon className="size-4" />
              </button>

              <Link
                href="mailto:yuyuaungayy@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-brand hover:text-brand"
              >
                Say hello
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map(({ title, value, href, icon: Icon, isDownload }) => (
              <Link
                key={title}
                href={href}
                target={isDownload ? undefined : '_blank'}
                rel={isDownload ? undefined : 'noopener noreferrer'}
                className="group flex items-center justify-between rounded-2xl border border-border bg-background/70 p-4 text-left transition-all duration-300 hover:border-brand hover:bg-secondary/70 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground group-hover:border-brand group-hover:text-brand">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
                    <p className="mt-1 text-sm font-medium text-foreground sm:text-base">{value}</p>
                  </div>
                </div>

                <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;