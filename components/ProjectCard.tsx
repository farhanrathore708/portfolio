"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  onOpen?: () => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative block w-full cursor-pointer text-left overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 transition-all duration-300 hover:border-accent/50 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-accent-bright"
    >
      {/* Image — zooms subtly on hover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {project.imageUrl.startsWith("http") ? (
          // Standard img tag for external URLs to prevent Next.js image domain errors
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {/* Gradient overlay — ALWAYS visible on mobile, fades in on desktop hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-100" />

        {/* Caption — ALWAYS visible on mobile, slides up on desktop hover */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6 translate-y-0 opacity-100 sm:translate-y-5 sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-accent-bright uppercase truncate">
              {project.category}
            </p>
            <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-100 line-clamp-1 sm:line-clamp-none">
              {project.title}
            </h3>
          </div>
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 sm:bg-transparent text-slate-200 backdrop-blur-xs transition-colors duration-300 group-hover:border-accent-bright group-hover:bg-accent/20">
            <ArrowUpRight className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
