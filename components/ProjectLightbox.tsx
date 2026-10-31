"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectLightboxProps {
  project: Project | null;
  currentImageIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ProjectLightbox({
  project,
  currentImageIndex,
  onClose,
  onNavigate,
}: ProjectLightboxProps) {
  const isOpen = project !== null;
  const images = project ? (project.images?.length ? project.images : [project.imageUrl]) : [];
  const totalImages = images.length;
  const currentImage = images[currentImageIndex] ?? images[0] ?? "";

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || totalImages === 0) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((currentImageIndex + 1) % totalImages);
      if (e.key === "ArrowLeft") onNavigate((currentImageIndex - 1 + totalImages) % totalImages);
    },
    [isOpen, currentImageIndex, totalImages, onClose, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleKeyDown]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || totalImages <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold of 45px
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        // Swiped left -> Next image in this card
        onNavigate((currentImageIndex + 1) % totalImages);
      } else {
        // Swiped right -> Previous image in this card
        onNavigate((currentImageIndex - 1 + totalImages) % totalImages);
      }
    }
    setTouchStartX(null);
  };

  const whatsappUrl = project
    ? `https://wa.me/923705519039?text=${encodeURIComponent(
        `Hi Farhan, I saw your "${project.title}" (Design ${currentImageIndex + 1} of ${totalImages}) on your portfolio and would like to discuss a project!`
      )}`
    : "";

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-label="Close modal overlay"
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />

          {/* Modal content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl shadow-black/80"
          >
            {/* Top header bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 px-3 py-2.5 sm:px-6 sm:py-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-accent-bright">
                  {project.category}
                </span>
                <span className="text-xs font-medium text-slate-300">
                  {project.title}
                </span>
                <span className="rounded-md bg-slate-800/80 px-2 py-0.5 text-xs font-semibold text-slate-400">
                  {currentImageIndex + 1} / {totalImages}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close preview"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-accent-bright"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image preview area with prev/next buttons (cycling within this card only) */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-950/70 p-2 sm:p-6 select-none"
            >
              {/* Prev button — only if card has multiple images */}
              {totalImages > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    onNavigate((currentImageIndex - 1 + totalImages) % totalImages)
                  }
                  aria-label="Previous design in this category"
                  className="absolute left-2 sm:left-4 z-20 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/85 text-slate-200 backdrop-blur-sm transition-all hover:scale-105 hover:border-accent-bright hover:bg-slate-800 hover:text-white hover:shadow-[0_0_20px_-3px_rgba(129,140,248,0.5)] focus-visible:outline-2 focus-visible:outline-accent-bright"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              )}

              {/* Current Project Image */}
              <div className="flex max-h-[58vh] sm:max-h-[66vh] w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={currentImage}
                  src={currentImage}
                  alt={`${project.title} - design ${currentImageIndex + 1}`}
                  className="max-h-[56vh] sm:max-h-[64vh] w-auto max-w-full rounded-lg object-contain shadow-2xl transition-transform duration-300"
                />
              </div>

              {/* Next button — only if card has multiple images */}
              {totalImages > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    onNavigate((currentImageIndex + 1) % totalImages)
                  }
                  aria-label="Next design in this category"
                  className="absolute right-2 sm:right-4 z-20 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/85 text-slate-200 backdrop-blur-sm transition-all hover:scale-105 hover:border-accent-bright hover:bg-slate-800 hover:text-white hover:shadow-[0_0_20px_-3px_rgba(129,140,248,0.5)] focus-visible:outline-2 focus-visible:outline-accent-bright"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              )}
            </div>

            {/* Bottom details & action bar */}
            <div className="flex flex-col gap-2.5 border-t border-slate-800/80 bg-slate-900 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-3.5">
              <div>
                <h3 className="text-base font-bold text-slate-100 sm:text-lg">
                  {project.title}{" "}
                  <span className="text-xs font-normal text-slate-400">
                    (Design {currentImageIndex + 1} of {totalImages})
                  </span>
                </h3>
                <p className="hidden text-xs text-slate-400 sm:block">
                  Next/Prev shows more designs from this card. Use <kbd className="rounded border border-slate-700 bg-slate-800 px-1 py-0.5 text-[10px]">←</kbd> and <kbd className="rounded border border-slate-700 bg-slate-800 px-1 py-0.5 text-[10px]">→</kbd> keys, <kbd className="rounded border border-slate-700 bg-slate-800 px-1 py-0.5 text-[10px]">ESC</kbd> to close.
                </p>
                <p className="text-[11px] text-slate-400 sm:hidden">
                  Swipe left or right to see all designs in this card
                </p>
              </div>

              <div className="flex items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 sm:h-10 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-neon px-4 sm:px-5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:shadow-indigo-500/40 focus-visible:outline-2 focus-visible:outline-accent-bright"
                >
                  <MessageCircle size={15} />
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
