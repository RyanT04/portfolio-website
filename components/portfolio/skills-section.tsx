"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type SkillCategory = "Languages" | "Frameworks" | "Tools" | "Libraries"

const skillCategories: Record<SkillCategory, { name: string; level: number }[]> = {
  Languages: [
    { name: "Go", level: 90 },
    { name: "TypeScript", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 88 },
    { name: "Java", level: 85 },
    { name: "SQL", level: 82 },
    { name: "C#", level: 75 },
    { name: "Haskell", level: 70 },
  ],
  Frameworks: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "Nest.js", level: 85 },
    { name: "Gin", level: 82 },
    { name: "React Native", level: 78 },
    { name: "Expo Go", level: 75 },
  ],
  Tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 90 },
    { name: "AWS", level: 88 },
    { name: "Azure", level: 80 },
    { name: "Jenkins", level: 78 },
    { name: "Jira", level: 85 },
    { name: "Grafana", level: 82 },
    { name: "Prometheus", level: 80 },
  ],
  Libraries: [
    { name: "TailwindCSS", level: 95 },
    { name: "Shadcn", level: 92 },
    { name: "pandas", level: 85 },
    { name: "NumPy", level: 82 },
    { name: "PyTorch", level: 78 },
    { name: "scikit-learn", level: 80 },
    { name: "Matplotlib", level: 75 },
    { name: "JUnit", level: 82 },
  ],
}

const categoryColors: Record<SkillCategory, string> = {
  Languages: "from-[oklch(0.40_0.18_250)] to-[oklch(0.40_0.18_250)]",
  Frameworks: "from-[oklch(0.55_0.22_25)] to-[oklch(0.55_0.22_25)]",
  Tools: "from-[oklch(0.85_0.18_85)] to-[oklch(0.75_0.15_75)]",
  Libraries: "from-primary to-primary",
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Languages")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="fade-in-section opacity-0 mb-12">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">
            Technical{" "}
            <span className="bg-gradient-to-r from-[oklch(0.85_0.18_85)] to-[oklch(0.55_0.22_25)] bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive toolkit spanning languages, frameworks, cloud infrastructure, and data science libraries.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="fade-in-section opacity-0 flex flex-wrap gap-2 mb-10">
          {(Object.keys(skillCategories) as SkillCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="fade-in-section opacity-0 grid sm:grid-cols-2 gap-4">
          {skillCategories[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="group p-4 rounded-xl glass card-hover"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out",
                    categoryColors[activeCategory]
                  )}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Tags Cloud */}
        <div className="fade-in-section opacity-0 mt-12 pt-8 border-t border-border/30">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">All Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {Object.values(skillCategories)
              .flat()
              .map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 text-sm rounded-full glass text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all cursor-default"
                >
                  {skill.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
