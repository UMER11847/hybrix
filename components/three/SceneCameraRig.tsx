'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollJourney } from '@/components/animations/ScrollJourneyContext'

export default function SceneCameraRig() {
  const { camera } = useThree()
  const lookAt = useRef(new THREE.Vector3(0, 0, 0))
  const { scrollProgress, mouse, reducedMotion, isMobile } = useScrollJourney()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const cam = camera as THREE.PerspectiveCamera

    const baseZ = 9 - scrollProgress * 6
    const targetX = reducedMotion || isMobile ? 0 : mouse.x * 0.6
    const targetY = reducedMotion || isMobile ? 0 : mouse.y * 0.4 + Math.sin(t * 0.3) * 0.08

    cam.position.x = THREE.MathUtils.lerp(cam.position.x, targetX, 0.04)
    cam.position.y = THREE.MathUtils.lerp(cam.position.y, targetY, 0.04)
    cam.position.z = THREE.MathUtils.lerp(cam.position.z, baseZ, 0.04)

    lookAt.current.set(targetX * 0.5, targetY * 0.5, -2 - scrollProgress * 2)
    cam.lookAt(lookAt.current)
  })

  return null
}
