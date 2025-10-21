"use client";

import Image from "next/image";
import { Photo } from "@/data/photos";
import { useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize2, Ruler, SplitSquareHorizontal } from "lucide-react";

const spring = { type: "spring", stiffness: 260, damping: 32 };

export function Lightbox({ photos, activeId, onClose }: { photos: Photo[]; activeId: string; onClose: () => void }) {
  const [currentId, setCurrentId] = useState(activeId);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [compare, setCompare] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const startRef = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });

  const current = useMemo(() => photos.find((photo) => photo.id === currentId) ?? photos[0], [currentId, photos]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const step = (delta: number) => {
    const index = photos.findIndex((photo) => photo.id === current.id);
    const nextIndex = (index + delta + photos.length) % photos.length;
    setCurrentId(photos[nextIndex]?.id ?? current.id);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    startRef.current = {
      x: event.clientX,
      y: event.clientY,
      offsetX: offset.x,
      offsetY: offset.y
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = event.clientX - startRef.current.x;
    const dy = event.clientY - startRef.current.y;
    setOffset({ x: startRef.current.offsetX + dx, y: startRef.current.offsetY + dy });
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const setZoomLevel = (amount: number) => {
    setZoom((value) => Math.min(3, Math.max(1, value + amount)));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="lightbox-backdrop fixed inset-0 z-[999] flex items-center justify-center px-6 py-12"
      >
        <div className="flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/70 backdrop-blur-2xl">
          <header className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.4em] text-white/60">
            <span>Drag to pan · Scroll to zoom · ← → navigate</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 p-2 text-white/70 transition hover:text-white"
              aria-label="Close lightbox"
            >
              <X className="h-4 w-4" />
            </button>
          </header>
          <div className="relative flex flex-1 flex-col md:flex-row">
            <div className="relative flex flex-1 items-center justify-center overflow-hidden">
              <div
                className="lightbox-canvas relative h-full w-full touch-pan-y"
                onWheel={(event) => {
                  event.preventDefault();
                  const direction = Math.sign(event.deltaY) * -0.1;
                  setZoomLevel(direction);
                }}
                onPointerDown={startDrag}
                onPointerMove={onDrag}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
              >
                <motion.div
                  animate={{ scale: zoom, x: offset.x, y: offset.y }}
                  transition={spring}
                  className="relative mx-auto h-full w-full"
                >
                  <Image
                    src={current.src}
                    alt={current.description}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 60vw, 100vw"
                    priority
                  />
                  {compare ? (
                    <div className="pointer-events-none absolute inset-y-0 left-1/2 w-1 bg-white/30" />
                  ) : null}
                </motion.div>
              </div>
              {compare ? (
                <motion.div
                  className="pointer-events-none absolute inset-4 rounded-3xl border border-white/20 bg-black/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                <button
                  type="button"
                  className="flex items-center gap-1 text-white/60 transition hover:text-white"
                  onClick={() => setZoomLevel(0.25)}
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                  In
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white/60 transition hover:text-white"
                  onClick={() => setZoomLevel(-0.25)}
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                  Out
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white/60 transition hover:text-white"
                  onClick={() => setZoom(1)}
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  Fit
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white/60 transition hover:text-white"
                  onClick={() => setCompare((value) => !value)}
                >
                  <SplitSquareHorizontal className="h-3.5 w-3.5" />
                  Compare
                </button>
              </div>
            </div>
            <aside className="w-full border-t border-white/10 bg-black/40 p-4 text-sm text-white/70 md:w-80 md:border-l md:border-t-0">
              <h3 className="text-lg font-semibold text-white">{current.title}</h3>
              <p className="mt-1 text-white/60">{current.description}</p>
              <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-xs uppercase tracking-[0.3em] text-white/50">
                <div>
                  <dt>Camera</dt>
                  <dd className="text-white/80">{current.exif.camera}</dd>
                </div>
                <div>
                  <dt>Lens</dt>
                  <dd className="text-white/80">{current.exif.lens}</dd>
                </div>
                <div>
                  <dt>ISO</dt>
                  <dd className="text-white/80">{current.exif.iso}</dd>
                </div>
                <div>
                  <dt>Shutter</dt>
                  <dd className="text-white/80">{current.exif.shutter}</dd>
                </div>
                <div>
                  <dt>Aperture</dt>
                  <dd className="text-white/80">{current.exif.aperture}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd className="text-white/80">{current.exif.location}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => setShowSizes(true)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-magenta/60 hover:text-magenta"
              >
                <Ruler className="h-4 w-4" /> View print sizes
              </button>
              <div className="mt-5 flex gap-2 overflow-x-auto">
                {photos.map((photo) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setCurrentId(photo.id)}
                    className={classNames(
                      "relative h-16 w-16 overflow-hidden rounded-xl border",
                      current.id === photo.id ? "border-magenta/80" : "border-white/10"
                    )}
                  >
                    <Image src={photo.src} alt={photo.title} fill sizes="64px" className="object-cover" />
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </div>
        <AnimatePresence>
          {showSizes ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 px-6"
            >
              <div className="glass-panel w-full max-w-md rounded-3xl border border-white/10 p-6 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white">Print sizes</h4>
                  <button
                    type="button"
                    onClick={() => setShowSizes(false)}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white"
                  >
                    Close
                  </button>
                </div>
                <ul className="mt-4 space-y-2">
                  {["12x18 – Edition of 50", "16x24 – Edition of 30", "24x36 – Edition of 15"].map((size) => (
                    <li key={size} className="rounded-2xl border border-white/10 px-4 py-3">
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
