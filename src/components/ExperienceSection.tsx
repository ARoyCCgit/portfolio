"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-3">
            <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Work Experience & Track Record
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            A proven record of delivering mission-critical web software, collaborating with cross-functional product teams, and mentoring engineers.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/[0.08] ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-blue-500 bg-[#090d16] group-hover:bg-blue-500 transition-colors"></div>

              {/* Card Container */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c1220]/80 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-white/[0.15]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {exp.highlights.map((point, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
