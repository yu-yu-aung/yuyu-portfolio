import EntryLoader from "@/components/EntryLoader";
import "@/style/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Yu Yu's Portfolio",
  description: "Yu Yu's portfolio project",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          <EntryLoader>{children}</EntryLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
