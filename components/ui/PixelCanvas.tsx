'use client'

import React, { useRef, useEffect, useCallback } from 'react'

interface PixelCanvasProps {
  imageSrc: string
  alt: string
  onRegisterTrigger?: (trigger: () => void) => void
}

export function PixelCanvas({ imageSrc, alt, onRegisterTrigger }: PixelCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const pixelFactorRef = useRef(1) // 1 = sharp normal, > 1 = pixelated block size

  // Draw frame on canvas with downscale-upscale pixelation
  const renderFrame = useCallback((pixelSize: number) => {
    const canvas = canvasRef.current
    const img = imageRef.current
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const w = canvas.width
    const h = canvas.height
    if (w === 0 || h === 0) return

    // Calculate background-cover dimensions
    const imgRatio = img.naturalWidth / img.naturalHeight
    const canvasRatio = w / h

    let renderW = w
    let renderH = h
    let offsetX = 0
    let offsetY = 0

    if (canvasRatio > imgRatio) {
      renderH = w / imgRatio
      offsetY = (h - renderH) / 2
    } else {
      renderW = h * imgRatio
      offsetX = (w - renderW) / 2
    }

    if (pixelSize <= 1.2) {
      // Normal crisp rendering
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(img, offsetX, offsetY, renderW, renderH)
    } else {
      // Step 1: Draw low-res scaled copy
      const scaledW = Math.max(3, Math.floor(w / pixelSize))
      const scaledH = Math.max(3, Math.floor(h / pixelSize))

      ctx.imageSmoothingEnabled = false
      // Draw image small
      ctx.drawImage(img, offsetX * (scaledW / w), offsetY * (scaledH / h), renderW * (scaledW / w), renderH * (scaledH / h), 0, 0, scaledW, scaledH)
      // Step 2: Blow it back up without smoothing = instant pixelation
      ctx.drawImage(canvas, 0, 0, scaledW, scaledH, 0, 0, w, h)
    }
  }, [])

  // Smooth decay loop back to sharp image
  const animate = useCallback(() => {
    if (pixelFactorRef.current > 1.2) {
      pixelFactorRef.current = 1 + (pixelFactorRef.current - 1) * 0.82 // rapid decay
      renderFrame(pixelFactorRef.current)
      animFrameRef.current = requestAnimationFrame(animate)
    } else {
      pixelFactorRef.current = 1
      renderFrame(1)
      animFrameRef.current = null
    }
  }, [renderFrame])

  // Triggers temporary pixel block effect (size ~30px)
  const triggerPixelation = useCallback(() => {
    pixelFactorRef.current = 28 // Peak pixel block size
    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  // Expose trigger to parent
  useEffect(() => {
    if (onRegisterTrigger) {
      onRegisterTrigger(triggerPixelation)
    }
  }, [onRegisterTrigger, triggerPixelation])

  // Image load & container resize observer
  useEffect(() => {
    const img = new window.Image()
    img.crossOrigin = 'anonymous'
    img.src = imageSrc
    imageRef.current = img

    img.onload = () => {
      renderFrame(1)
    }

    const handleResize = () => {
      const container = containerRef.current
      const canvas = canvasRef.current
      if (!container || !canvas) return

      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      renderFrame(1)
    }

    handleResize()
    const resizeObserver = new ResizeObserver(handleResize)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      resizeObserver.disconnect()
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [imageSrc, renderFrame])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        aria-label={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  )
}
