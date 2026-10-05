'use client'

import React, { useEffect, useRef } from 'react'

export function PixelMatrixStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 220)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }
    window.addEventListener('resize', handleResize)

    const numRows = 6
    const dotRadius = 2.5

    interface SingleDot {
      x: number
      speed: number
      brightness: number
    }

    const rowsData: { dir: number; dots: SingleDot[] }[] = []

    for (let r = 0; r < numRows; r++) {
      const dir = r % 2 === 0 ? 1 : -1
      const dots: SingleDot[] = []
      const count = 4 + Math.floor(Math.random() * 3)

      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * width,
          speed: (0.7 + Math.random() * 0.7) * dir,
          brightness: 0.65 + Math.random() * 0.35
        })
      }
      rowsData.push({ dir, dots })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const rowHeight = height / (numRows + 1)

      // 1. Draw sleek subtle horizontal guide lines
      for (let r = 1; r <= numRows; r++) {
        const y = r * rowHeight
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // 2. Render individual clean dots gliding smoothly along the lines
      rowsData.forEach((row, rIdx) => {
        const y = (rIdx + 1) * rowHeight

        row.dots.forEach((dot) => {
          // Smooth continuous linear motion without acceleration or flickering
          dot.x += dot.speed

          // Wrap seamlessly around screen boundaries
          if (row.dir === 1 && dot.x > width + 20) dot.x = -20
          if (row.dir === -1 && dot.x < -20) dot.x = width + 20

          if (dot.x >= -10 && dot.x <= width + 10) {
            // Draw clean single dot with soft crisp glow (no trail/rocket line behind)
            ctx.beginPath()
            ctx.arc(dot.x, y, dotRadius, 0, Math.PI * 2)

            ctx.fillStyle = `rgba(255, 255, 255, ${dot.brightness})`
            ctx.shadowColor = 'rgba(255, 255, 255, 0.9)'
            ctx.shadowBlur = 6
            ctx.fill()

            ctx.shadowBlur = 0
          }
        })
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="w-full h-[220px] md:h-[260px] lg:h-[280px] relative overflow-hidden bg-transparent">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
