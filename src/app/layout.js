import EntryLoader from "@/components/EntryLoader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/style/globals.css";
import { ThemeProvider } from "next-themes";
import {  PT_Serif, Montserrat } from 'next/font/google';

export const metadata = {
  metadataBase: new URL('https://yuyu-aung.vercel.app'), 

  title: {
    default: 'Yu Yu | Full-Stack Engineer',
    template: '%s | Yu Yu',
  },
  description:
    'Portfolio of Yu Yu - Full-Stack Software Engineer specializing in Next.js, React, TypeScript, Php, Laravel, FastAPI, and AI integration.',
  keywords: [
    'Yu Yu Aung',
    'Yu Yu',
    'Myanmar Web Developer',
    'Full-Stack Engineer',
    'Next.js Developer',
    'React Developer',
    'Laravel Developer', 
    'Php Developer',
    'Software Engineer',
    'AI Engineer',
    'Freelance Web Developer',
    'Remote Software Engineer',
  ],
  authors: [{ name: 'Yu Yu Aung' }],
  creator: 'Yu Yu Aung',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yuyu-aung.vercel.app', 
    title: 'Yu Yu | Full-Stack Engineer',
    description:
      'Designing & engineering high-performance web applications, modern UI/UX systems, and AI integrations.',
    siteName: 'Yu Yu Portfolio',
    images: [
      {
        url: '/cover.png', // 1200x630px social preview card
        width: 1200,
        height: 630,
        alt: 'Yu Yu - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yu Yu | Full-Stack Software Engineer',
    description:
      'Designing & engineering high-performance web applications, modern UI/UX systems, and AI integrations.',
    images: ['/cover.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'JTxw9m1sYT6tFjSWyz87WuHaZq7tt1XXtD9boQAMjWk', 
  },
};

const ptSerif = PT_Serif({
  variable: '--font-head-family',
  weight: ['400', '700'], 
  subsets: ['latin'],
  display: 'swap',
}); 

const montserrat = Montserrat({
  variable: '--font-body-family',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
}); 

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          <EntryLoader>
            <Header /> 
            {children}
            <Footer/>
          </EntryLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
