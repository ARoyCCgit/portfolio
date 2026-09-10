"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070a12] py-8 text-xs text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-zinc-400 mt-0.5">
            Engineered with Next.js 16 (App Router), React 19, TypeScript & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
