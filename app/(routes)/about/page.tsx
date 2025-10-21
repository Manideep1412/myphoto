import Image from "next/image";

const TIMELINE = [
  { year: "2024", note: "Exhibited at Neon Nights Collective" },
  { year: "2023", note: "Published in Aurora Magazine" },
  { year: "2022", note: "Residency in Reykjavik" },
  { year: "2021", note: "Launched kinetic web series" }
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 pb-32 pt-12">
      <header className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="relative flex h-80 items-center justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-[30%_70%_60%_40%/40%_50%_50%_60%] border border-magenta/40 shadow-glass">
            <Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" alt="Portrait" fill className="object-cover" />
          </div>
          <div className="absolute -left-6 -top-6 h-16 w-16 animate-float rounded-full bg-magenta/60 blur-2xl" />
        </div>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">About</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Cinematic photographer + interactive storyteller</h1>
          <p className="text-white/70">
            I blend editorial lighting with motion design to craft immersive experiences across web and print. My workflow spans drone capture, medium format film, and WebGL prototyping to deliver emotive narratives for music, fashion, and travel brands.
          </p>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.4em] text-white/70 transition hover:text-white"
          >
            <span className="relative">
              <span className="absolute inset-0 animate-morph rounded-full bg-magenta/40 blur-2xl" aria-hidden />
              <span className="relative">Download CV</span>
            </span>
          </a>
        </div>
      </header>

      <section className="glass-panel rounded-3xl border border-white/10 p-8">
        <h2 className="text-2xl font-semibold text-white">Timeline</h2>
        <div className="timeline-track mt-6">
          {TIMELINE.map((item) => (
            <div key={item.year} className="glass-panel rounded-2xl border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{item.year}</p>
              <p className="mt-3 text-white/80">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Capabilities</h3>
          <ul className="mt-4 space-y-3 text-white/70">
            <li>Direction & set design</li>
            <li>Retouching & color science</li>
            <li>Framer Motion & GSAP pipelines</li>
            <li>Interactive installation design</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Approach</h3>
          <p className="mt-4 text-white/70">
            Every project begins with motion explorations in Figma and Framer, layering custom LUTs and audio-reactive lighting to map the emotional beats. Final delivery includes responsive Next.js experiences with theme skins for neon, brutalist, and filmic moods.
          </p>
        </div>
      </section>
    </div>
  );
}
