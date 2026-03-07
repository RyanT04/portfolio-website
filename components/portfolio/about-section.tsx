"use client"

import { useEffect, useRef } from "react"
import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Mastery across multiple programming paradigms and modern tech stacks",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "Building AI-powered solutions and cutting-edge applications",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description: "Optimizing systems for speed, reliability, and scalability",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Thriving in cross-functional teams and agile environments",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="about" ref={sectionRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="fade-in-section opacity-0 mb-16">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-6 text-balance">
            Technical. Innovative.{" "}
            <span className="bg-gradient-to-r from-[oklch(0.40_0.18_250)] to-[oklch(0.85_0.18_85)] bg-clip-text text-transparent">
              Versatile.
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="fade-in-section opacity-0 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "I'm a software engineer pursuing a BEng in Software Engineering at the University of Southampton, driven by a passion for building impactful digital solutions."
              }
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My approach combines rigorous technical standards with creative
              problem-solving. From architecting high-performance trading
              simulators to developing AI-driven interview platforms, I focus on
              delivering measurable results.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "Outside university, I have gained international experience, working as an intern in Brunei and London, collaborating with teams from diverse cultural backgrounds. This has strengthened my ability to work effectively in multicultural environments, beyond just coding."
              }
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">8+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">26%</div>
                <div className="text-sm text-muted-foreground">
                  Churn Reduced
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">75%</div>
                <div className="text-sm text-muted-foreground">Latency Cut</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            className="fade-in-section opacity-0 grid grid-cols-2 gap-4"
            style={{ animationDelay: "0.2s" }}
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl glass card-hover"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
