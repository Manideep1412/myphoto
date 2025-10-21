"use client";

import { Hero } from "./components/hero";
import { useEffect, useRef, useState } from "react";
import { listPhotos, listSeries, listTags } from "@/lib/media";
import { GalleryCard } from "./components/gallery-card";
import { Lightbox } from "./components/lightbox";
import Link from "next/link";

const INITIAL_COUNT = 3;

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState<string | undefined>();
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const tags = listTags();
  const photos = listPhotos({ tag: selectedTag });
  const series = listSeries();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible((prev) => {
            if (prev >= photos.length) {
              return prev;
            }
            return Math.min(photos.length, prev + 2);
          });
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px 200px 0px",
      threshold: 0
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [photos.length]);

  return (
    <div className="space-y-32 pb-32">
      <Hero />
      <section id="work" className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-semibold text-white">Work</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Masonry gallery with EXIF insights, blur-up loading, and infinite scroll. Filter by vibe or jump into a featured series.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setSelectedTag(undefined);
                setVisible(INITIAL_COUNT);
              }}
              aria-pressed={!selectedTag}
              className="filter-chip"
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSelectedTag(tag);
                  setVisible(INITIAL_COUNT);
                }}
                aria-pressed={selectedTag === tag}
                className="filter-chip"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery-grid mt-10">
          {photos.slice(0, visible).map((photo) => (
            <GalleryCard key={photo.id} photo={photo} onClick={(item) => setLightboxId(item.id)} />
          ))}
        </div>
        <div ref={loadMoreRef} className="mt-6 h-12 w-full animate-pulse rounded-full border border-dashed border-white/20" />
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {series.map((item) => (
            <article key={item.slug} className="glass-panel noise-bg flex flex-col justify-between rounded-3xl border border-white/10 p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Series</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-white/70">{item.summary}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                {item.chapters.map((chapter) => (
                  <span key={chapter.anchor} className="rounded-full border border-white/10 px-4 py-2">
                    {chapter.heading}
                  </span>
                ))}
              </div>
              <Link
                href={`/series/${item.slug}`}
                className="mt-8 inline-flex items-center justify-center rounded-full border border-magenta/60 px-6 py-3 text-sm uppercase tracking-[0.4em] text-magenta/80 transition hover:border-magenta hover:text-magenta"
              >
                View narrative
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="glass-panel rounded-3xl border border-white/10 p-8">
          <h2 className="text-3xl font-semibold text-white">Interaction Highlights</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Scroll-trigger reveals",
                body: "GSAP + Framer Motion orchestrate parallax, magnetic hover, and masked text transitions with reduced-motion fallback."
              },
              {
                title: "Performance-first",
                body: "Next-gen image formats, hover prefetch, skeleton loading, and smart hydration keep core web vitals in the green."
              },
              {
                title: "Accessibility",
                body: "Focus rings, keyboard navigation, descriptive alt text, and reduced motion controls are baked into every component."
              }
            ].map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Feature</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-white/70">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxId ? (
        <Lightbox photos={photos} activeId={lightboxId} onClose={() => setLightboxId(null)} />
      ) : null}
    </div>
  );
}
