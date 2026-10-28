import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row py-4">
        <p className="text-sm text-muted-foreground">
          &#169;{new Date().getFullYear()} Yu Yu. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link
            href="https://github.com/yu-yu-aung"
            target="_blank"
            className="transition hover:text-brand"
          >
            <Github size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/yu-yu-aung-38b462235/"
            target="_blank"
            className="transition hover:text-brand"
          >
            <Linkedin size={20} />
          </Link>

          <Link href="mailto:yuyuaungayy@gmail.com" className="transition hover:text-brand">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
