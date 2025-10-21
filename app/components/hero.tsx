"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSplitTextReveal } from "@/lib/animations";
import Link from "next/link";

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useSplitTextReveal("[data-split]");

  useEffect(() => {
    const video = document.getElementById("hero-video") as HTMLVideoElement | null;
    if (video) {
      video.play().catch(() => {
        /* noop for browsers blocking autoplay */
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          id="hero-video"
          className="h-full w-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.coverr.co/videos/coverr-neon-lights-in-tokyo-8482/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />
      </div>
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 py-24">
        <motion.div style={{ y: y1 }} className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Cinematic storytelling in neon + nature</p>
          <h1 data-split className="mt-6 text-5xl font-semibold leading-tight text-white md:text-7xl">
            Urban neon collides with quiet wilderness in immersive photo narratives.
          </h1>
          <motion.p style={{ y: y2 }} className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            I craft scroll-told experiences with custom LUTs, glassmorphic UI, and kinetic storytelling to bring your brand into a
            cinematic light.
          </motion.p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className="liquid-button relative rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white"
            >
              <span>Enter gallery</span>
            </Link>
            <Link
              href="/prints"
              className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.4em] text-white/70 transition hover:border-white/50 hover:text-white"
            >
              Buy prints
            </Link>
          </div>
        </motion.div>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {["32 awards", "120+ shoots", "4 continents"].map((stat) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="glass-panel noise-bg rounded-3xl border border-white/10 px-6 py-8"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">Experience</p>
              <p className="mt-4 text-2xl font-semibold text-white">{stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
