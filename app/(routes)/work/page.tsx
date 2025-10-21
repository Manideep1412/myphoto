"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { listPhotos, listSeries, listTags } from "@/lib/media";
import { GalleryCard } from "@/components/gallery-card";
import { Lightbox } from "@/components/lightbox";
import Link from "next/link";

const STEP = 4;

export default function WorkPage() {
  const tags = listTags();
  const [filter, setFilter] = useState<string | undefined>();
  const [visible, setVisible] = useState(STEP);
  const [openId, setOpenId] = useState<string | null>(null);

  const photos = useMemo(() => listPhotos({ tag: filter }), [filter]);
  const series = listSeries();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((count) => {
              if (count >= photos.length) {
                return count;
              }
              return Math.min(photos.length, count + STEP);
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px 200px 0px",
        threshold: 0
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [photos.length]);

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6 pb-32">
      <header className="pt-10">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Portfolio</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Immersive stories in motion</h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Built with masonry layout, EXIF chips, lazy loading AVIF/WebP sources, and hover prefetch for series deep dives. Drag any image to pan inside the lightbox and compare edits side by side.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            className="filter-chip"
            onClick={() => {
              setFilter(undefined);
              setVisible(STEP);
            }}
            aria-pressed={!filter}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="filter-chip"
              onClick={() => {
                setFilter(tag);
                setVisible(STEP);
              }}
              aria-pressed={filter === tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      <section className="gallery-grid">
        {photos.slice(0, visible).map((photo) => (
          <GalleryCard key={photo.id} photo={photo} onClick={(item) => setOpenId(item.id)} />
        ))}
      </section>
      <div ref={loadMoreRef} className="h-12 w-full animate-pulse rounded-full border border-dashed border-white/20" />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Featured series</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {series.map((item) => (
            <Link
              key={item.slug}
              href={`/series/${item.slug}`}
              prefetch
              className="glass-panel flex flex-col justify-between rounded-3xl border border-white/10 p-6 transition hover:border-magenta/50 hover:text-magenta"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">{item.title}</p>
                <p className="mt-3 text-sm text-white/70">{item.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                {item.chapters.map((chapter) => (
                  <span key={chapter.anchor} className="rounded-full border border-white/10 px-3 py-1">
                    {chapter.heading}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {openId ? <Lightbox photos={photos} activeId={openId} onClose={() => setOpenId(null)} /> : null}
    </div>
  );
}
