import { PHOTOS, SERIES, PRINTS, type Photo, type Series, type Print } from "@/data/photos";

type PhotoFilter = {
  tag?: string;
  seriesSlug?: string;
};

export function listPhotos(filter: PhotoFilter = {}): Photo[] {
  return PHOTOS.filter((photo) => {
    const matchesTag = filter.tag ? photo.tags.includes(filter.tag) : true;
    const matchesSeries = filter.seriesSlug ? photo.seriesSlug === filter.seriesSlug : true;
    return matchesTag && matchesSeries;
  });
}

export function listTags(): string[] {
  return Array.from(new Set(PHOTOS.flatMap((photo) => photo.tags))).sort();
}

export function getPhotoById(id: string): Photo | undefined {
  return PHOTOS.find((photo) => photo.id === id);
}

export function listSeries(): Series[] {
  return SERIES;
}

export function getSeriesBySlug(slug: string): Series | undefined {
  return SERIES.find((series) => series.slug === slug);
}

export function listPrints(): Print[] {
  return PRINTS;
}

export function getPrintById(id: string): Print | undefined {
  return PRINTS.find((print) => print.id === id);
}
