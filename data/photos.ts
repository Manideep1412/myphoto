export type Photo = {
  id: string;
  title: string;
  description: string;
  src: string;
  blurDataUrl: string;
  aspectRatio: number;
  tags: string[];
  exif: {
    camera: string;
    lens: string;
    iso: number;
    shutter: string;
    aperture: string;
    location: string;
  };
  seriesSlug?: string;
};

export const PHOTOS: Photo[] = [
  {
    id: "nocturne-bridge",
    title: "Neon Veins",
    description: "Magenta light slicing across river mist.",
    src: "/images/neon-veins.svg",
    blurDataUrl:
      "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGBQUGB4aHB0gJCAmJygpKSo2NzY2Oi84QzQ3QkJKS0pOT09PT1laYWVhbnV2eXl+/9sAQwEFBQYGBgwKCgwcEhIRCx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0fHx0f/8AAEQgABAAHAwEiAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAb/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8A5//Z",
    aspectRatio: 3 / 2,
    tags: ["night", "urban", "magenta"],
    exif: {
      camera: "Sony A7R V",
      lens: "24mm f/1.4",
      iso: 400,
      shutter: "1/60",
      aperture: "f/2.0",
      location: "Shinjuku, Tokyo"
    },
    seriesSlug: "nocturnal-echoes"
  },
  {
    id: "cyan-dunes",
    title: "Cyan Drift",
    description: "Moonlit dunes bending into electric blue fog.",
    src: "/images/cyan-drift.svg",
    blurDataUrl:
      "data:image/jpeg;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAIBABAAICAQQDAQAAAAAAAAAAAAECAwQRAAUSITFBYYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERAkH/2gAMAwEAAhEDEQA/AJrTfVXQ1Wy6W4QSeMSREid9mPynp970nMPVCyiuNke0srSY9ThWrRbgCvm43BxwBYnJpn2uLW0EVvPGdhsDGdmc/QqyiZ2cxf/Z",
    aspectRatio: 4 / 5,
    tags: ["landscape", "cyan", "desert"],
    exif: {
      camera: "Fujifilm GFX100",
      lens: "45mm f/2.8",
      iso: 200,
      shutter: "1/125",
      aperture: "f/4.5",
      location: "Sahara, Morocco"
    },
    seriesSlug: "analog-dreams"
  },
  {
    id: "urban-forest",
    title: "Analog Whisper",
    description: "Concrete softened by moss and amber light.",
    src: "/images/analog-whisper.svg",
    blurDataUrl:
      "data:image/jpeg;base64,/9j/2wBDAAoHBwkHBgoICAoKCgoMDR8MDxAPDw8NFREYFhURExUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAAIDBQYBBwj/xAA/EAACAQIEAwYDBwMDBQAAAAAAAQIDEQQFITEGEkFRBxMiYXGBkaEjQrHB0RRC8AcVI1NicuHxM3KSorLS/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwQFBv/EAC8RAAICAQMDAQYHAAAAAAAAAAABAhEDBBIhMUFRBRMiYXGBkaHB8EJicoH/2gAMAwEAAhEDEQA/AB6ZRmNJG0jogBjiIAVz3T5TbjcVXzdAkY8Yqxfsgc12vOfYHgnmEy5uXQ6Fz1L0m82w5LlHCeF5E3sT81U4W1xrlSI5zjI1q0qJ2QeHqB0H5n/2Q==",
    aspectRatio: 3 / 4,
    tags: ["forest", "urban", "contrast"],
    exif: {
      camera: "Leica M11",
      lens: "35mm f/1.4",
      iso: 800,
      shutter: "1/40",
      aperture: "f/2.2",
      location: "Seoul, South Korea"
    },
    seriesSlug: "urban-organic"
  },
  {
    id: "luminous-lake",
    title: "Aurora Veil",
    description: "A cyan aurora mirrored in silent water.",
    src: "/images/aurora-veil.svg",
    blurDataUrl:
      "data:image/jpeg;base64,/9j/2wCEAAkGBxAQEBAQEBAVFRUVFRUVFRUQFRUQFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAECB//EADoQAAEDAgQDBgQEBwAAAAAAAAECAwQFEQAhBhIxQVFhEyJxgZGh8BQjMrHhFSRCUnLxFyRzoqKy/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAjEQACAwACAgMBAQAAAAAAAAAAAQIRAxIhMUFRBCIyQmHh/9oADAMBAAIRAxEAPwCv5VvLONgJDt4RSoyyoEGSce3P8AeoP5cE20QMthHVRhJVUkgE1VkceD+1fqS1G5V1qzOJ0ixSxGbO2SM7gLHG/xp73dYcIDbR8Qqdcl1cMWBwfvnJr1U66LuVN8iB6XEvlP7dL7Y9aN5+5S31EfeJAxvTa9LFjD0MgBQy/M/zNDv5g4I9A//9k=",
    aspectRatio: 3 / 2,
    tags: ["landscape", "cyan", "aurora"],
    exif: {
      camera: "Nikon Z8",
      lens: "20mm f/1.8",
      iso: 1600,
      shutter: "4s",
      aperture: "f/2.5",
      location: "Reykjavik, Iceland"
    },
    seriesSlug: "polar-night"
  },
  {
    id: "urban-canopy",
    title: "Concrete Canopy",
    description: "Skyways laced with mossy tendrils above amber-lit plazas.",
    src: "/images/urban-canopy.svg",
    blurDataUrl:
      "data:image/jpeg;base64,/9j/2wBDAAoHBwkHBgoICAoKCgoMDR8MDxAPDw8NFREYFhURExUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAQMFBgIHCQj/xAA/EAACAQIEBAMGBwQCAgMAAAABAgMAEQQFEiExBhNBURQiYXGBobEHFCNCUmKC0fAUM2Jy0TPhFzSj0uEW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAQQBAgUFAAAAAAAAAAECAAMRBBIhMRMiQVEUcRSh0UJSYXGBkaH/2gAMAwEAAhEDEQA/ALc0IiNBoHcAykJpwZHYUsY2xJxu5xtuMkn2pW5M1X9fMDd8GgkS6f3fzpM6p5KYuF4DyU8pP6ijrI7KqW1S6ieOziGJXxgkn7kft71pWlt2qTCG0m1ZpPGziTtt74PmxNAa8cOniJ6XwEcLU7bw8fep2jTIIrRqzyA4JQH2yCOmNyxoVgdmG6PeKpJ2O+x9b/AMVVMsEUjZbL4fVep1S0p0iJ1VX4pQ0uXn0zJPz41usYkUIt3A4yIPr49Kv7eaRJIwxBHPJOF6+9UXqqsYd6Sy2GQ0yJxjjP5VIqR4CQNP//Z",
    aspectRatio: 3 / 4,
    tags: ["urban", "amber", "architecture"],
    exif: {
      camera: "Leica SL2-S",
      lens: "50mm f/1.2",
      iso: 500,
      shutter: "1/80",
      aperture: "f/2.0",
      location: "Singapore"
    },
    seriesSlug: "urban-organic"
  },
  {
    id: "polar-horizon",
    title: "Polar Horizon",
    description: "Ice floes reflecting teal aurora ribbons across midnight water.",
    src: "/images/polar-horizon.svg",
    blurDataUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAoKCgoMDR8MDxAPDw8NFREYFhURExUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADkQAAEDAgQDBgUDBQEAAAAAAAEAAgMEEQUSITETQVEGImFxkQYUMqGhsRQVQlLR8PEzYnKC4f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAoEQACAgIBAgUFAQAAAAAAAAAAAQIRAxIhBBMxQSIyUWFxkbH/2gAMAwEAAhEDEQA/AJ62ebmRYbnkddK9PusX6cn1AmrShB3HbG74wQDyNwSMj8vpVl9G1i0oy1Szkc41EqJz8c46e9Pi6+kLiXHy41IACMnYH8/P1pwxC8bfJ+3IHqSfpsZ5p8vQuK5YIrsw0SN3BBwSOtJ3emQ1N8s1t9pVb7P3RpI1Y4Xb0woJz0Gfc/Wpa3Oaz2dqdmxCscnBB7Z5+tFXN6wwxlcKXIDnGCBzwMDPvUvFuwTjE9LtHA6/dBpYLUT1jXmbNh2YmTyMVwfWnT6zvaZ9U8iRRJYhWBAO3zo/9k=",
    aspectRatio: 16 / 9,
    tags: ["landscape", "ice", "cyan"],
    exif: {
      camera: "Sony A1",
      lens: "35mm f/1.4",
      iso: 1250,
      shutter: "2s",
      aperture: "f/2.8",
      location: "Lofoten, Norway"
    },
    seriesSlug: "polar-night"
  }
];

