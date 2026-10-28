"use client";
import { DownloadIcon, GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 text-center text-foreground" id="contact">
      <h3 className="mb-4 text-2xl font-bold sm:text-4xl">Contact Me</h3>
      <p className="mb-4 text-sm text-muted-foreground sm:text-base">
        Feel free to reach out via email or connect on LinkedIn.
      </p>
      <div className="flex justify-center gap-4 px-4">
        <button
          onClick={() => window.open('/simple_resume.pdf')}
          className="rounded-full border border-border bg-card p-2 text-foreground transition-all duration-300 hover:border-brand hover:bg-secondary hover:text-brand sm:p-4"
        >
          <DownloadIcon className="size-6 sm:size-8" />
        </button>

        <Link
          href="https://github.com/yu-yu-aung"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-card p-2 text-foreground transition-all duration-300 hover:border-brand hover:bg-secondary hover:text-brand sm:p-4"
        >
          <GithubIcon className="size-6 sm:size-8" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/yu-yu-aung-38b462235/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-card p-2 text-foreground transition-all duration-300 hover:border-brand hover:bg-secondary hover:text-brand sm:p-4"
        >
          <LinkedinIcon className="size-6 sm:size-8" />
        </Link>

        <Link
          href="mailto:yuyuaungayy@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border bg-card p-2 text-foreground transition-all duration-300 hover:border-brand hover:bg-secondary hover:text-brand sm:p-4"
        >
          <Mail className="size-6 sm:size-8" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;