'use client'

import { useEffect, useState, type ComponentType } from 'react'

/**
 * Defers loading @react-three/fiber until after client mount so React is
 * fully initialized before R3F's reconciler accesses ReactCurrentOwner.
 */
export default function HybrixCanvasLoader() {
  const [CanvasComponent, setCanvasComponent] = useState<ComponentType | null>(null)

  useEffect(() => {
    import('./HybrixCanvas').then((mod) => {
      setCanvasComponent(() => mod.default)
    })
  }, [])

  if (!CanvasComponent) {
    return (
      <div className="hybrix-canvas-fallback" aria-hidden>
        <div className="hybrix-canvas-fallback-glow" />
      </div>
    )
  }

  return <CanvasComponent />
}