export type Series = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  color: string;
  chapters: {
    heading: string;
    body: string;
    anchor: string;
  }[];
  before: string;
  after: string;
  story: string;
  gear: string[];
};

export const SERIES: Series[] = [
  {
    slug: "nocturnal-echoes",
    title: "Nocturnal Echoes",
    summary: "Tokyo streets rendered in neon fog and reflective rain.",
    heroImage: "/images/nocturnal-echoes-hero.svg",
    color: "from-magenta to-cyan",
    chapters: [
      {
        heading: "Pulse of the Yamanote",
        body: "Long exposures that stretch commuter light into ribbons of energy.",
        anchor: "pulse"
      },
      {
        heading: "Rain-Slick Geometry",
        body: "Glass towers, distorted signage, and puddles acting as portals.",
        anchor: "geometry"
      }
    ],
    before: "/images/nocturnal-before.svg",
    after: "/images/nocturnal-after.svg",
    story:
      "Shot over seven nights with a lightweight rig and a custom cyan-magenta LUT to preserve the surreal glow of Tokyo after dark.",
    gear: ["Sony A7R V", "24mm f/1.4 GM", "Peak Design Travel Tripod", "Prism Lens FX Filter"]
  },
  {
    slug: "analog-dreams",
    title: "Analog Dreams",
    summary: "Desert horizons softened by experimental film stocks.",
    heroImage: "/images/analog-dreams-hero.svg",
    color: "from-cyan to-magenta",
    chapters: [
      {
        heading: "Dust Bloom",
        body: "Wind-sculpted dunes captured during blue hour with color-shifted Polaroid stock.",
        anchor: "dust"
      },
      {
        heading: "Starlit Silence",
        body: "Time-lapse composites of constellations suspended over isolated ridgelines.",
        anchor: "silence"
      }
    ],
    before: "/images/analog-before.svg",
    after: "/images/analog-after.svg",
    story:
      "Using cross-processed instant film introduced organic light leaks that informed the palette of the entire series.",
    gear: ["Pentax 67II", "105mm f/2.4", "Cinestill 800T", "Gitzo Systematic"]
  },
  {
    slug: "urban-organic",
    title: "Urban Organic",
    summary: "Megacity skybridges reclaimed by bioluminescent foliage.",
    heroImage: "/images/urban-organic-hero.svg",
    color: "from-amber-400 to-emerald-500",
    chapters: [
      {
        heading: "Overgrown Arteries",
        body: "Skyways pulsing with moss LEDs and botanical signage shot with tilt-shift lenses.",
        anchor: "arteries"
      },
      {
        heading: "Photosynthetic Fog",
        body: "Condensation chambers filled with engineered spores to capture amber volumetric light.",
        anchor: "fog"
      }
    ],
    before: "/images/urban-before.svg",
    after: "/images/urban-after.svg",
    story:
      "Commissioned for a climate-tech pavilion, the visuals blend architectural renders with long-exposure plant scans to tell a regenerative city story.",
    gear: ["Leica SL2-S", "50mm f/1.2", "Tilt-shift adapter", "Nanlite Pavotube"]
  },
  {
    slug: "polar-night",
    title: "Polar Night",
    summary: "Arctic horizons saturated with teal aurora reflections.",
    heroImage: "/images/polar-night-hero.svg",
    color: "from-cyan to-indigo-500",
    chapters: [
      {
        heading: "Frozen Mirrors",
        body: "Stacked exposures of drifting ice floes creating tessellated reflections.",
        anchor: "mirrors"
      },
      {
        heading: "Ion Storm",
        body: "Aurora storms mapped with timelapse star trails and projection-mapped typography.",
        anchor: "storm"
      }
    ],
    before: "/images/polar-before.svg",
    after: "/images/polar-after.svg",
    story:
      "Shot during a two-week residency aboard an icebreaker, pairing drone footage with handheld long exposures to celebrate noctilucent light.",
    gear: ["Sony A1", "14mm f/1.8 GM", "DJI Mavic 3", "Custom aurora LUTs"]
  }
];

