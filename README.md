# MyPhoto – Modern Photography Portfolio

A production-ready Next.js 14 portfolio that blends cinematic photography with interactive neon styling. The site uses Tailwind CSS, Framer Motion, and GSAP to deliver scroll-triggered reveals, magnetic navigation, glassmorphism, and reduced-motion aware micro-interactions.

## Features

- **Sticky glass navigation** with magnetic hover tabs, command palette (`Cmd + K`), and theme skins (Neon, Brutalist, Filmic).
- **Hero experience** featuring a video background, parallax layers, split-text reveal animation, and a liquid CTA button.
- **Work gallery** with masonry layout, filter chips, EXIF tooltips, blur-up AVIF/WebP images, and infinite scroll loading.
- **Lightbox** supporting drag-to-pan, inertia zoom, filmstrip thumbnails, keyboard navigation, compare-two mode, and print size prompt.
- **Series storytelling** pages with pinned chapters, scroll-told narrative, and before/after slider for grading breakdowns.
- **Prints shop** using 3D tilt cards, variant selectors, a spring-animated slide-over cart, and localStorage persistence.
- **About** page featuring polygon portrait mask, timeline chips, and animated CV download button.
- **Contact** page with animated slot selection, honeypot anti-spam field, and confetti celebration respecting reduced-motion preferences.
- **Global performance** optimizations including AVIF/WebP formats, hover prefetch, lazy loading, page transitions, and accessibility enhancements.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

Execute the Vitest suite:

```bash
npm test
```

## Project Structure

```
app/          # App Router pages, components, and layout
├─ components # Shared UI such as navbar, hero, gallery card, lightbox
├─ (routes)   # Route groups for Work, Series, Prints, About, Contact
lib/          # Animation hooks, media helpers, reduced-motion utilities
data/         # Sample photo, series, and print metadata
public/       # Static assets including cv.pdf
```

## Accessibility & Performance

- Honors `prefers-reduced-motion` to disable confetti and heavy animations.
- Ensures 12:1 contrast ratios for critical text and provides focus outlines.
- Uses lazy loading, responsive `sizes`, AVIF/WebP, and prefetch-on-hover navigation to target <3s LCP on mobile.
