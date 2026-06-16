'use client'

import { Suspense } from 'react'
import { Stars } from '@react-three/drei'
import FloatingOrb from './FloatingOrb'
import ParticlesField from './ParticlesField'
import DataStream from './DataStream'
import AINode from './AINode'
import FloatingDashboard from './FloatingDashboard'
import SceneCameraRig from './SceneCameraRig'
import { useScrollJourney } from '@/components/animations/ScrollJourneyContext'

function SceneContent() {
  const { reducedMotion, isMobile } = useScrollJourney()

  return (
    <>
      <color attach="background" args={['#030712']} />
      <fog attach="fog" args={['#030712', 8, 28]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#06b6d4" />
      <pointLight position={[-4, -2, 2]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[0, 3, -2]} intensity={0.6} color="#10b981" />

      <SceneCameraRig />
      <FloatingOrb />
      <ParticlesField />
      <DataStream />
      <AINode />
      <FloatingDashboard />

      {!reducedMotion && !isMobile && (
        <Stars radius={60} depth={40} count={1200} factor={3} saturation={0} fade speed={0.5} />
      )}
    </>
  )
}

export default function HybrixWorld() {
  return (
    <Suspense fallback={null}>
      <SceneContent />
    </Suspense>
  )
}
