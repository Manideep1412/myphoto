const navItems = [
  'Home',
  'Work',
  'Series',
  'About',
  'Prints',
  'Contact',
];

const collections = [
  {
    title: 'Neon Reverie',
    description:
      'After-dark portraits framed in cinematic glow, using long exposures and reflective cityscapes.',
    accent: 'from-[#ff1f8c]/70 via-[#7a4fff]/50 to-[#00e5ff]/60',
    badge: 'Urban Dreamscapes',
  },
  {
    title: 'Tidal Drift',
    description:
      'Monochrome seascapes with tidal textures, captured at blue hour for maximum mood and motion.',
    accent: 'from-sky-400/60 via-cyan-400/40 to-emerald-400/50',
    badge: 'Coastal Studies',
  },
  {
    title: 'Bloom Static',
    description:
      'Editorial florals in studio haze, mixing neon rim lights with soft focus analog lenses.',
    accent: 'from-amber-400/60 via-rose-500/40 to-indigo-500/40',
    badge: 'Studio Experiments',
  },
  {
    title: 'Echo Trails',
    description:
      'Slow-shutter motion studies that blend dancers with projected light fields and fog.',
    accent: 'from-purple-500/60 via-fuchsia-500/40 to-blue-500/50',
    badge: 'Motion Series',
  },
];

const experiences = [
  {
    title: 'Glassmorphic lightbox',
    copy: 'Drag-to-pan, zoom-on-hover, and cinematic transitions invite viewers to linger.',
  },
  {
    title: 'Ken Burns galleries',
    copy: 'Subtle parallax and scroll-trigger reveals breathe life into still imagery.',
  },
  {
    title: 'EXIF storytelling',
    copy: 'Tooltips surface settings, gear, and behind-the-shot captions for every frame.',
  },
];

const stats = [
  {
    label: 'Series curated',
    value: '24',
  },
  {
    label: 'Prints sold',
    value: '320+',
  },
  {
    label: 'Global features',
    value: '18',
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f1115] text-white">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(255,31,140,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(0,229,255,0.16),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(15,17,21,0.9),rgba(15,17,21,0.6))]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 sm:px-10">
        <div className="sticky top-6 z-40">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-xl">
            <span className="text-sm font-semibold tracking-[0.35em] text-white/70">MYPHOTO</span>
            <ul className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="relative overflow-hidden rounded-full px-3 py-1 transition-colors duration-300 hover:text-white"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 translate-y-full rounded-full bg-white/10 transition-transform duration-300 ease-out hover:translate-y-0" />
                </li>
              ))}
            </ul>
            <button className="relative overflow-hidden rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:border-white hover:text-[#ff1f8c]">
              <span className="relative z-10">Command K</span>
              <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 ease-out hover:translate-y-0" />
            </button>
          </nav>
        </div>

        <header className="grid items-center gap-16 md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6">
            <span className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/60">
              immersive portfolio
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Immersive photography sculpted in neon light and analog texture.
            </h1>
            <p className="max-w-xl text-lg text-white/70 sm:text-xl">
              Step into a cinematic archive of urban nights, glassy coastlines, and tactile studio experiments. Every gallery uses motion-first storytelling, glassmorphic UI, and accessible interactions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button className="group relative w-full overflow-hidden rounded-full bg-[#ff1f8c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#0f1115] transition-transform duration-500 hover:-translate-y-0.5 sm:w-auto">
                <span className="relative z-10">Enter Gallery</span>
                <span className="absolute inset-0 translate-y-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_60%)] transition-transform duration-500 ease-out group-hover:translate-y-0" />
              </button>
              <button className="group relative w-full overflow-hidden rounded-full border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition duration-500 hover:border-[#00e5ff] hover:text-[#00e5ff] sm:w-auto">
                <span className="relative z-10">Book A Shoot</span>
                <span className="absolute inset-0 translate-y-full bg-white/5 transition-transform duration-500 ease-out group-hover:translate-y-0" />
              </button>
            </div>
          </div>
          <div className="relative grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="absolute -left-10 top-10 hidden h-24 w-24 rounded-full bg-[#ff1f8c]/40 blur-3xl md:block" />
            <div className="absolute -right-8 bottom-4 hidden h-32 w-32 rounded-full bg-[#00e5ff]/40 blur-3xl md:block" />
            <div className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#161922]/80 p-5">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Latest series</span>
              <h2 className="text-2xl font-semibold">Chromatic Reveries</h2>
              <p className="text-sm text-white/60">
                Twelve nocturnal frames stitched with parallax storytelling, scroll-trigger reveals, and EXIF microcopy.
              </p>
              <span className="flex items-center gap-2 text-xs text-[#00e5ff]">
                <span className="h-1 w-1 rounded-full bg-[#00e5ff]" /> Live this week
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <span className="block text-2xl font-semibold text-white">{stat.value}</span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-white/40">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">interactive collections</span>
            <h2 className="text-3xl font-semibold sm:text-4xl">Masonry cards with glass glow + kinetic hover</h2>
            <p className="max-w-2xl text-white/70">
              Each collection card uses layered gradients, frosted glass, and motion-ready cues to preview the atmosphere before entering the full gallery. Hover reveals mimic liquid morphing with gradient borders.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {collections.map((collection) => (
              <article
                key={collection.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-[0_25px_80px_-40px_rgba(0,229,255,0.8)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_45px_110px_-50px_rgba(255,31,140,0.8)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${collection.accent}`} />
                </div>
                <div className="relative flex h-full flex-col gap-6 rounded-[calc(1.5rem-2px)] bg-[#11141c]/80 p-8 backdrop-blur-2xl">
                  <span className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                    {collection.badge}
                  </span>
                  <h3 className="text-2xl font-semibold sm:text-3xl">{collection.title}</h3>
                  <p className="text-sm text-white/70 sm:text-base">{collection.description}</p>
                  <div className="mt-auto flex items-center justify-between text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[#00e5ff]/80" />
                      Hover to preview
                    </span>
                    <span className="transition-transform duration-500 group-hover:translate-x-1">Open →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-3">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="group relative overflow-hidden rounded-2xl border border-white/0 bg-white/5 p-6 transition duration-500 hover:border-white/30 hover:bg-white/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 translate-y-[-150%] bg-gradient-to-r from-[#ff1f8c] via-transparent to-[#00e5ff] transition-transform duration-500 group-hover:translate-y-0" />
              <h3 className="text-lg font-semibold text-white sm:text-xl">{experience.title}</h3>
              <p className="mt-3 text-sm text-white/70">{experience.copy}</p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                Learn more
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
