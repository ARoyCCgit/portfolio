import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterSheet from "@/components/RecruiterSheet";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#090d16] text-slate-100 font-sans">
      {/* Background ambient lighting */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero />
        <RecruiterSheet />
        <ProjectShowcase />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
