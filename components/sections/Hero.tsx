'use client'
import { useEffect, useRef } from 'react'
import { ArrowRight, Play, Phone, MessageSquare, BarChart3, CheckCircle, Mic } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary grid-bg">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full bg-emerald-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full bg-emerald-600/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] lg:w-[800px] lg:h-[800px] rounded-full bg-emerald-400/6 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 pt-32 sm:pt-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-300 font-medium">AI-Powered Business Automation</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-800 leading-[1.05] tracking-tight mb-6">
              Never Miss{' '}
              <br />
              <span className="gradient-text">Another Customer</span>
              <br />
              Call Again
            </h1>

            {/* Subheading */}
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Your AI employee answers every call, books appointments, captures leads, and supports customers around the clock — without salaries, breaks, or sick days.
            </p>

            {/* Features list */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {['24/7 Call Answering', 'AI Chatbot', 'Lead Capture', 'Multi-language'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-base transition-all duration-200 glow-button group"
              >
                Book Free Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </CalendlyButton>
              <a
                href="#live-demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl glass border border-white/10 hover:border-emerald-500/40 text-white font-semibold text-base transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Play size={10} className="text-emerald-400 ml-0.5" fill="currentColor" />
                </div>
                Watch AI Demo
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6 pt-8 border-t border-white/5">
              <div>
                <div className="text-2xl font-display font-700 text-white">500+</div>
                <div className="text-xs text-slate-500 mt-0.5">Businesses Automated</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-display font-700 text-white">98%</div>
                <div className="text-xs text-slate-500 mt-0.5">Call Answer Rate</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-display font-700 text-white">3x</div>
                <div className="text-xs text-slate-500 mt-0.5">More Leads Captured</div>
              </div>
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative hidden lg:block">
            {/* Main dashboard card */}
            <div className="relative glass border border-white/8 rounded-3xl p-6 animate-float">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">AI Dashboard</div>
                  <div className="text-lg font-semibold text-white">HybrixAI Control Center</div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Live</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Calls Today', value: '247', icon: Phone, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                  { label: 'Chats Active', value: '38', icon: MessageSquare, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                  { label: 'Leads Captured', value: '91', icon: BarChart3, color: 'text-green-400', bg: 'bg-green-500/10' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-light rounded-2xl p-4">
                    <div className={`w-8 h-8 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                      <stat.icon size={15} className={stat.color} />
                    </div>
                    <div className="text-xl font-display font-700 text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* AI Call Activity */}
              <div className="glass-light rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-slate-300">AI Call Activity</div>
                  <div className="flex items-center gap-1">
                    <span className="wave-bar" />
                    <span className="wave-bar" />
                    <span className="wave-bar" />
                    <span className="wave-bar" />
                    <span className="wave-bar" />
                    <span className="wave-bar" />
                    <span className="wave-bar" />
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { caller: 'Dr. Sarah Johnson', action: 'Appointment booked', time: '2m ago', status: 'success' },
                    { caller: 'Luxury Salon', action: 'Lead captured', time: '5m ago', status: 'success' },
                    { caller: 'AutoWorld Cars', action: 'Transferred to agent', time: '8m ago', status: 'transfer' },
                  ].map((call, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${call.status === 'success' ? 'bg-green-400' : 'bg-emerald-400'}`} />
                        <div>
                          <div className="text-xs font-medium text-slate-300">{call.caller}</div>
                          <div className="text-xs text-slate-600">{call.action}</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-600">{call.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat preview */}
              <div className="glass-light rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <MessageSquare size={12} className="text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Live Chat</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-emerald-500/20 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-emerald-200 max-w-[70%]">
                      Do you have any Saturday appointments available?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="glass rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-slate-300 max-w-[70%]">
                      Yes! I can book you for this Saturday at 10am or 2pm. Which works better? 🗓️
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-8 -right-8 glass border border-white/8 rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Lead Captured</div>
                <div className="text-xs text-slate-500">Clinic inquiry — $2,400 value</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 glass border border-white/8 rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Mic size={16} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">AI on call</div>
                <div className="text-xs text-slate-500">Handling 12 calls now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
