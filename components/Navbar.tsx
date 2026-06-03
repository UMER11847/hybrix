'use client'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Menu, X, Zap } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { CALENDLY_URL } from '@/lib/constants'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

const sectionIds = navLinks.map((link) => link.href.slice(1))

function linkClassName(isActive: boolean, mobile = false) {
  return clsx(
    'font-medium transition-colors duration-200',
    mobile ? 'block text-base py-2' : 'text-sm',
    isActive
      ? 'text-emerald-400'
      : mobile
        ? 'text-slate-300 hover:text-white'
        : 'text-slate-400 hover:text-white'
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const offset = 120
      const scrollPos = window.scrollY + offset
      let current = ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-primary-90 backdrop-blur-xl border-b border-white/5 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center glow-blue">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="font-display font-700 text-xl tracking-tight text-white">
            Hybrix<span className="gradient-text-blue">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={clsx(linkClassName(isActive), 'relative')}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-emerald-400" />
                )}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#form"
            className="text-sm text-slate-300 hover:text-white transition-colors font-medium px-4 py-2"
          >
            Sign In
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white transition-all duration-200 glow-button"
          >
            Book Free Demo
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary-98 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'true' : undefined}
                className={linkClassName(isActive, true)}
              >
                {link.label}
              </a>
            )
          })}
          <div className="pt-4 border-t border-white/5 space-y-3">
            <a
              href="#form"
              onClick={() => setMenuOpen(false)}
              className="block text-center font-medium px-5 py-3 rounded-xl glass border border-white/10 text-slate-300"
            >
              Sign In
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center font-semibold px-5 py-3 rounded-xl bg-emerald-500 text-white"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
