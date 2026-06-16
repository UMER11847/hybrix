'use client'

import { RefObject, useEffect } from 'react'
import { prefersReducedMotion } from '@/lib/motion'

export function useCounterAnimation(
  ref: RefObject<HTMLElement | null>,
  endValue: number,
  suffix = ''
) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let ctx: { revert: () => void } | null = null
    const counter = { val: 0 }

    const run = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.to(counter, {
          val: endValue,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.val)}${suffix}`
          },
        })
      }, el)
    }

    run()
    return () => ctx?.revert()
  }, [ref, endValue, suffix])
}
