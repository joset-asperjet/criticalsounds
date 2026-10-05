'use client'

import React, { useRef, useEffect } from 'react'

interface PixelCardTrailProps {
  color: string
}

interface PixelBlock {
  x: number
  y: number
  size: number
  life: number
  color: string
}

export function PixelCardTrail({ color }: PixelCardTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<PixelBlock[]>([])
  const animIdRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      if (!container || !canvas) return
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    handleResize()
    const observer = new ResizeObserver(handleResize)
    observer.observe(container)

    const targetElement = container.parentElement || container

    const addPixelAt = (x: number, y: number) => {
      const grid = 3
      const snappedX = Math.floor(x / grid) * grid
      const snappedY = Math.floor(y / grid) * grid

      const count = Math.floor(Math.random() * 2) + 1
      for (let i = 0; i < count; i++) {
        const offsetGridX = (Math.floor(Math.random() * 3) - 1) * grid
        const offsetGridY = (Math.floor(Math.random() * 3) - 1) * grid
        const pixelSize = grid

        particlesRef.current.push({
          x: snappedX + offsetGridX,
          y: snappedY + offsetGridY,
          size: pixelSize,
          life: 1.0,
          color: color,
        })
      }
    }

    const render = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const particles = particlesRef.current

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life -= 0.055

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.fillStyle = p.color
        ctx.globalAlpha = p.life * 0.2
        ctx.fillRect(p.x, p.y, p.size, p.size)
      }

      ctx.globalAlpha = 1.0

      if (particles.length > 0) {
        animIdRef.current = requestAnimationFrame(render)
      } else {
        animIdRef.current = null
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      addPixelAt(x, y)

      if (!animIdRef.current) {
        animIdRef.current = requestAnimationFrame(render)
      }
    }

    targetElement.addEventListener('mousemove', handleMouseMove)

    return () => {
      observer.disconnect()
      targetElement.removeEventListener('mousemove', handleMouseMove)
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current)
      }
    }
  }, [color])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </div>
  )
}
