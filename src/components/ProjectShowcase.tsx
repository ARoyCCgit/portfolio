"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import {
  ArrowUpRight,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { projects } = portfolioData;

  const categories = ["All", "Full-Stack", "Backend", "Cloud & Microservices", "Integrations"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory as any)
            : p.category === activeCategory
        );

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-3">
              <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>Real-Time Systems & Enterprise Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Case Studies & Applications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Production architectures showcasing microservices, event-driven WebSockets, payment gateways, and enterprise integrations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/[0.05]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isFlagship = project.id === "have-it-super-app";
            return (
              <div
                key={project.id}
                className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                  isFlagship
                    ? "border border-blue-400/50 dark:border-blue-500/40 bg-gradient-to-b from-blue-50/60 to-white dark:from-[#0d1b33] dark:to-[#0c1220] shadow-xl shadow-blue-500/10 hover:border-blue-500/70 hover:shadow-blue-500/20"
                    : "border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0c1220]/80 hover:border-slate-300 dark:hover:border-white/[0.18] shadow-md hover:shadow-xl"
                }`}
              >
                {/* Top Row: Category + Featured Tag */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {Array.isArray(project.category) ? (
                        project.category.map((cat) => (
                          <span
                            key={cat}
                            className="rounded-md bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-zinc-300"
                          >
                            {cat}
                          </span>
                        ))
                      ) : (
                        <span className="rounded-md bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-zinc-300">
                          {project.category}
                        </span>
                      )}
                      {project.statusBadge && (
                        <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold border ${
                          project.statusBadge === "Live Production App"
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
                            : "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20"
                        }`}>
                          {project.statusBadge}
                        </span>
                      )}
                    </div>

                    {isFlagship ? (
                      <span className="flex items-center gap-1 rounded-md bg-blue-500/10 dark:bg-blue-500/20 border border-blue-400/40 px-2.5 py-0.5 text-[11px] font-bold text-blue-700 dark:text-cyan-300 shadow-sm">
                        <Sparkles className="h-3 w-3 text-blue-600 dark:text-cyan-400" />
                        Flagship Project
                      </span>
                    ) : project.featured ? (
                      <span className="flex items-center gap-1 rounded-md bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[11px] font-medium text-amber-700 dark:text-amber-300">
                        <Sparkles className="h-3 w-3 text-amber-500 dark:text-amber-400" />
                        Featured
                      </span>
                    ) : null}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-400">
                    {project.tagline}
                  </p>

                  {/* Recruiter-Friendly Impact Badge */}
                  <div className="mt-4 rounded-xl border border-emerald-500/30 dark:border-emerald-500/25 bg-emerald-50 dark:bg-emerald-500/10 p-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                      <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{project.impactMetric}</span>
                    </div>
                    <p className="mt-1 text-xs text-emerald-800/80 dark:text-emerald-200/80 leading-snug">
                      {project.impactLabel}
                    </p>
                  </div>

                  {/* Problem & Solution Breakdown */}
                  <div className="mt-5 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <div className="rounded-lg bg-slate-50 dark:bg-white/[0.02] p-3 border border-slate-200/70 dark:border-white/[0.04]">
                      <span className="font-semibold text-slate-800 dark:text-zinc-200 text-xs uppercase tracking-wider block mb-1">
                        The Problem:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-lg bg-slate-50 dark:bg-white/[0.02] p-3 border border-slate-200/70 dark:border-white/[0.04]">
                      <span className="font-semibold text-slate-800 dark:text-zinc-200 text-xs uppercase tracking-wider block mb-1">
                        Engineering Solution:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions: Live Demo + Source Code */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between gap-3">
                  {isFlagship ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-4 py-2 rounded-lg transition-all shadow-md shadow-emerald-500/20"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <span>Launch Live App</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/20"
                    >
                      <span>Live Demo / Spec</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">
                      Architecture & API Ready
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.08] px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
