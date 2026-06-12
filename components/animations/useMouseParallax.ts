'use client'

import type { CSSProperties } from 'react'
import { useScrollJourney } from './ScrollJourneyContext'

export function useMouseParallax(intensity = 20) {
  const { mouse, reducedMotion, isMobile } = useScrollJourney()

  if (reducedMotion || isMobile) {
    return { x: 0, y: 0, style: {} as CSSProperties }
  }

  return {
    x: mouse.x * intensity,
    y: mouse.y * intensity,
    style: {
      transform: `translate3d(${mouse.x * intensity}px, ${mouse.y * intensity}px, 0)`,
    } as CSSProperties,
  }
}
