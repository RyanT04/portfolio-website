"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Mail, Phone, Send, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from "@formspree/react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@ryantang.dev",
    href: "mailto:contact@ryantang.dev",
    color: "group-hover:text-[oklch(0.55_0.22_25)]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Almost leaked again",
    href: "#",
    color: "group-hover:text-[oklch(0.85_0.18_85)]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ryankwangloketang",
    href: "https://www.linkedin.com/in/ryankwangloketang/",
    color: "group-hover:text-[oklch(0.40_0.18_250)]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "RyanT04",
    href: "https://github.com/RyanT04",
    color: "group-hover:text-primary",
  },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [state, handleSubmit] = useForm("xnjojygn")

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
    <section id="contact" ref={sectionRef} className="py-24 px-6 relative">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="fade-in-section opacity-0 mb-12 text-center">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">
            {"Let's "}
            <span className="bg-gradient-to-r from-[oklch(0.40_0.18_250)] via-[oklch(0.55_0.22_25)] to-[oklch(0.85_0.18_85)] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {"Have a project in mind or want to collaborate? I'm always open to discussing new opportunities."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="fade-in-section opacity-0">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Get in Touch</h3>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.href === "#" ? (e) => e.preventDefault() : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <link.icon className={cn("h-5 w-5 text-muted-foreground transition-colors", link.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-medium text-foreground truncate">{link.value}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-8 p-6 rounded-2xl glass">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Based in</span>
              </div>
              <p className="text-muted-foreground">
                United Kingdom <span className="text-foreground">/</span> Malaysia <span className="text-foreground">/</span> Brunei 
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-section opacity-0" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Send a Message</h3>

            {state.succeeded ? (
              <div className="p-8 rounded-2xl glass text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">{"Thank you for reaching out. I'll get back to you soon."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me anything!"
                    rows={5}
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 bg-primary hover:bg-primary/80"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}