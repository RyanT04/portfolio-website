"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Github, ExternalLink, Zap, Database, Server, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Cryptocurrency Trading Simulator",
    description: "Full-stack trading simulator with high-performance order matching engine. Features real-time market data, portfolio management, and comprehensive performance profiling.",
    period: "Sep 2025 – May 2026",
    icon: Zap,
    color: "from-[oklch(0.85_0.18_85)] to-[oklch(0.75_0.15_75)]",
    technologies: ["Vite", "Express.js", "Go", "PostgreSQL", "AWS CDK"],
    highlights: [
      { metric: "60-75%", label: "Latency Reduction" },
      { metric: "Go", label: "Order Matching Engine" },
      { metric: "ECS", label: "Fargate Deployment" },
    ],
    features: [
      "Go order-matching engine achieving 60–75% latency reduction",
      "Unified monorepo architecture with ECS Fargate deployment",
      "PostgreSQL optimization and structured logging",
      "Cloud infrastructure provisioning via AWS CDK",
      "Real-time profiling of latency and CPU bottlenecks",
    ],
    links: {
      github: "https://github.com/ryantang/crypto-simulator",
      live: null,
    },
  },
  {
    id: 2,
    title: "Java Query Optimiser for SJDB",
    description: "Cost-based query optimizer implementing relational algebra cost estimation. Uses the Visitor pattern for traversing operator trees and finding optimal execution plans.",
    period: "Feb 2026 – Present",
    icon: Database,
    color: "from-[oklch(0.40_0.18_250)] to-primary",
    technologies: ["Java", "Visitor Pattern", "Relational Algebra"],
    highlights: [
      { metric: "Cost-based", label: "Query Estimation" },
      { metric: "Left-deep", label: "Join Optimizer" },
      { metric: "Immutable", label: "Operator Trees" },
    ],
    features: [
      "Cost-based query estimator using Visitor pattern",
      "Relational algebra cost estimation for SELECT, PROJECT, JOIN",
      "Left-deep join optimizer for lower-cost execution trees",
      "Immutable operator trees with correctness validation",
      "Comprehensive test suite for query optimization",
    ],
    links: {
      github: "https://github.com/ryantang/sjdb-optimizer",
      live: null,
    },
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
    <section id="projects" ref={sectionRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="fade-in-section opacity-0 mb-12">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Projects</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">
            Featured{" "}
            <span className="bg-gradient-to-r from-[oklch(0.85_0.18_85)] to-[oklch(0.40_0.18_250)] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Showcasing projects that demonstrate technical depth, performance optimization, and real-world impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="fade-in-section opacity-0 grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-3xl glass overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient Background on Hover */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
                  project.color,
                  hoveredId === project.id && "opacity-5"
                )}
              />

              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br",
                        project.color
                      )}
                    >
                      <project.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.links.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="hidden sm:inline">Source</span>
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span className="hidden sm:inline">Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.highlights.map((highlight) => (
                    <div key={highlight.label} className="text-center p-4 rounded-xl bg-secondary/30">
                      <div className="text-xl font-bold text-foreground">{highlight.metric}</div>
                      <div className="text-xs text-muted-foreground mt-1">{highlight.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Server className="h-3.5 w-3.5 text-primary mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg glass text-sm text-foreground hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Note */}
        <div className="fade-in-section opacity-0 mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            More projects available on GitHub
          </p>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/RyanT04" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
