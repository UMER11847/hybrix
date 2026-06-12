'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Phone, MessageSquare, BarChart3, CheckCircle, Mic, Sparkles } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary grid-bg">
      {/* Background glow orbs - bolder and more colorful */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-purple-500/15 blur-[150px] pointer-events-none orb-drift" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-pink-500/12 blur-[120px] pointer-events-none orb-drift-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[900px] lg:h-[900px] rounded-full bg-blue-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none orb-drift" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24 sm:py-28 pt-36 sm:pt-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-purple-500/30 mb-8 glow-card"
            >
              <Sparkles size={14} className="text-purple-400 animate-pulse" />
              <span className="text-sm text-purple-300 font-semibold">AI-Powered Business Automation</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-800 leading-[1.02] tracking-tight mb-7"
            >
              Never Miss{' '}
              <span className="gradient-text">Another Customer</span>{' '}
              Call Again
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Your AI employee answers every call, books appointments, captures leads, and supports customers around the clock — without salaries, breaks, or sick days.
            </motion.p>


            {/* Features list */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
            >
              {['24/7 Call Answering', 'AI Chatbot', 'Lead Capture', 'Multi-language'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <CheckCircle size={14} className="text-purple-400 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CalendlyButton
                className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-lg transition-all duration-200 glow-button group hover:-translate-y-0.5"
              >
                Book Free Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </CalendlyButton>
              <a
                href="#live-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass border border-purple-500/30 hover:border-purple-500/60 text-white font-semibold text-lg transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)] glow-card"
              >
                <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Play size={11} className="text-purple-400 ml-0.5" fill="currentColor" />
                </div>
                Watch AI Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-12 flex items-center gap-8 pt-8 border-t border-purple-500/10"
            >
              <div>
                <div className="text-3xl font-display font-700 text-white">500+</div>
                <div className="text-sm text-purple-400 font-medium mt-0.5">Businesses Automated</div>
              </div>
              <div className="w-px h-12 bg-purple-500/20" />
              <div>
                <div className="text-3xl font-display font-700 text-white">98%</div>
                <div className="text-sm text-pink-400 font-medium mt-0.5">Call Answer Rate</div>
              </div>
              <div className="w-px h-12 bg-purple-500/20" />
              <div>
                <div className="text-3xl font-display font-700 text-white">3x</div>
                <div className="text-sm text-blue-400 font-medium mt-0.5">More Leads Captured</div>
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main dashboard card */}
            <div className="relative glass border border-white/8 rounded-3xl p-7 animate-float">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs text-purple-400 uppercase tracking-widest mb-1 font-semibold">AI Dashboard</div>
                  <div className="text-xl font-semibold text-white">HybrixAI Control Center</div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-sm text-purple-300 font-medium">Live</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Calls Today', value: '247', icon: Phone, color: 'text-purple-400', bg: 'bg-purple-500/15' },
                  { label: 'Chats Active', value: '38', icon: MessageSquare, color: 'text-pink-400', bg: 'bg-pink-500/15' },
                  { label: 'Leads Captured', value: '91', icon: BarChart3, color: 'text-blue-400', bg: 'bg-blue-500/15' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-light rounded-2xl p-5 glow-card">
                    <div className={`w-9 h-9 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                      <stat.icon size={17} className={stat.color} />
                    </div>
                    <div className="text-2xl font-display font-700 text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* AI Call Activity */}
              <div className="glass-light rounded-2xl p-5 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-base font-medium text-slate-300">AI Call Activity</div>
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
              <div className="glass-light rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <MessageSquare size={14} className="text-emerald-400" />
                  </div>
                  <span className="text-base font-medium text-slate-300">Live Chat</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-emerald-500/20 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-emerald-200 max-w-[75%]">
                      Do you have any Saturday appointments available?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="glass rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-slate-300 max-w-[75%]">
                      Yes! I can book you for this Saturday at 10am or 2pm. Which works better? 🗓️
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-8 -right-8 glass border border-white/8 rounded-2xl px-4 py-3 flex items-center gap-3 float-card-1 shadow-[0_8px_32px_rgba(16,185,129,0.1)]">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle size={16} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Lead Captured</div>
                <div className="text-xs text-slate-500">Clinic inquiry — $2,400 value</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 glass border border-white/8 rounded-2xl px-4 py-3 flex items-center gap-3 float-card-2 shadow-[0_8px_32px_rgba(16,185,129,0.1)]">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Mic size={16} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">AI on call</div>
                <div className="text-xs text-slate-500">Handling 12 calls now</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
