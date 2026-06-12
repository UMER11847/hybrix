'use client'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import CalendlyButton from './CalendlyButton'

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
      ? 'text-purple-400'
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
        ? 'bg-primary-90/80 backdrop-blur-2xl border-b border-cyan-500/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center glow-button transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Zap size={18} className="text-white" fill="white" />
          </div>
          <span className="font-display font-700 text-2xl tracking-tight text-white">
            Hybrix<span className="gradient-text">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
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
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#form"
            className="text-sm text-slate-300 hover:text-white transition-colors font-medium px-4 py-2"
          >
            Sign In
          </a>
          <CalendlyButton
            className="btn-shine text-sm font-semibold px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all duration-200 glow-button hover:-translate-y-0.5"
          >
            Book Free Consultation
          </CalendlyButton>
        </div>

        <div className="lg:hidden flex items-center gap-2">
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-secondary-98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'true' : undefined}
                className={linkClassName(isActive, true)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
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
            <CalendlyButton
              className="block text-center font-semibold px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Book Free Demo
            </CalendlyButton>
          </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
