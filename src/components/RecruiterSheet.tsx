"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  Globe,
  Mail,
  ShieldCheck,
  Sparkles,
  Check
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function RecruiterSheet() {
  const { personalInfo, recruiterQuickSheet } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="recruiter-sheet" className="py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Recruiter Fast-Track Summary</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Candidate Snapshot for Hiring Managers & Recruiters
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Designed for quick 30-second candidate-job alignment. All key qualifications, availability, and contact links in one place.
          </p>
        </div>

        {/* Quick Sheet Card */}
        <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#0e172a] to-[#090d16] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Left 2 Cols: Vetting Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Target Roles */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
                  Target Roles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recruiterQuickSheet.targetRoles.map((role) => (
                    <span
                      key={role}
                      className="rounded-lg bg-cyan-950/60 border border-cyan-500/30 px-3 py-1.5 text-xs font-semibold text-cyan-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid of Key Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5">
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5 mb-1">
                    <Globe className="h-3.5 w-3.5 text-blue-400" />
                    Work Authorization & Mode
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {recruiterQuickSheet.preferredWorkType}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">{personalInfo.location}</div>
                </div>

                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5">
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5 mb-1">
                    <Clock className="h-3.5 w-3.5 text-emerald-400" />
                    Notice Period / Availability
                  </div>
                  <div className="text-sm font-semibold text-emerald-400">
                    {recruiterQuickSheet.noticePeriod}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Ready for technical interviews</div>
                </div>
              </div>

              {/* Core Differentiators */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Why Shortlist Me (Key Differentiators)
                </h3>
                <ul className="space-y-2">
                  {recruiterQuickSheet.coreStrengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Direct Fast Actions */}
            <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div>
                <div className="text-base font-bold text-white mb-1">Direct Interview Routing</div>
                <p className="text-xs text-zinc-400 mb-6">
                  Skip ATS delays. Contact directly to review portfolio code or schedule a technical screen.
                </p>

                <div className="space-y-3">
                  {/* Copy Email Button */}
                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-between gap-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 px-4 py-3 text-xs font-semibold text-white transition-all group"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="truncate">{personalInfo.email}</span>
                    </div>
                    <span className="shrink-0 flex items-center gap-1 text-[11px] text-cyan-300">
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                          <span>Copy</span>
                        </>
                      )}
                    </span>
                  </button>

                  {/* Resume Download */}
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Official Resume (PDF)</span>
                  </a>

                  {/* LinkedIn Connect */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-white transition-all"
                  >
                    <LinkedinIcon className="h-4 w-4 text-blue-400" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-center">
                <span className="text-[11px] text-zinc-400">
                  Status: <strong className="text-emerald-400">Actively Interviewing</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
