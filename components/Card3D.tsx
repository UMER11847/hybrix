'use client'

import clsx from 'clsx'
import { useRef, type ReactNode, type MouseEvent } from 'react'
import { prefersReducedMotion } from '@/lib/motion'

type Card3DProps = {
  children: ReactNode
  className?: string
  intensity?: number
}

export default function Card3D({ children, className, intensity = 12 }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || window.innerWidth < 768) return
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    el.style.transform = `perspective(900px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(8px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={clsx('card-3d transition-transform duration-300 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  )
}
