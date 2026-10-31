"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative block overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 transition-colors duration-300 hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-accent-bright"
    >
      {/* Image — zooms subtly on hover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay — fades in on hover to reveal the caption */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Caption — slides up from the bottom */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-5 items-end justify-between gap-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div>
            <p className="text-xs font-medium tracking-widest text-accent-bright uppercase">
              {project.category}
            </p>
            <h3 className="mt-1.5 text-lg font-semibold text-slate-100">
              {project.title}
            </h3>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-600 text-slate-200 transition-colors duration-300 group-hover:border-accent-bright group-hover:bg-accent/20">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
