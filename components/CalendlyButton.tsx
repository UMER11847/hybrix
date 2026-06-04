'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

type CalendlyButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>

export default function CalendlyButton({ onClick, children, ...props }: CalendlyButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(event)
    if (event.defaultPrevented) {
      return
    }

    event.preventDefault()

    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a
      {...props}
      href={CALENDLY_URL}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
