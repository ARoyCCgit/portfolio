"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";
import { ArrowDown, Download, Sparkles, CheckCircle2, MapPin, Mail, Phone } from "lucide-react";

export default function Hero() {
  const { personalInfo, metrics } = portfolioData;

  const corePills = [
    "Node.js & Express",
    "PHP & Laravel",
    "Next.js 15/16 (App Router)",
    "React 19 & TypeScript",
    "GenAI (Gemini Pro & ChatGPT)",
    "Socket.IO & WebSockets",
    "MongoDB & MySQL",
    "Redis Caching",
    "Docker & Git",
  ];

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Two-column layout on md+ screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Bio & Hook (7 cols) */}
          <div className="lg:col-span-7">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-md mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400">Scalable Backends & Real-Time</span> Web Ecosystems.
            </h1>

            {/* Subtitle */}
            <div className="mt-5 space-y-3 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              <p>
                I build scalable backend systems, custom Shopify solutions, APIs, integrations, and e-commerce experiences using PHP, Laravel, Node.js, JavaScript, and modern web technologies.
              </p>
              <p className="text-slate-500 dark:text-zinc-400">
                5+ years of experience turning complex business requirements into reliable, production-ready solutions.
              </p>
            </div>

            {/* Location & Quick Contact Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="text-slate-300 dark:text-zinc-600">•</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                {personalInfo.email}
              </a>
              <span className="text-slate-300 dark:text-zinc-600">•</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <Phone className="h-3.5 w-3.5" />
                {personalInfo.phone}
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition-all"
              >
                <span>Explore Have-it & Projects</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="#recruiter-sheet"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-50 hover:bg-cyan-100/80 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/30 px-5 py-3 text-sm font-semibold text-cyan-700 dark:text-cyan-300 transition-all hover:border-cyan-400/50"
              >
                <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Recruiter Quick View</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/10 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-zinc-200 transition-all shadow-sm"
              >
                <Download className="h-4 w-4 text-slate-500 dark:text-zinc-400" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Core Stack Badges */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2.5">
                Core Production Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {corePills.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-700 dark:text-zinc-300 backdrop-blur-sm shadow-sm"
                  >
                    <CheckCircle2 className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Display Photo & Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-20 dark:opacity-30 blur-xl group-hover:opacity-40 dark:group-hover:opacity-50 transition duration-500"></div>

              {/* Photo Card Container */}
              <div className="relative rounded-3xl border border-slate-200/90 dark:border-white/[0.12] bg-white/90 dark:bg-[#0c1220]/90 p-4 backdrop-blur-md shadow-2xl max-w-sm">
                <div className="relative aspect-[3/4] w-64 sm:w-72 overflow-hidden rounded-2xl bg-[#090d16]">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 640px) 256px, 288px"
                    loading="eager"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle vignette gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60"></div>

                  {/* Overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-[#090d16]/85 p-2.5 backdrop-blur-md">
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>{personalInfo.name}</span>
                      <span className="text-[11px] font-semibold text-emerald-400">Available</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate">
                      Senior Engineer: Web @ Codeclouds
                    </div>
                  </div>
                </div>

                {/* Quick Info Strip beneath photo */}
                <div className="mt-3.5 text-center">
                  <div className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.02] p-2.5">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">5+ Years</div>
                    <div className="text-[10px] text-slate-500 dark:text-zinc-400">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof Metrics Counter Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-8 border-t border-slate-200 dark:border-white/[0.08]">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] p-4 transition-all hover:bg-slate-50 dark:hover:bg-white/[0.04] shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-slate-700 dark:text-zinc-300 mt-0.5">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
