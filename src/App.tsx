/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ClosingCta } from './components/ClosingCta';
import { ContactModal, ResumeModal, ProjectModal, ProjectData } from './components/Modals';
import { DoodleCursorTrail } from './components/DoodleCursorTrail';

export default function App() {
  const [cursorTrailEnabled, setCursorTrailEnabled] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#111111] bg-sketchbook-grid selection:bg-[#F4C542] selection:text-[#111111] overflow-x-hidden relative pb-8">
      {/* Interactive Cursor Rabisco Trail */}
      <DoodleCursorTrail enabled={cursorTrailEnabled} />

      {/* Decorative Floating Notebook Accents (Subtle craft tape & stamps on margins) */}
      <div className="fixed top-1/4 -left-3 w-3 h-16 bg-[#FF6B5F]/40 rounded-r-sm select-none pointer-events-none z-10 hidden xl:block" />
      <div className="fixed top-2/3 -right-3 w-3 h-20 bg-[#F4C542]/40 rounded-l-sm select-none pointer-events-none z-10 hidden xl:block" />

      {/* Main Content Area */}
      <main className="relative z-20">
        {/* Header Hero Section */}
        <HeaderHero
          cursorTrailEnabled={cursorTrailEnabled}
          setCursorTrailEnabled={setCursorTrailEnabled}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 01: Sobre Mim */}
        <AboutSection
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 02: Experiência Profissional */}
        <ExperienceSection />

        {/* Section 03: Competências Técnicas */}
        <SkillsSection />

        {/* Section 04: Projetos Relevantes */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Closing CTA & Footer */}
        <ClosingCta
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
