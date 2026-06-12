'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollJourney } from '@/components/animations/ScrollJourneyContext'
import { ZONE_COLORS, getParticleCount } from '@/lib/motion'

export default function ParticlesField() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = useMemo(() => getParticleCount(), [])
  const { activeZone, scrollProgress, reducedMotion } = useScrollJourney()
  const colors = ZONE_COLORS[activeZone]

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10
      vel[i * 3] = (Math.random() - 0.5) * 0.02
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02
    }

    return { positions: pos, velocities: vel }
  }, [count])

  useFrame((state) => {
    const points = pointsRef.current
    if (!points || reducedMotion) return

    const geo = points.geometry
    const posAttr = geo.getAttribute('position') as THREE.BufferAttribute
    const arr = posAttr.array as Float32Array
    const speed = activeZone === 'benefits' ? 1.8 : activeZone === 'pain' ? 0.6 : 1

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3] * speed
      arr[i * 3 + 1] += velocities[i * 3 + 1] * speed
      arr[i * 3 + 2] += velocities[i * 3 + 2] * speed + scrollProgress * 0.002

      if (Math.abs(arr[i * 3]) > 20) velocities[i * 3] *= -1
      if (Math.abs(arr[i * 3 + 1]) > 15) velocities[i * 3 + 1] *= -1
      if (Math.abs(arr[i * 3 + 2]) > 20) velocities[i * 3 + 2] *= -1
    }

    posAttr.needsUpdate = true
    points.rotation.y = state.clock.elapsedTime * 0.015
  })

  const color = useMemo(() => new THREE.Color(colors.primary), [colors.primary])

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={color}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
