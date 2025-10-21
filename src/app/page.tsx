const collections = [
  {
    title: "Neon Nights",
    description:
      "Moody street photography captured between the glow of city lights and the hush of midnight skies.",
    accent: "from-purple-500/60 via-fuchsia-500/40 to-blue-500/40",
    badge: "Urban Stories",
  },
  {
    title: "Coastal Daydreams",
    description:
      "Sun-drenched seascapes and candid portraits that celebrate slow mornings by the shoreline.",
    accent: "from-sky-400/60 via-cyan-400/40 to-emerald-400/40",
    badge: "On Location",
  },
  {
    title: "Wilder Bloom",
    description:
      "Editorial florals with painterly light, layered textures, and a hint of surrealism.",
    accent: "from-amber-400/60 via-rose-500/40 to-indigo-500/40",
    badge: "In Studio",
  },
];

const highlights = [
  {
    title: "Cinematic storytelling",
    copy: "Every gallery is curated with motion-inspired pacing to evoke emotion in every scroll.",
  },
  {
    title: "Crafted color grading",
    copy: "Hand-built presets ensure each collection has a signature palette and cohesive mood.",
  },
  {
    title: "Immersive delivery",
    copy: "Clients receive interactive lookbooks and behind-the-scenes moments in real time.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-600/20 via-fuchsia-500/10 to-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute left-12 top-24 h-72 w-72 -rotate-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl" />
        <div className="pointer-events-none absolute bottom-12 right-24 h-64 w-64 rotate-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-20 sm:px-12">
        <header className="flex flex-col gap-6 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 self-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.4em] text-white/70 sm:self-start">
            Photo Artistry
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Crafting atmospheric narratives through modern photography.
          </h1>
          <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
            Explore immersive collections designed with cinematic motion, editorial polish, and tactile
            storytelling. Each image is a doorway into the worlds I document.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button className="group relative overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-transform duration-300 hover:-translate-y-0.5">
              <span className="relative z-10">View Collections</span>
              <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-sky-500 transition-transform duration-500 group-hover:translate-y-0" />
            </button>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10">
              Book a Session
            </button>
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px_rgba(64,0,128,0.7)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.accent}`} />
              </div>
              <div className="relative flex h-full flex-col gap-6 rounded-[calc(1.5rem-2px)] bg-slate-950/80 p-8 backdrop-blur-xl">
                <span className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80">
                  {collection.badge}
                </span>
                <h2 className="text-2xl font-semibold sm:text-3xl">{collection.title}</h2>
                <p className="text-sm text-white/70 sm:text-base">{collection.description}</p>
                <div className="mt-auto flex items-center justify-between text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
                    Updated weekly
                  </span>
                  <span className="transition-transform duration-500 group-hover:translate-x-1">View →</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group rounded-2xl border border-white/0 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_25px_60px_-35px_rgba(59,130,246,0.7)]"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">{highlight.title}</h3>
              <p className="mt-3 text-sm text-white/70">{highlight.copy}</p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                Learn More
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
