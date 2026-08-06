"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const selectedProject =
    selectedSlug === null
      ? null
      : projects.find((project) => project.slug === selectedSlug) ?? null;

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSlug(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.12),transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  0{index + 1} · {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-cyan-200/80">
                  {project.subtitle}
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                {project.year}
              </span>
            </div>

            <p className="relative mt-5 max-w-xl text-sm leading-7 text-slate-300">
              {project.summary}
            </p>

            <div className="relative mt-6 grid gap-2 sm:grid-cols-2">
              {project.features.slice(0, 4).map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="relative mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSelectedSlug(project.slug)}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                View Case Study
              </button>
              <a
                href={project.github}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedSlug(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[36px] border border-white/10 bg-[#07111f] p-6 shadow-soft md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                  {selectedProject.category}
                </p>
                <h3
                  id="project-title"
                  className="mt-3 text-3xl font-semibold text-white md:text-5xl"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                  {selectedProject.summary}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setSelectedSlug(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                ×
              </button>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Overview
                  </p>
                  <p className="mt-3 leading-8 text-slate-200">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                      Problem
                    </p>
                    <p className="mt-3 leading-7 text-slate-300">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                      Solution
                    </p>
                    <p className="mt-3 leading-7 text-slate-300">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Architecture
                  </p>
                  <p className="mt-3 leading-7 text-slate-300">
                    {selectedProject.architecture}
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Challenges
                  </p>
                  <p className="mt-3 leading-7 text-slate-300">
                    {selectedProject.challenges}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Tech Stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Features
                  </p>
                  <ul className="mt-4 space-y-3 text-slate-200">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.7)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Gallery
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {selectedProject.gallery.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={selectedProject.liveDemo}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  <a
                    href={selectedProject.caseStudy}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/15"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
