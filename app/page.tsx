"use client"

import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Navigation } from "@/components/portfolio/navigation"
import { FloatingElements } from "@/components/portfolio/floating-elements"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 batik-pattern pointer-events-none" />
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/30 py-8 text-center text-muted-foreground">
        <p className="text-sm">© 2026 Ryan Tang Kwang Loke. All rights reserved.</p>
      </footer>
    </div>
  )
}
