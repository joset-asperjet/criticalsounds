'use client'

import React, { useEffect, useRef } from 'react'

export function LevelUpBoxAnimation() {
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

    const boxSize = 16
    let platforms = [
      { id: 0, label: 'INICIO', x: width * 0.05, y: height * 0.85, w: width * 0.12 },
      { id: 1, label: 'APRENDE', x: width * 0.25, y: height * 0.65, w: width * 0.15 },
      { id: 2, label: 'PRACTICA', x: width * 0.50, y: height * 0.45, w: width * 0.15 },
      { id: 3, label: 'EVOLUCIONA', x: width * 0.80, y: height * 0.25, w: width * 0.15 },
    ]

    const updatePlatforms = () => {
      const pad = width < 480 ? 12 : 24
      const availableW = width - pad * 2
      platforms = [
        { id: 0, label: 'INICIO', x: pad + availableW * 0.02, y: height * 0.85, w: availableW * 0.14 },
        { id: 1, label: 'APRENDE', x: pad + availableW * 0.25, y: height * 0.65, w: availableW * 0.17 },
        { id: 2, label: 'PRACTICA', x: pad + availableW * 0.52, y: height * 0.45, w: availableW * 0.18 },
        { id: 3, label: 'EVOLUCIONA', x: pad + availableW * 0.77, y: height * 0.25, w: availableW * 0.20 },
      ]
    }

    let box = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      rotation: 0,
      vrot: 0,
      state: 'init',
      timer: 0,
      targetPlatform: 1,
      energy: 0,
      isKnockback: false,
      opacity: 1
    }

    const sequence = [
      { from: 0, to: 1, delay: 40, frames: 40 },
      { from: 1, to: 2, delay: 30, frames: 40 },
      // Salta dos veces dentro de "Practica"
      { from: 2, to: 2, delay: 20, frames: 30 },
      { from: 2, to: 2, delay: 20, frames: 30 },
      // Tries to advance but falls back (cae)
      { from: 2, to: 1, delay: 30, frames: 45, knockback: true }, 
      // Gathers energy and makes a huge jump directly to Evoluciona (vuelve y sube)
      { from: 1, to: 3, delay: 60, frames: 60, charge: true }, 
      { from: 3, to: 0, delay: 100, reset: true }
    ]
    let seqIndex = 0

    const gravity = 0.45

    const jumpTo = (target: any, knockback: boolean = false) => {
      const startX = box.x
      const startY = box.y
      const targetX = target.x + target.w / 2
      const targetY = target.y - boxSize / 2

      // Ensure apex of jump never exceeds top padding (y >= height * 0.12)
      const minTopMargin = Math.max(22, height * 0.12)
      const idealApex = Math.min(startY, targetY) - 40
      const apexY = Math.max(minTopMargin, idealApex)

      // Calculate upward velocity and time to reach apex
      const hUp = Math.max(10, startY - apexY)
      const vyInitial = -Math.sqrt(2 * gravity * hUp)
      const tUp = -vyInitial / gravity

      // Calculate downward distance and time to land on target platform
      const hDown = Math.max(5, targetY - apexY)
      const tDown = Math.sqrt((2 * hDown) / gravity)

      const totalFrames = Math.max(25, tUp + tDown)

      box.vx = (targetX - startX) / totalFrames
      box.vy = vyInitial

      box.state = 'jumping'
      box.isKnockback = knockback
      box.vrot = knockback ? -0.2 : (targetX > startX ? 0.15 : -0.15)
    }

    const render = () => {
      updatePlatforms()
      ctx.clearRect(0, 0, width, height)

      if (box.state === 'init') {
        box.x = platforms[0].x + platforms[0].w / 2
        box.y = platforms[0].y - boxSize / 2
        box.rotation = 0
        box.state = 'idle'
        box.opacity = 1
      }

      // Draw platforms
      platforms.forEach(p => {
        // Platform body
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.fillRect(p.x, p.y, p.w, 4)
        
        // Highlight edge
        ctx.fillStyle = 'rgba(169, 239, 241, 0.6)'
        ctx.fillRect(p.x, p.y, p.w * 0.2, 4)

        // Label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'
        ctx.font = '11px monospace'
        ctx.fillText(p.label, p.x, p.y + 18)
      })

      // Logic
      if (box.state === 'idle' || box.state === 'charging') {
        box.timer++
        const currentSeq = sequence[seqIndex]
        
        if (currentSeq.charge && box.state === 'idle') {
           box.state = 'charging'
        }

        if (box.state === 'charging') {
           box.energy = Math.min(1, box.timer / currentSeq.delay)
        }

        if (box.timer >= currentSeq.delay) {
          box.timer = 0
          box.energy = 0
          if (currentSeq.reset) {
            box.state = 'fadeout'
          } else {
            const targetP = platforms[currentSeq.to]
            jumpTo(targetP, currentSeq.knockback)
            box.targetPlatform = currentSeq.to
          }
        }
      } else if (box.state === 'jumping') {
        box.x += box.vx
        box.y += box.vy
        box.vy += gravity
        box.rotation += box.vrot

        const targetP = platforms[box.targetPlatform]
        
        // Check landing
        if (box.vy > 0 && box.y >= targetP.y - boxSize / 2) {
           box.y = targetP.y - boxSize / 2
           box.vx = 0
           box.vy = 0
           box.rotation = 0
           box.state = 'idle'
           box.isKnockback = false
           seqIndex = (seqIndex + 1) % sequence.length
           
           // Impact particle effect could be added here
        }
      } else if (box.state === 'fadeout') {
        box.timer++
        box.opacity = Math.max(0, 1 - box.timer / 40)
        if (box.opacity <= 0) {
           box.state = 'init'
           seqIndex = 0
           box.timer = 0
        }
      }

      // Draw Box
      ctx.save()
      ctx.globalAlpha = box.opacity
      
      let drawX = box.x
      let drawY = box.y
      
      if (box.state === 'charging') {
         // Shake while charging
         const shake = (Math.random() - 0.5) * (box.energy * 6)
         drawX += shake
      }
      
      ctx.translate(drawX, drawY)
      ctx.rotate(box.rotation)
      
      ctx.fillStyle = box.isKnockback ? '#ff5454' : '#d7ff54' // Red if falling/knockback, Lime otherwise
      ctx.shadowColor = box.isKnockback ? '#ff5454' : '#d7ff54'
      
      if (box.state === 'jumping') {
         ctx.shadowBlur = 15
      } else if (box.state === 'charging') {
         ctx.shadowBlur = 10 + box.energy * 25
         ctx.fillStyle = `rgba(215, 255, 84, ${0.6 + box.energy * 0.4})`
         // Squat
         const squat = box.energy * 6
         ctx.scale(1 + box.energy * 0.2, 1 - box.energy * 0.3)
         ctx.translate(0, squat)
      } else {
         ctx.shadowBlur = 8
         // Breathing
         const pulse = 1 + Math.sin(Date.now() / 150) * 0.05
         ctx.scale(pulse, pulse)
      }

      ctx.fillRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize)
      
      // Draw inner core
      ctx.fillStyle = '#ffffff'
      ctx.shadowBlur = 0
      ctx.fillRect(-boxSize / 4, -boxSize / 4, boxSize / 2, boxSize / 2)

      ctx.restore()

      // Trail
      if (box.state === 'jumping') {
        ctx.fillStyle = box.isKnockback ? 'rgba(255, 84, 84, 0.2)' : 'rgba(215, 255, 84, 0.2)'
        ctx.save()
        ctx.translate(box.x - box.vx * 2, box.y - box.vy * 2)
        ctx.rotate(box.rotation - box.vrot * 2)
        ctx.fillRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize)
        ctx.restore()
      }

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
