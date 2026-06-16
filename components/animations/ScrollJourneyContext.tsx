'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { ScrollZone, prefersReducedMotion } from '@/lib/motion'

export type MousePosition = { x: number; y: number }

type ScrollJourneyState = {
  scrollProgress: number
  activeZone: ScrollZone
  mouse: MousePosition
  reducedMotion: boolean
  isMobile: boolean
}

const defaultState: ScrollJourneyState = {
  scrollProgress: 0,
  activeZone: 'hero',
  mouse: { x: 0, y: 0 },
  reducedMotion: false,
  isMobile: false,
}

const ScrollJourneyContext = createContext<ScrollJourneyState>(defaultState)

export function useScrollJourney() {
  return useContext(ScrollJourneyContext)
}

export function ScrollJourneyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ScrollJourneyState>(defaultState)

  useEffect(() => {
    let mounted = true
    let gsapCtx: { revert: () => void } | null = null
    let removeMouse: (() => void) | undefined

    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!mounted) return

      const reduced = prefersReducedMotion()
      const mobile = window.innerWidth < 768

      setState((s) => ({ ...s, reducedMotion: reduced, isMobile: mobile }))

      const onMouseMove = (e: MouseEvent) => {
        if (reduced || mobile) return
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = -(e.clientY / window.innerHeight) * 2 + 1
        setState((s) => ({ ...s, mouse: { x, y } }))
      }

      window.addEventListener('mousemove', onMouseMove, { passive: true })
      removeMouse = () => window.removeEventListener('mousemove', onMouseMove)

      gsapCtx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            if (mounted) {
              setState((s) => ({ ...s, scrollProgress: self.progress }))
            }
          },
        })

        document.querySelectorAll<HTMLElement>('[data-zone]').forEach((el) => {
          const zone = el.dataset.zone as ScrollZone
          if (!zone) return

          ScrollTrigger.create({
            trigger: el,
            start: 'top 60%',
            end: 'bottom 40%',
            onEnter: () => mounted && setState((s) => ({ ...s, activeZone: zone })),
            onEnterBack: () => mounted && setState((s) => ({ ...s, activeZone: zone })),
          })
        })
      })
    }

    init()

    return () => {
      mounted = false
      removeMouse?.()
      gsapCtx?.revert()
    }
  }, [])

  const value = useMemo(() => state, [state])

  return (
    <ScrollJourneyContext.Provider value={value}>
      {children}
    </ScrollJourneyContext.Provider>
  )
}
