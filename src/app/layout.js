import "@/style/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Yu Yu's Portfolio",
  description: "Yu Yu's portfolio project",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className="min-h-screen flex flex-col w-full  bg-sepia-black-50 dark:bg-sepia-black-950 ">
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
