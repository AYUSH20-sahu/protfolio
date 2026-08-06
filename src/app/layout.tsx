import type { Metadata } from "next";
import "./globals.css";
import { CommandPalette } from "@/components/command-palette";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushsahu.dev"),
  title: {
    default: "Ayush Sahu | AI Engineer & Full Stack Developer",
    template: "%s | Ayush Sahu"
  },
  description:
    "A premium AI engineering and full stack portfolio with dynamic projects, GitHub integration, and polished product storytelling.",
  openGraph: {
    title: "Ayush Sahu | AI Engineer & Full Stack Developer",
    description:
      "A premium AI engineering and full stack portfolio with dynamic projects, GitHub integration, and polished product storytelling.",
    type: "website",
    url: "https://ayushsahu.dev"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Sahu | AI Engineer & Full Stack Developer",
    description:
      "A premium AI engineering and full stack portfolio with dynamic projects, GitHub integration, and polished product storytelling."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-slate-950"
        >
          Skip to content
        </a>
        <ScrollProgress />
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
