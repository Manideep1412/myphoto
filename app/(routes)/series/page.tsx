import Link from "next/link";
import { listSeries } from "@/lib/media";

export default function SeriesIndexPage() {
  const series = listSeries();
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 pb-32 pt-12">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Narratives</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Series collections</h1>
        <p className="mt-4 max-w-3xl text-white/70">
          Each series is art-directed with pinned chapter titles, parallax motion, and before/after sliders for retouch notes.
        </p>
      </header>
      <div className="grid gap-10 md:grid-cols-2">
        {series.map((item) => (
          <Link
            key={item.slug}
            href={`/series/${item.slug}`}
            className="glass-panel flex flex-col justify-between rounded-3xl border border-white/10 p-8 transition hover:border-magenta/60 hover:text-magenta"
          >
            <div>
              <h2 className="text-3xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-white/70">{item.summary}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
              {item.chapters.map((chapter) => (
                <span key={chapter.anchor} className="rounded-full border border-white/10 px-4 py-2">
                  {chapter.heading}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
