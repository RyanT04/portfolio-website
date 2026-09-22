"use client"

import { useEffect, useRef } from "react"
import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Working across multiple languages and modern stacks, from Go backends to Next.js frontends",
  },
  {
    icon: Lightbulb,
    title: "AI-Fluent",
    description: "Using AI tools deliberately to accelerate prototyping while maintaining test coverage and code review discipline",
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
            Practical.{" "}
            <span className="bg-gradient-to-r from-[oklch(0.40_0.18_250)] to-[oklch(0.85_0.18_85)] bg-clip-text text-transparent">
              Adaptable. AI-Fluent.
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="fade-in-section opacity-0 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "I'm a graduate software engineer driven by a passion for building impactful digital solutions."
              }
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My approach combines rigorous technical standards with creative
              problem-solving. From architecting high-performance trading
              simulators to improving AI-driven interview platforms, I focus on
              delivering measurable results. On TradeX and TradeGo, my paired
              Next.js and Go trading simulators, I used AI tools to scaffold
              boilerplate and speed up prototyping, then reviewed and
              refactored every piece myself to keep test coverage and code
              quality intact. TradeGo originally ran on AWS ECS Fargate before
              I migrated it to a self-hosted DigitalOcean droplet to cut
              running costs.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "I've also gained international experience interning in Brunei and London (remote), collaborating with teams from diverse cultural and professional backgrounds, which has shaped how I communicate in multicultural, cross-functional teams."
              }
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">Full-Stack Apps Shipped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">400+</div>
                <div className="text-sm text-muted-foreground">Live Instruments Tracked</div>
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