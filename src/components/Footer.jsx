import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200/60 dark:border-stone-800/60">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-sm text-stone-600 dark:text-stone-400">
          	&#169;{new Date().getFullYear()} Karmine. All rights reserved.
        </p>

        <p className="text-sm italic text-stone-500 dark:text-stone-500 text-center">
          Designed & built with Next.js, React & Tailwind CSS
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/yu-yu-aung"
            target="_blank"
            className="text-stone-600 hover:text-orange-500 dark:text-stone-400 dark:hover:text-orange-400 transition"
          >
            <Github size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/yu-yu-aung-38b462235/"
            target="_blank"
            className="text-stone-600 hover:text-orange-500 dark:text-stone-400 dark:hover:text-orange-400 transition"
          >
            <Linkedin size={20} />
          </Link>

          <Link
            href="mailto:yuyuaungayy@gmail.com"
            className="text-stone-600 hover:text-orange-500 dark:text-stone-400 dark:hover:text-orange-400 transition"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
