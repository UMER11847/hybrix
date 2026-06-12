'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ArrowRight, Play, Phone, MessageSquare, BarChart3, CheckCircle, Mic, Sparkles } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import SectionZone from '@/components/SectionZone'
import { useMouseParallax } from '@/components/animations/useMouseParallax'
import { prefersReducedMotion } from '@/lib/motion'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)
  const parallax = useMouseParallax(16)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const load = async () => {
        const gsap = (await import('gsap')).default

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.from('[data-hero="badge"]', { y: 30, opacity: 0, duration: 0.6 })
          .from('[data-hero="headline"]', { y: 50, opacity: 0, duration: 0.8 }, '-=0.3')
          .from('[data-hero="sub"]', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
          .from('[data-hero="features"] > *', { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 }, '-=0.3')
          .from('[data-hero="cta"] > *', { y: 25, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.2')
          .from('[data-hero="stat"]', { y: 40, opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.6 }, '-=0.2')

        if (dashboardRef.current) {
          gsap.from(dashboardRef.current, {
            x: 60,
            opacity: 0,
            scale: 0.92,
            duration: 1,
            delay: 0.4,
            ease: 'power3.out',
          })
        }
      }

      load()
    },
    { scope: containerRef }
  )

  return (
    <SectionZone zone="hero" className="min-h-screen flex items-center overflow-hidden">
      <div ref={containerRef} className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 sm:py-28 pt-36 sm:pt-40 w-full">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div
              data-hero="badge"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel-3d mb-8"
            >
              <Sparkles size={14} className="text-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-300 font-semibold">AI-Powered Business Automation</span>
            </div>

            <h1
              data-hero="headline"
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-800 leading-[1.02] tracking-tight mb-7"
            >
              Never Miss{' '}
              <span className="gradient-text">Another Customer</span>{' '}
              Call Again
            </h1>

            <p
              data-hero="sub"
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
            >
              Your AI employee answers every call, books appointments, captures leads, and supports customers around the clock — without salaries, breaks, or sick days.
            </p>

            <div data-hero="features" className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {['24/7 Call Answering', 'AI Chatbot', 'Lead Capture', 'Multi-language'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <div data-hero="cta" className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-semibold text-lg transition-all duration-200 glow-button group hover:-translate-y-0.5">
                Book Free Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </CalendlyButton>
              <a
                href="#live-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-panel-3d text-white font-semibold text-lg transition-all duration-200 group hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Play size={11} className="text-cyan-400 ml-0.5" fill="currentColor" />
                </div>
                Watch AI Demo
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 pt-8 border-t border-cyan-500/10">
              {[
                { value: '500+', label: 'Businesses Automated', color: 'text-cyan-400' },
                { value: '98%', label: 'Call Answer Rate', color: 'text-violet-400' },
                { value: '3x', label: 'More Leads Captured', color: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <div className="hidden sm:block w-px h-12 bg-cyan-500/20" />}
                  <div data-hero="stat">
                    <div className="text-3xl font-display font-700 text-white">{stat.value}</div>
                    <div className={`text-sm ${stat.color} font-medium mt-0.5`}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D-style Dashboard */}
          <div
            ref={dashboardRef}
            className="relative hidden lg:block"
            style={parallax.style}
          >
            <div className="relative glass-panel-3d rounded-3xl p-7 animate-float">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs text-cyan-400 uppercase tracking-widest mb-1 font-semibold">AI Dashboard</div>
                  <div className="text-xl font-semibold text-white">HybrixAI Control Center</div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-emerald-300 font-medium">Live</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Calls Today', value: '247', icon: Phone, color: 'text-cyan-400', bg: 'bg-cyan-500/15' },
                  { label: 'Chats Active', value: '38', icon: MessageSquare, color: 'text-violet-400', bg: 'bg-violet-500/15' },
                  { label: 'Leads Captured', value: '91', icon: BarChart3, color: 'text-emerald-400', bg: 'bg-emerald-500/15' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-light rounded-2xl p-5 metric-tile">
                    <div className={`w-9 h-9 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                      <stat.icon size={17} className={stat.color} />
                    </div>
                    <div className="text-2xl font-display font-700 text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="glass-light rounded-2xl p-5 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-base font-medium text-slate-300">AI Call Activity</div>
                  <div className="flex items-center gap-1">
                    {[...Array(7)].map((_, i) => (
                      <span key={i} className="wave-bar" />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { caller: 'Dr. Sarah Johnson', action: 'Appointment booked', time: '2m ago' },
                    { caller: 'Luxury Salon', action: 'Lead captured', time: '5m ago' },
                    { caller: 'AutoWorld Cars', action: 'Transferred to agent', time: '8m ago' },
                  ].map((call, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <div>
                          <div className="text-xs font-medium text-slate-300">{call.caller}</div>
                          <div className="text-xs text-slate-500">{call.action}</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500">{call.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-light rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <MessageSquare size={14} className="text-violet-400" />
                  </div>
                  <span className="text-base font-medium text-slate-300">Live Chat</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-cyan-500/20 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-cyan-200 max-w-[75%]">
                      Do you have any Saturday appointments available?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="glass rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-slate-300 max-w-[75%]">
                      Yes! I can book you for this Saturday at 10am or 2pm. Which works better?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 glass-panel-3d rounded-2xl px-4 py-3 flex items-center gap-3 float-card-1">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Lead Captured</div>
                <div className="text-xs text-slate-400">Clinic inquiry — $2,400 value</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 glass-panel-3d rounded-2xl px-4 py-3 flex items-center gap-3 float-card-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Mic size={16} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">AI on call</div>
                <div className="text-xs text-slate-400">Handling 12 calls now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionZone>
  )
}
