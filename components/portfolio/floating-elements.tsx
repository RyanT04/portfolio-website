"use client"

import { useEffect, useRef } from "react"

export function FloatingElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Particle system
    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      angle: number
      rotationSpeed: number
    }

    const particles: Particle[] = []
    const colors = [
      "rgba(11, 61, 145, 0.4)",  // Malaysia Blue
      "rgba(227, 11, 23, 0.3)",   // Malaysia Red
      "rgba(255, 209, 0, 0.35)",  // Malaysia Yellow
    ]

    // Create particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      })
    }

    // Draw diamond shape (inspired by batik patterns)
    const drawDiamond = (x: number, y: number, size: number, angle: number, color: string) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.lineTo(size, 0)
      ctx.lineTo(0, size)
      ctx.lineTo(-size, 0)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.angle += particle.rotationSpeed

        // Wrap around edges
        if (particle.x < -20) particle.x = canvas.width + 20
        if (particle.x > canvas.width + 20) particle.x = -20
        if (particle.y < -20) particle.y = canvas.height + 20
        if (particle.y > canvas.height + 20) particle.y = -20

        // Draw particle
        drawDiamond(particle.x, particle.y, particle.size, particle.angle, particle.color)
      })

      // Draw connecting lines for nearby particles
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
      ctx.lineWidth = 1
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
