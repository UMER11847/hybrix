'use client'

import { Canvas } from '@react-three/fiber'
import HybrixWorld from './HybrixWorld'
import { useScrollJourney } from '@/components/animations/ScrollJourneyContext'

export default function HybrixCanvas() {
  const { reducedMotion, isMobile } = useScrollJourney()

  return (
    <Canvas
      className="hybrix-canvas"
      camera={{ position: [0, 0, 9], fov: 55, near: 0.1, far: 100 }}
      dpr={isMobile ? [1, 1.25] : reducedMotion ? [1, 1.5] : [1, 2]}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ background: 'transparent' }}
    >
      <HybrixWorld />
    </Canvas>
  )
}
