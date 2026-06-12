'use client'

import dynamic from 'next/dynamic'
import { ScrollJourneyProvider } from '@/components/animations/ScrollJourneyContext'

const HybrixCanvas = dynamic(() => import('@/components/three/HybrixCanvasLoader'), {
  ssr: false,
  loading: () => (
    <div className="hybrix-canvas-fallback" aria-hidden>
      <div className="hybrix-canvas-fallback-glow" />
    </div>
  ),
})

export default function HybrixExperience({ children }: { children: React.ReactNode }) {
  return (
    <ScrollJourneyProvider>
      <div className="hybrix-experience relative">
        <div className="hybrix-canvas-layer fixed inset-0 z-0 pointer-events-none" aria-hidden>
          <HybrixCanvas />
        </div>
        <div className="hybrix-content relative z-10">{children}</div>
      </div>
    </ScrollJourneyProvider>
  )
}
