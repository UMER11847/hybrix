'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type AnimateInViewProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

export default function AnimateInView({
  children,
  className,
  delay = 0,
  duration = 0.55,
  y = 28,
}: AnimateInViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
