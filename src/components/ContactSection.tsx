"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { Check, Copy, Download, Mail, MessageSquare, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 dark:border-white/[0.12] bg-gradient-to-b from-white to-slate-50 dark:from-[#0e172a]/90 dark:to-[#090d16] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300 mb-4">
              <MessageSquare className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>Let&apos;s Connect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Ready to Discuss New Opportunities?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
              I am actively interviewing for full-time and high-impact contract engineering roles. Whether you have an open position or want to discuss architecture, my inbox is always open.
            </p>

            {/* Direct Email Pill with Copy Feature */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.12] px-4 py-3 text-sm font-medium text-slate-800 dark:text-white shadow-sm max-w-full">
                <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 inline-flex items-center gap-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}?subject=Interview%20Inquiry%20-%20Full%20Stack%20Role`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all"
              >
                <Send className="h-4 w-4" />
                <span>Send Direct Email</span>
              </a>
            </div>

            {/* Social & Resume Links */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Download className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume (PDF)</span>
              </a>

              <span className="text-slate-300 dark:text-zinc-600">•</span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <span className="text-slate-300 dark:text-zinc-600">•</span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="h-4 w-4 text-slate-500 dark:text-zinc-400" />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
