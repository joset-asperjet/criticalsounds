'use client'

import React, { useRef, useEffect } from 'react'

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }

    window.addEventListener('resize', handleResize)

    // Mouse position state relative to canvas
    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 140,
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const container = canvas.parentElement
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    // Particle Object
    class Particle {
      x: number
      y: number
      originX: number
      originY: number
      vx: number
      vy: number
      size: number
      color: string
      baseAlpha: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originX = x
        this.originY = y
        this.vx = 0
        this.vy = 0
        this.size = Math.random() * 2.5 + 1.2
        const colors = ['#0d0d0e', '#333333', '#555555', '#777777', '#111111']
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.baseAlpha = Math.random() * 0.4 + 0.3
      }

      update() {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.hypot(dx, dy)

        if (distance < mouse.radius && distance > 0) {
          const force = (mouse.radius - distance) / mouse.radius
          const angle = Math.atan2(dy, dx)
          const pushX = Math.cos(angle) * force * 12
          const pushY = Math.sin(angle) * force * 12

          this.vx -= pushX
          this.vy -= pushY
        }

        // Spring force back to origin
        const springX = (this.originX - this.x) * 0.06
        const springY = (this.originY - this.y) * 0.06

        this.vx += springX
        this.vy += springY

        // Friction / Damping
        this.vx *= 0.85
        this.vy *= 0.85

        this.x += this.vx
        this.y += this.vy
      }

      draw(context: CanvasRenderingContext2D) {
        context.save()
        context.globalAlpha = this.baseAlpha
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
        context.restore()
      }
    }

    // Generate grid of particles
    const particles: Particle[] = []
    const spacing = 22

    const initParticles = () => {
      particles.length = 0
      const cols = Math.floor(width / spacing)
      const rows = Math.floor(height / spacing)
      const startX = (width - cols * spacing) / 2
      const startY = (height - rows * spacing) / 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = startX + i * spacing + (Math.random() * 4 - 2)
          const y = startY + j * spacing + (Math.random() * 4 - 2)
          particles.push(new Particle(x, y))
        }
      }
    }

    initParticles()

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(ctx)

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)

          if (dist < 40) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 40) * 0.15
            ctx.strokeStyle = '#0d0d0e'
            ctx.lineWidth = 0.75
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
