import EntryLoader from "@/components/EntryLoader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/style/globals.css";
import { ThemeProvider } from "next-themes";
import {  PT_Serif, Montserrat } from 'next/font/google';

export const metadata = {
  title: "Yu Yu's Portfolio",
  description: "Yu Yu is a software engineer with strong knowledge in AI and UI, UX. This is Yu's portforlio site built with Next.js.",
  viewport: "width=device-width, initial-scale=1.0",
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
