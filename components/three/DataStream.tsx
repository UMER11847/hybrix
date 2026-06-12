'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollJourney } from '@/components/animations/ScrollJourneyContext'
import { ZONE_COLORS } from '@/lib/motion'

const STREAMS = [
  { from: [-3, 1, -2] as [number, number, number], to: [2, -0.5, 1] as [number, number, number] },
  { from: [3, -1, -1] as [number, number, number], to: [-1, 1.5, 2] as [number, number, number] },
  { from: [0, 2, -3] as [number, number, number], to: [0, -1.5, 3] as [number, number, number] },
  { from: [-2, -1.5, 1] as [number, number, number], to: [2.5, 0.5, -2] as [number, number, number] },
]

export default function DataStream() {
  const groupRef = useRef<THREE.Group>(null)
  const { activeZone, scrollProgress, reducedMotion } = useScrollJourney()
  const colors = ZONE_COLORS[activeZone]
  const visible = ['solutions', 'how-it-works', 'live-demo', 'benefits'].includes(activeZone)

  const opacity = visible ? 0.7 : activeZone === 'pain' ? 0.25 : 0.15

  useFrame((state) => {
    const group = groupRef.current
    if (!group || reducedMotion) return
    group.rotation.y = state.clock.elapsedTime * 0.08
    group.position.z = -scrollProgress * 3
  })

  const lineColor = useMemo(() => {
    if (activeZone === 'pain') return '#f97316'
    return colors.accent
  }, [activeZone, colors.accent])

  if (!visible && activeZone !== 'pain' && activeZone !== 'hero') return null

  return (
    <group ref={groupRef}>
      {STREAMS.map((stream, i) => {
        const mid: [number, number, number] = [
          (stream.from[0] + stream.to[0]) / 2 + Math.sin(i) * 0.8,
          (stream.from[1] + stream.to[1]) / 2 + 0.5,
          (stream.from[2] + stream.to[2]) / 2,
        ]
        const points: [number, number, number][] = [stream.from, mid, stream.to]

        return (
          <Line
            key={i}
            points={points}
            color={lineColor}
            lineWidth={1}
            transparent
            opacity={opacity}
            dashed={activeZone === 'pain'}
            dashScale={2}
            gapSize={0.4}
          />
        )
      })}
    </group>
  )
}
