'use client'

import clsx from 'clsx'
import type { ScrollZone } from '@/lib/motion'

type SectionZoneProps = {
  zone: ScrollZone
  id?: string
  className?: string
  children: React.ReactNode
  as?: 'section' | 'footer'
}

export default function SectionZone({
  zone,
  id,
  className,
  children,
  as: Tag = 'section',
}: SectionZoneProps) {
  return (
    <Tag
      id={id}
      data-zone={zone}
      className={clsx('section-zone relative', `zone-${zone}`, className)}
    >
      <div className="zone-overlay pointer-events-none absolute inset-0" aria-hidden />
      <div className="section-zone-content relative z-10">{children}</div>
    </Tag>
  )
}
