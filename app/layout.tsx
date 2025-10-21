import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "./components/navbar";
import { PageTransition } from "@/lib/usePageTransition";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "MyPhoto – Cinematic Portfolio",
  description: "Dark neon photography portfolio with immersive interactions and AVIF-first media."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans bg-charcoal text-white antialiased transition-colors`}
      >
        <Providers>
          <div className="relative min-h-screen bg-gradient-to-br from-charcoal via-slate-900 to-black">
            <Navbar />
            <main className="relative pt-24">
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
