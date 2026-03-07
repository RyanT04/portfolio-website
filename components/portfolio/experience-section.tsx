"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Briefcase, Calendar, ChevronDown, ChevronUp, TrendingUp, BarChart3, Code2 } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Assessly Pte Ltd",
    role: "Growth Engineer (Full-Stack)",
    type: "Full-time",
    period: "Dec 2025 – Feb 2026",
    location: "Singapore",
    icon: Code2,
    color: "from-[oklch(0.40_0.18_250)] to-primary",
    highlights: [
      "Built full-stack features improving AI interview experience, reducing customer churn by 26%",
      "Implemented PostHog analytics infrastructure for comprehensive feature usage tracking",
      "Managed features and bug fixes via Jira, ensuring iterative release cycles",
      "Collaborated with product team to identify and prioritize high-impact improvements",
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostHog", "Node.js"],
  },
  {
    id: 2,
    company: "Trane Aire Sdn Bhd",
    role: "Finance/Business Analyst Trainee",
    type: "Full-time Internship",
    period: "Jul 2025 – Sep 2026",
    location: "Malaysia",
    icon: BarChart3,
    color: "from-[oklch(0.55_0.22_25)] to-[oklch(0.85_0.18_85)]",
    highlights: [
      "Reconcile 8,000+ financial transactions monthly, identifying trends and supporting strategic planning",
      "Clean and integrate multi-department datasets, improving data accuracy by 15%",
      "Budget preparation and variance analysis, identifying potential savings of 5%",
      "Create weekly dashboards for management decision-making",
    ],
    technologies: ["Excel", "Power BI", "SQL", "Python", "Data Analysis"],
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedId, setExpandedId] = useState<number | null>(1)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    section.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="fade-in-section opacity-0 mb-12">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.22_25)] to-[oklch(0.85_0.18_85)] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            From analytical finance roles to full-stack engineering, building measurable impact at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="fade-in-section opacity-0 relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[oklch(0.85_0.18_85)] to-[oklch(0.55_0.22_25)] hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative md:pl-20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 hidden md:flex items-center justify-center">
                  <div className={cn(
                    "w-5 h-5 rounded-full bg-gradient-to-br border-4 border-background",
                    exp.color
                  )} />
                </div>

                {/* Card */}
                <div
                  className={cn(
                    "rounded-2xl glass overflow-hidden transition-all duration-300",
                    expandedId === exp.id ? "ring-1 ring-primary/30" : ""
                  )}
                >
                  {/* Card Header */}
                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="w-full p-6 flex items-start gap-4 text-left hover:bg-secondary/30 transition-colors"
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br",
                      exp.color
                    )}>
                      <exp.icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline-block px-3 py-1 rounded-full glass text-xs text-muted-foreground">
                            {exp.type}
                          </span>
                          {expandedId === exp.id ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedId === exp.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-border/30">
                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <TrendingUp className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-primary/10 text-xs text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
