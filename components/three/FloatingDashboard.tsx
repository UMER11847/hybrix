'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollJourney } from '@/components/animations/ScrollJourneyContext'

const DASHBOARDS = [
  { pos: [2.8, 0.8, -1] as [number, number, number], rot: [0, -0.4, 0.1] as [number, number, number], scale: 0.55 },
  { pos: [-2.6, -0.6, 0.5] as [number, number, number], rot: [0.1, 0.35, -0.05] as [number, number, number], scale: 0.5 },
  { pos: [1.2, -1.4, 1.5] as [number, number, number], rot: [-0.08, -0.2, 0.05] as [number, number, number], scale: 0.45 },
]

export default function FloatingDashboard() {
  const groupRef = useRef<THREE.Group>(null)
  const { activeZone, scrollProgress, mouse, reducedMotion, isMobile } = useScrollJourney()

  const visible = ['hero', 'live-demo', 'benefits', 'pricing'].includes(activeZone)

  useFrame(() => {
    const group = groupRef.current
    if (!group) return

    group.visible = visible && !isMobile
    if (!visible) return

    group.position.x = THREE.MathUtils.lerp(group.position.x, mouse.x * 0.25, 0.04)
    group.position.y = THREE.MathUtils.lerp(group.position.y, mouse.y * 0.2, 0.04)
    group.position.z = THREE.MathUtils.lerp(group.position.z, -scrollProgress * 1.5, 0.03)
  })

  if (isMobile) return null

  return (
    <group ref={groupRef}>
      {DASHBOARDS.map((d, i) => (
        <Float key={i} speed={reducedMotion ? 0 : 1.5} floatIntensity={reducedMotion ? 0 : 0.35}>
          <RoundedBox
            args={[1.6, 1, 0.06]}
            radius={0.06}
            position={d.pos}
            rotation={d.rot}
            scale={d.scale}
          >
            <meshPhysicalMaterial
              color="#0a1628"
              transparent
              opacity={0.55}
              roughness={0.1}
              metalness={0.4}
              transmission={0.4}
              thickness={0.5}
              emissive="#06b6d4"
              emissiveIntensity={0.15}
            />
          </RoundedBox>
          {/* Metric bar accents */}
          <mesh position={[d.pos[0] - 0.3, d.pos[1] + 0.15, d.pos[2] + 0.04]} rotation={d.rot} scale={[d.scale * 0.4, d.scale * 0.06, d.scale * 0.02]}>
            <boxGeometry />
            <meshBasicMaterial color="#10b981" transparent opacity={0.8} />
          </mesh>
          <mesh position={[d.pos[0] + 0.1, d.pos[1] - 0.05, d.pos[2] + 0.04]} rotation={d.rot} scale={[d.scale * 0.6, d.scale * 0.04, d.scale * 0.02]}>
            <boxGeometry />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.7} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}
