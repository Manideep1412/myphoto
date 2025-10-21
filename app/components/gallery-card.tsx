"use client";

import Image from "next/image";
import { Photo } from "@/data/photos";
import { motion } from "framer-motion";
import classNames from "classnames";
import { withImageParams } from "@/lib/image-url";

export function GalleryCard({ photo, onClick }: { photo: Photo; onClick?: (photo: Photo) => void }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      className="gallery-item cursor-pointer"
      onClick={() => onClick?.(photo)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && onClick) {
          event.preventDefault();
          onClick(photo);
        }
      }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={withImageParams(photo.src)}
          alt={photo.description}
          fill
          className="object-cover transition duration-700 ease-out hover:scale-105"
          placeholder="blur"
          blurDataURL={photo.blurDataUrl}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="gallery-overlay" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 py-4 text-white">
          <div>
            <h3 className="text-lg font-semibold">{photo.title}</h3>
            <p className="text-sm text-white/70">{photo.description}</p>
          </div>
          <div className="flex flex-col items-end text-[10px] uppercase tracking-[0.3em] text-white/60">
            <span>{photo.exif.camera}</span>
            <span>{photo.exif.shutter}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 px-4 py-3">
        {photo.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
            {tag}
          </span>
        ))}
        {photo.seriesSlug ? (
          <span className={classNames("rounded-full border border-magenta/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-magenta/80")}>Series</span>
        ) : null}
      </div>
    </motion.article>
  );
}
