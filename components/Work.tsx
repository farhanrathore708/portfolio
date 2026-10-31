"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectLightbox from "@/components/ProjectLightbox";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32">
      {/* Section header */}
      <div className="mb-10 sm:mb-14 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 sm:mb-3 text-xs font-semibold tracking-[0.25em] text-accent-bright uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Selected Works
          </h2>
        </div>
        <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400 sm:text-right">
          Real work sheets — social media posts, YouTube thumbnails, banners,
          visiting cards, logos, invitation &amp; menu cards, and standee
          design. Click any card to preview all designs in that category.
        </p>
      </div>

      {/* Responsive grid: 1 col mobile → 2 tablet → 3 desktop */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => handleOpenProject(project)}
          />
        ))}
      </div>

      {/* Interactive Lightbox / Modal */}
      <ProjectLightbox
        project={selectedProject}
        currentImageIndex={currentImageIndex}
        onClose={handleClose}
        onNavigate={setCurrentImageIndex}
      />
    </section>
  );
}
