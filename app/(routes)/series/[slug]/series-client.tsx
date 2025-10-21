"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Series, Photo } from "@/data/photos";

export default function SeriesClient({ series, photos }: { series: Series; photos: Photo[] }) {
  const [slider, setSlider] = useState(50);

  return (
    <div className="mx-auto max-w-5xl space-y-20 px-6 pb-32 pt-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Series</p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">{series.title}</h1>
        <p className="max-w-3xl text-white/70">{series.summary}</p>
      </header>

      <div className="relative overflow-hidden rounded-4xl border border-white/10">
        <Image
          src={series.heroImage}
          alt={series.title}
          width={1600}
          height={900}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      </div>

      <section className="space-y-16">
        {series.chapters.map((chapter) => (
          <motion.article
            key={chapter.anchor}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-24 space-y-4 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Chapter</p>
            <h2 className="text-3xl font-semibold text-white">{chapter.heading}</h2>
            <p className="text-white/70">{chapter.body}</p>
          </motion.article>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Before & after</h2>
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <div className="relative aspect-[16/9] w-full">
            <Image src={series.before} alt="Before grading" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}>
              <Image src={series.after} alt="After grading" fill className="object-cover" sizes="100vw" />
            </div>
            <div
              className="absolute inset-y-0 w-0.5 bg-white"
              style={{ left: `calc(${slider}% - 1px)` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={slider}
            onChange={(event) => setSlider(Number(event.target.value))}
            className="absolute inset-x-4 bottom-4"
            aria-label="Adjust before after slider"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black/40 p-8">
        <h2 className="text-2xl font-semibold text-white">Behind the shot</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">Story</h3>
            <p className="mt-3 text-white/70">{series.story}</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">Gear</h3>
            <ul className="mt-3 space-y-2 text-white/70">
              {series.gear.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Gallery</h2>
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-item">
              <div className="relative aspect-[3/4]">
                <Image src={photo.src} alt={photo.description} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
              <div className="px-4 py-3 text-white/70">
                <p className="text-sm font-semibold text-white">{photo.title}</p>
                <p className="text-xs uppercase tracking-[0.3em]">{photo.exif.camera}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="rounded-3xl border border-magenta/40 bg-black/30 p-8 text-center text-sm uppercase tracking-[0.4em] text-white/70">
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-magenta/60 px-6 py-3 text-magenta transition hover:border-magenta hover:text-magenta">
          Book a shoot
        </Link>
      </footer>
    </div>
  );
}
