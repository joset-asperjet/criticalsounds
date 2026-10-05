'use client'

import React, { useEffect, useRef } from 'react'

export function GrowthChartAnimation() {
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

    let time = 0

    const render = () => {
      time += 0.02
      ctx.clearRect(0, 0, width, height)

      // Métrica de crecimiento: progression from left to right.
      const numBars = 35
      const spacing = width / numBars
      const barWidth = Math.max(2, spacing * 0.3)

      // Draw subtle horizontal grid lines for the "chart" feel
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.lineWidth = 1
      for(let i=1; i<=4; i++) {
        ctx.beginPath()
        ctx.moveTo(0, height * (i/5))
        ctx.lineTo(width, height * (i/5))
        ctx.stroke()
      }

      const linePoints = []

      // Generate points for the growing chart
      for (let i = 0; i < numBars; i++) {
        const x = i * spacing + spacing / 2
        // Growth curve: exponential-like progression (0 to 1)
        const progress = i / (numBars - 1) 
        
        // Base height grows from 10% to 80% of canvas height
        const baseHeight = height * 0.15 + (Math.pow(progress, 1.5)) * (height * 0.65)
        
        // Add subtle continuous fluctuation
        const fluctuation = Math.sin(time * 2 + i * 0.3) * (12 * progress + 3)
        
        const finalHeight = baseHeight + fluctuation
        const y = height - finalHeight

        linePoints.push({ x, y, finalHeight })
        
        // Draw vertical equalizer/chart bars
        // Opacity and color intensity increase as we go right
        const barAlpha = 0.1 + (progress * 0.3)
        ctx.fillStyle = `rgba(169, 239, 241, ${barAlpha})` // Cyan tint
        
        // Only draw bars up to the line
        ctx.fillRect(x - barWidth/2, y, barWidth, finalHeight)
      }

      // Draw the continuous glowing trend line
      ctx.beginPath()
      ctx.moveTo(0, height)
      ctx.lineTo(linePoints[0].x, linePoints[0].y)
      
      for (let i = 1; i < linePoints.length; i++) {
        const prev = linePoints[i-1]
        const curr = linePoints[i]
        // Smooth curve
        const cpX = (prev.x + curr.x) / 2
        ctx.quadraticCurveTo(cpX, prev.y, curr.x, curr.y)
      }
      
      // Create gradient for the line
      const gradient = ctx.createLinearGradient(0, 0, width, 0)
      gradient.addColorStop(0, '#a9eff1') // Cyan
      gradient.addColorStop(0.5, '#d7ff54') // Lime
      gradient.addColorStop(1, '#ffffff') // White

      ctx.strokeStyle = gradient
      ctx.lineWidth = 3
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.shadowColor = 'rgba(215, 255, 84, 0.6)' // Lime glow
      ctx.shadowBlur = 12
      ctx.stroke()
      ctx.shadowBlur = 0

      // Add a subtle gradient fill under the line
      ctx.lineTo(linePoints[linePoints.length-1].x, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      const fillGradient = ctx.createLinearGradient(0, 0, 0, height)
      fillGradient.addColorStop(0, 'rgba(215, 255, 84, 0.15)')
      fillGradient.addColorStop(1, 'rgba(169, 239, 241, 0.0)')
      ctx.fillStyle = fillGradient
      ctx.fill()
      
      // Draw a glowing pulsing node at the peak (rightmost point)
      const last = linePoints[linePoints.length-1]
      const pulseSize = 5 + Math.sin(time * 4) * 2
      
      ctx.beginPath()
      ctx.arc(last.x, last.y, pulseSize, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = '#ffffff'
      ctx.shadowBlur = 15
      ctx.fill()
      ctx.shadowBlur = 0

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
