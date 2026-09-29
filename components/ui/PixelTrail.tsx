'use client'

import React, { useRef, useEffect } from 'react'

interface PixelTrailProps {
  imageSrc: string
}

interface PixelBlock {
  x: number
  y: number
  size: number
  opacity: number
  life: number
  color: string
}

export function PixelTrail({ imageSrc }: PixelTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<PixelBlock[]>([])
  const animIdRef = useRef<number | null>(null)
  const sampleCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const sampleCtxRef = useRef<CanvasRenderingContext2D | null>(null)
  const imgLoadedRef = useRef(false)

  // Load and sample the image in an offscreen canvas
  useEffect(() => {
    const img = new window.Image()
    img.crossOrigin = 'anonymous'
    img.src = imageSrc

    const offscreen = document.createElement('canvas')
    sampleCanvasRef.current = offscreen
    const offscreenCtx = offscreen.getContext('2d', { willReadFrequently: true })
    sampleCtxRef.current = offscreenCtx

    img.onload = () => {
      imgLoadedRef.current = true
      updateOffscreenSize()
    }

    const updateOffscreenSize = () => {
      const container = containerRef.current
      if (!container || !img.complete || img.naturalWidth === 0) return

      const rect = container.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      offscreen.width = Math.floor(rect.width)
      offscreen.height = Math.floor(rect.height)

      if (!offscreenCtx) return

      // Draw image in 'cover' mode onto offscreen canvas
      const imgRatio = img.naturalWidth / img.naturalHeight
      const canvasRatio = offscreen.width / offscreen.height

      let renderW = offscreen.width
      let renderH = offscreen.height
      let offsetX = 0
      let offsetY = 0

      if (canvasRatio > imgRatio) {
        renderH = offscreen.width / imgRatio
        offsetY = (offscreen.height - renderH) / 2
      } else {
        renderW = offscreen.height * imgRatio
        offsetX = (offscreen.width - renderW) / 2
      }

      offscreenCtx.drawImage(img, offsetX, offsetY, renderW, renderH)
    }

    window.addEventListener('resize', updateOffscreenSize)

    return () => {
      window.removeEventListener('resize', updateOffscreenSize)
    }
  }, [imageSrc])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    handleResize()
    const observer = new ResizeObserver(handleResize)
    observer.observe(container)

    // Sample RGB color from the exact spot on the image
    const sampleColorAt = (x: number, y: number): string => {
      const offCtx = sampleCtxRef.current
      const offCanvas = sampleCanvasRef.current
      if (!offCtx || !offCanvas || offCanvas.width === 0 || offCanvas.height === 0) {
        return 'rgba(255, 255, 255, 0.9)'
      }

      const clampedX = Math.max(0, Math.min(offCanvas.width - 1, Math.floor(x)))
      const clampedY = Math.max(0, Math.min(offCanvas.height - 1, Math.floor(y)))

      try {
        const pixelData = offCtx.getImageData(clampedX, clampedY, 1, 1).data
        // Slightly boost brightness so pixels stand out nicely
        const r = Math.min(255, Math.floor(pixelData[0] * 1.35 + 20))
        const g = Math.min(255, Math.floor(pixelData[1] * 1.35 + 20))
        const b = Math.min(255, Math.floor(pixelData[2] * 1.35 + 20))
        return `rgb(${r}, ${g}, ${b})`
      } catch {
        return 'rgba(255, 255, 255, 0.9)'
      }
    }

    const addPixelAt = (x: number, y: number) => {
      // Much smaller grid size: 5px to 6px
      const grid = 5
      const snappedX = Math.floor(x / grid) * grid
      const snappedY = Math.floor(y / grid) * grid

      // Spawn a fine trail of 3-5 tiny pixel blocks
      const count = Math.floor(Math.random() * 3) + 3
      for (let i = 0; i < count; i++) {
        const offsetGridX = (Math.floor(Math.random() * 5) - 2) * grid
        const offsetGridY = (Math.floor(Math.random() * 5) - 2) * grid
        const pixelSize = Math.random() > 0.4 ? grid : grid * 1.4

        const posX = snappedX + offsetGridX
        const posY = snappedY + offsetGridY
        const sampledColor = sampleColorAt(posX, posY)

        particlesRef.current.push({
          x: posX,
          y: posY,
          size: pixelSize,
          opacity: 0.95,
          life: 1.0,
          color: sampledColor,
        })
      }
    }

    const render = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const particles = particlesRef.current
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life -= 0.045 // fast decay for a responsive trailing effect
        p.opacity = p.life

        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
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

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      observer.disconnect()
      container.removeEventListener('mousemove', handleMouseMove)
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-auto z-20">
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </div>
  )
}
