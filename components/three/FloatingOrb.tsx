'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollJourney } from '@/components/animations/ScrollJourneyContext'
import { ZONE_COLORS } from '@/lib/motion'

type FloatingOrbProps = {
  scale?: number
  position?: [number, number, number]
}

export default function FloatingOrb({ scale = 1.2, position = [0, 0, 0] }: FloatingOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const { activeZone, scrollProgress, mouse, reducedMotion } = useScrollJourney()
  const colors = ZONE_COLORS[activeZone]

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const mesh = meshRef.current
    const glow = glowRef.current
    if (!mesh || !glow) return

    const zoneScale =
      activeZone === 'hero' ? 1 : activeZone === 'pain' ? 0.65 : activeZone === 'demo' ? 1.3 : 0.85

    const targetScale = scale * zoneScale
    mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.04)

    if (!reducedMotion) {
      mesh.rotation.y = t * 0.25 + mouse.x * 0.3
      mesh.rotation.x = Math.sin(t * 0.4) * 0.15 + mouse.y * 0.15
    }

    const offsetX = activeZone === 'hero' ? 1.8 : activeZone === 'pain' ? -1.2 : 0.5
    const offsetY = Math.sin(scrollProgress * Math.PI) * 0.8
    mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, position[0] + offsetX + mouse.x * 0.4, 0.03)
    mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, position[1] + offsetY + mouse.y * 0.3, 0.03)
    mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, position[2] - scrollProgress * 2, 0.03)

    glow.position.copy(mesh.position)
    glow.scale.copy(mesh.scale).multiplyScalar(1.35)
  })

  return (
    <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={reducedMotion ? 0 : 0.3} floatIntensity={reducedMotion ? 0 : 0.6}>
      <group>
        <mesh ref={glowRef}>
          <sphereGeometry args={[1.05, 32, 32]} />
          <meshBasicMaterial color={colors.primary} transparent opacity={0.12} />
        </mesh>
        <mesh ref={meshRef} position={position}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color={colors.primary}
            emissive={colors.secondary}
            emissiveIntensity={0.45}
            roughness={0.15}
            metalness={0.85}
            distort={0.35}
            speed={2}
            transparent
            opacity={0.92}
          />
        </mesh>
      </group>
    </Float>
  )
}
