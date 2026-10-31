"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectLightboxProps {
  projects: Project[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ProjectLightbox({
  projects,
  currentIndex,
  onClose,
  onNavigate,
}: ProjectLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < projects.length;
  const project = isOpen ? projects[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % projects.length);
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + projects.length) % projects.length);
    },
    [isOpen, currentIndex, projects.length, onClose, onNavigate]
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

  if (!isOpen || !project) return null;

  const currentNum = (currentIndex ?? 0) + 1;
  const totalNum = projects.length;
  const whatsappUrl = `https://wa.me/923705519039?text=${encodeURIComponent(
    `Hi Farhan, I saw your "${project.title}" (${project.category}) work on your portfolio and would like to discuss a project!`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
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
          className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl shadow-black/80"
        >
          {/* Top header bar */}
          <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-bright">
                {project.category}
              </span>
              <span className="text-xs font-medium text-slate-400">
                {currentNum} of {totalNum}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-accent-bright"
            >
              <X size={18} />
            </button>
          </div>

          {/* Image preview area with prev/next buttons */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-950/60 p-2 sm:p-6">
            {/* Prev button */}
            <button
              type="button"
              onClick={() => onNavigate((currentIndex - 1 + projects.length) % projects.length)}
              aria-label="Previous project"
              className="absolute left-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-200 backdrop-blur-sm transition-all hover:scale-105 hover:border-accent-bright hover:bg-slate-800 hover:text-white hover:shadow-[0_0_20px_-3px_rgba(129,140,248,0.5)] focus-visible:outline-2 focus-visible:outline-accent-bright"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Project Image */}
            <div className="flex max-h-[66vh] w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={project.imageUrl}
                src={project.imageUrl}
                alt={project.title}
                className="max-h-[64vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            {/* Next button */}
            <button
              type="button"
              onClick={() => onNavigate((currentIndex + 1) % projects.length)}
              aria-label="Next project"
              className="absolute right-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-200 backdrop-blur-sm transition-all hover:scale-105 hover:border-accent-bright hover:bg-slate-800 hover:text-white hover:shadow-[0_0_20px_-3px_rgba(129,140,248,0.5)] focus-visible:outline-2 focus-visible:outline-accent-bright"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Bottom details & action bar */}
          <div className="flex flex-col gap-3 border-t border-slate-800/80 bg-slate-900 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h3 className="text-lg font-bold text-slate-100 sm:text-xl">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400">
                Use <kbd className="rounded border border-slate-700 bg-slate-800 px-1 py-0.5 text-[10px]">←</kbd> and <kbd className="rounded border border-slate-700 bg-slate-800 px-1 py-0.5 text-[10px]">→</kbd> keys to navigate, <kbd className="rounded border border-slate-700 bg-slate-800 px-1 py-0.5 text-[10px]">ESC</kbd> to close.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-neon px-5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:shadow-indigo-500/40 focus-visible:outline-2 focus-visible:outline-accent-bright"
              >
                <MessageCircle size={15} />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
