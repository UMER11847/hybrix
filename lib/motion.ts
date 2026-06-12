export type ScrollZone =
  | 'hero'
  | 'pain'
  | 'solutions'
  | 'industries'
  | 'how-it-works'
  | 'live-demo'
  | 'benefits'
  | 'testimonials'
  | 'case-studies'
  | 'pricing'
  | 'trust'
  | 'about'
  | 'demo'
  | 'faq'
  | 'footer'

export const ZONE_COLORS: Record<
  ScrollZone,
  { primary: string; secondary: string; accent: string }
> = {
  hero: { primary: '#06b6d4', secondary: '#8b5cf6', accent: '#10b981' },
  pain: { primary: '#f97316', secondary: '#ef4444', accent: '#fb923c' },
  solutions: { primary: '#06b6d4', secondary: '#10b981', accent: '#34d399' },
  industries: { primary: '#8b5cf6', secondary: '#ec4899', accent: '#3b82f6' },
  'how-it-works': { primary: '#06b6d4', secondary: '#10b981', accent: '#8b5cf6' },
  'live-demo': { primary: '#3b82f6', secondary: '#06b6d4', accent: '#10b981' },
  benefits: { primary: '#10b981', secondary: '#06b6d4', accent: '#8b5cf6' },
  testimonials: { primary: '#8b5cf6', secondary: '#ec4899', accent: '#06b6d4' },
  'case-studies': { primary: '#06b6d4', secondary: '#10b981', accent: '#8b5cf6' },
  pricing: { primary: '#8b5cf6', secondary: '#ec4899', accent: '#06b6d4' },
  trust: { primary: '#10b981', secondary: '#06b6d4', accent: '#8b5cf6' },
  about: { primary: '#8b5cf6', secondary: '#06b6d4', accent: '#10b981' },
  demo: { primary: '#06b6d4', secondary: '#10b981', accent: '#8b5cf6' },
  faq: { primary: '#8b5cf6', secondary: '#06b6d4', accent: '#10b981' },
  footer: { primary: '#06b6d4', secondary: '#8b5cf6', accent: '#10b981' },
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isMobileViewport(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

export function getParticleCount(): number {
  if (typeof window === 'undefined') return 400
  if (prefersReducedMotion()) return 80
  if (isMobileViewport()) return 150
  return 500
}
