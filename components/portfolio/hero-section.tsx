"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    section
      .querySelectorAll(".fade-in-section")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/RyanT04", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ryankwangloketang/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:contact@ryantang.dev", label: "Email" },
    { icon: Phone, href: "tel:+44 7376411777", label: "Phone" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[oklch(0.40_0.18_250)] rounded-full blur-[120px] opacity-20 animate-pulse-glow" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[oklch(0.55_0.22_25)] rounded-full blur-[150px] opacity-15 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[oklch(0.85_0.18_85)] rounded-full blur-[100px] opacity-10 animate-pulse-glow"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Pre-title */}
        <div
          className="fade-in-section opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="inline-block px-4 py-2 mr-3 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
            Software Engineer
          </span>

          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-6">
            Growth Engineer
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="fade-in-section opacity-0 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="block">Ryan Tang</span>
          <span className="block bg-linear-to-r from-[oklch(0.40_0.18_250)] via-[oklch(0.55_0.22_25)] to-[oklch(0.85_0.18_85)] bg-clip-text text-transparent animate-gradient pb-3">
            Kwang Loke
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="fade-in-section opacity-0 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty"
          style={{ animationDelay: "0.6s" }}
        >
          I'm passionate about creating modern,
          efficient and scalable solutions that that solves real-world problems
          and deliver meaningful value.
        </p>

        {/* Social Links */}
        <div
          className="fade-in-section opacity-0 flex justify-center gap-4 mb-12"
          style={{ animationDelay: "0.8s" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl glass hover:bg-primary/20 transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="fade-in-section opacity-0 flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "1s" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-8"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary/50 px-8"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="fade-in-section opacity-0 absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ animationDelay: "1.2s" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
