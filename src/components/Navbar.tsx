"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";
import { FileDown, Menu, X, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo } = portfolioData;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#090d16]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-blue-500/40 ring-2 ring-blue-500/20 group-hover:scale-105 transition-transform">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              fill
              sizes="36px"
              loading="eager"
              priority
              className="object-cover object-top"
            />
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>{personalInfo.name}</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">
              Senior Full-Stack & Backend Engineer
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Featured Projects
          </a>
          <a
            href="#recruiter-sheet"
            className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Recruiter Fast-Track</span>
          </a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 px-3.5 py-1.5 text-xs font-semibold text-blue-300 transition-all border border-blue-500/30 hover:border-blue-400/50 shadow-sm"
          >
            <FileDown className="h-3.5 w-3.5 text-blue-400" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-blue-600/20 px-2.5 py-1 text-xs font-medium text-blue-300 border border-blue-500/30"
          >
            <FileDown className="h-3 w-3 text-blue-400" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#0c1220] px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-300">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Featured Projects
            </a>
            <a
              href="#recruiter-sheet"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-cyan-400 font-semibold flex items-center gap-1.5"
            >
              <Sparkles className="h-4 w-4" />
              Recruiter Fast-Track
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Skills & Stack
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Contact Arnab
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
