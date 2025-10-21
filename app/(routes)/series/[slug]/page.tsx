import { getSeriesBySlug, listSeries, listPhotos } from "@/lib/media";
import { notFound } from "next/navigation";
import SeriesClient from "./series-client";

export default function SeriesDetailPage({ params }: { params: { slug: string } }) {
  const series = getSeriesBySlug(params.slug);
  if (!series) {
    notFound();
  }
  const photos = listPhotos({ seriesSlug: series.slug });
  return <SeriesClient series={series} photos={photos} />;
}

export function generateStaticParams() {
  return listSeries().map((series) => ({ slug: series.slug }));
}
