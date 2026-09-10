"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { Cpu, Layout, Server, Terminal } from "lucide-react";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons = [
    <Layout key="fe" className="h-4 w-4 text-cyan-400" />,
    <Server key="be" className="h-4 w-4 text-blue-400" />,
    <Terminal key="ops" className="h-4 w-4 text-violet-400" />,
  ];

  return (
    <section id="skills" className="py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300 mb-3">
            <Cpu className="h-3.5 w-3.5 text-violet-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Skills & Architectural Proficiencies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            A comprehensive overview of the programming languages, frameworks, cloud tooling, and engineering practices I use in production.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/[0.08] bg-[#0c1220]/80 p-6 backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-[#0e1628]"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08]">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-5">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-white/[0.05] px-3.5 py-2.5 hover:bg-white/[0.05] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
