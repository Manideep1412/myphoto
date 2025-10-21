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
    src: "https://images.unsplash.com/photo-1526481280695-3c46917adf99",
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
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
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
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=magenta",
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
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
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
    heroImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
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
    before: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    after: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    story:
      "Shot over seven nights with a lightweight rig and a custom cyan-magenta LUT to preserve the surreal glow of Tokyo after dark.",
    gear: ["Sony A7R V", "24mm f/1.4 GM", "Peak Design Travel Tripod", "Prism Lens FX Filter"]
  },
  {
    slug: "analog-dreams",
    title: "Analog Dreams",
    summary: "Desert horizons softened by experimental film stocks.",
    heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
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
    before: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    after: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    story:
      "Using cross-processed instant film introduced organic light leaks that informed the palette of the entire series.",
    gear: ["Pentax 67II", "105mm f/2.4", "Cinestill 800T", "Gitzo Systematic"]
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
    image: "https://images.unsplash.com/photo-1526481280695-3c46917adf99",
    price: 240,
    sizes: ["12x18", "16x24", "20x30"],
    paper: ["Hahnemühle Photo Rag", "Glossy Metallic"],
    description: "Limited run of 50 with hand-signed certificate."
  },
  {
    id: "print-dunes",
    title: "Cyan Drift",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: 320,
    sizes: ["11x14", "18x24", "24x36"],
    paper: ["Matte Cotton", "Pearl Lustre"],
    description: "Edition of 35 with emboss seal and UV varnish."
  }
];
