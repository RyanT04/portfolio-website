"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationSection() {
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

  const courses = [
    "Software Engineering Principles",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Cloud Computing",
    "Machine Learning",
    "Formal Methods",
    "Agile Projects",
  ]

  return (
    <section id="education" ref={sectionRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="fade-in-section opacity-0 mb-12">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Education</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">
            Academic{" "}
            <span className="bg-gradient-to-r from-[oklch(0.40_0.18_250)] to-primary bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="fade-in-section opacity-0">
          <div className="relative p-8 rounded-3xl glass card-hover overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[oklch(0.40_0.18_250)] to-transparent opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              {/* University Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">University of Southampton</h3>
                    <p className="text-lg text-muted-foreground mt-1">BEng Software Engineering</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Sep 2023 – Jun 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Southampton, UK</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                {"Pursuing a rigorous Software Engineering degree with focus on practical application of computer science principles, algorithms and data structures, software development methodologies, and emerging technologies. Active participant in hackathons and coding competitions."}
              </p>

              {/* Key Courses */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="px-4 py-2 rounded-xl glass text-sm text-foreground hover:bg-primary/20 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Marker */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-primary to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
