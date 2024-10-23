import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otaku Haven - Top-Rated Anime & Where to Watch",
  description:
    "Explore top-rated anime with detailed reviews and discover where to watch them online. Your one-stop hub for anime ratings, streaming guides, and recommendations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-accent-1">
          <Hero />
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
}