export type Print = {
  id: string;
  title: string;
  image: string;
  price: number;
  sizes: string[];
  paper: string[];
  description: string;
};

export const PRINTS: Print[] = [
  {
    id: "print-neon",
    title: "Neon Veins",
    image: "/images/neon-veins.svg",
    price: 240,
    sizes: ["12x18", "16x24", "20x30"],
    paper: ["Hahnemühle Photo Rag", "Glossy Metallic"],
    description: "Limited run of 50 with hand-signed certificate."
  },
  {
    id: "print-dunes",
    title: "Cyan Drift",
    image: "/images/cyan-drift.svg",
    price: 320,
    sizes: ["11x14", "18x24", "24x36"],
    paper: ["Matte Cotton", "Pearl Lustre"],
    description: "Edition of 35 with emboss seal and UV varnish."
  },
  {
    id: "print-urban",
    title: "Analog Whisper",
    image: "/images/analog-whisper.svg",
    price: 280,
    sizes: ["12x12", "20x20", "30x30"],
    paper: ["Bamboo Warm Tone", "Hahnemühle Photo Rag"],
    description: "Limited to 40, includes archival framing guide and artist notes."
  },
  {
    id: "print-polar",
    title: "Aurora Veil",
    image: "/images/aurora-veil.svg",
    price: 360,
    sizes: ["12x18", "18x27", "24x36"],
    paper: ["Glossy Metallic", "Deep Matte"],
    description: "Signed run of 30 with glow-ink certificate and holographic seal."
  }
];
