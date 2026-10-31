"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectLightbox from "@/components/ProjectLightbox";

export default function Work() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 pt-24 pb-32">
      {/* Section header */}
      <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-accent-bright uppercase">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Selected Works
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate-400 sm:text-right">
          Real work sheets — social media posts, YouTube thumbnails, banners,
          visiting cards, logos, invitation &amp; menu cards, and standee
          design. Click any card to preview full size.
        </p>
      </div>

      {/* Responsive grid: 1 col mobile → 2 tablet → 3 desktop */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Interactive Lightbox / Modal */}
      <ProjectLightbox
        projects={projects}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={setSelectedIndex}
      />
    </section>
  );
}
