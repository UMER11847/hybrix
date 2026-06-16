'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollJourney } from '@/components/animations/ScrollJourneyContext'
import { ZONE_COLORS } from '@/lib/motion'

const NODES = [
  { pos: [-3.5, 0.5, -1] as [number, number, number], label: 'calls' },
  { pos: [3.2, 1, 0] as [number, number, number], label: 'chat' },
  { pos: [0, -1.5, 2] as [number, number, number], label: 'leads' },
  { pos: [-1.5, 2, 1.5] as [number, number, number], label: 'bookings' },
  { pos: [2, -0.8, -2] as [number, number, number], label: 'analytics' },
  { pos: [-2.5, -1.2, 2.5] as [number, number, number], label: 'crm' },
]

export default function AINode() {
  const groupRef = useRef<THREE.Group>(null)
  const { activeZone, scrollProgress, reducedMotion } = useScrollJourney()
  const colors = ZONE_COLORS[activeZone]
  const connected = ['solutions', 'how-it-works', 'industries', 'benefits'].includes(activeZone)
  const broken = activeZone === 'pain'

  useFrame((state) => {
    const group = groupRef.current
    if (!group || reducedMotion) return
    group.rotation.y = state.clock.elapsedTime * (activeZone === 'industries' ? 0.12 : 0.04)
    group.position.z = -scrollProgress * 2.5
  })

  return (
    <group ref={groupRef}>
      {NODES.map((node, i) => (
        <Float
          key={node.label}
          speed={reducedMotion ? 0 : 1 + i * 0.15}
          floatIntensity={reducedMotion ? 0 : 0.4}
          rotationIntensity={reducedMotion ? 0 : 0.2}
        >
          <mesh position={node.pos}>
            <octahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial
              color={broken ? '#f97316' : colors.primary}
              emissive={broken ? '#ef4444' : colors.secondary}
              emissiveIntensity={connected ? 0.8 : 0.3}
              metalness={0.9}
              roughness={0.2}
              transparent
              opacity={broken ? 0.6 : 0.9}
            />
          </mesh>
        </Float>
      ))}

      {connected &&
        NODES.slice(0, -1).map((node, i) => {
          const next = NODES[i + 1]
          const points = new Float32Array([
            node.pos[0], node.pos[1], node.pos[2],
            next.pos[0], next.pos[1], next.pos[2],
          ])
          return (
            <line key={`link-${i}`}>
              <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[points, 3]} />
              </bufferGeometry>
              <lineBasicMaterial color={colors.accent} transparent opacity={0.35} />
            </line>
          )
        })}
    </group>
  )
}
