'use client'

import { RefObject, useEffect } from 'react'
import { prefersReducedMotion } from '@/lib/motion'

type ScrollAnimationOptions = {
  selector?: string
  stagger?: number
  y?: number
  scale?: number
  start?: string
  delay?: number
}

export function useScrollAnimation(
  containerRef: RefObject<HTMLElement | null>,
  options: ScrollAnimationOptions = {}
) {
  const {
    selector = '[data-animate]',
    stagger = 0.08,
    y = 70,
    scale = 0.94,
    start = 'top 85%',
    delay = 0,
  } = options

  useEffect(() => {
    const el = containerRef.current
    if (!el || prefersReducedMotion()) return

    let ctx: { revert: () => void } | null = null

    const run = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const targets = el.querySelectorAll(selector)
      if (!targets.length) return

      ctx = gsap.context(() => {
        gsap.from(targets, {
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none reverse',
          },
          y,
          opacity: 0,
          scale,
          rotateX: 8,
          transformPerspective: 800,
          stagger,
          duration: 0.85,
          delay,
          ease: 'power3.out',
        })
      }, el)
    }

    run()

    return () => {
      ctx?.revert()
    }
  }, [containerRef, selector, stagger, y, scale, start, delay])
}
