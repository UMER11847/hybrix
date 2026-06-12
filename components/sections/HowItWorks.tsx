'use client'
import { Search, Cpu, CheckCircle } from 'lucide-react'
import AnimateInView from '@/components/AnimateInView'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'We Understand Your Business',
    description: 'We start with a deep consultation to understand your industry, customer interactions, business processes, and what a perfect call or chat response looks like for you.',
    details: ['Free 30-min discovery call', 'Industry-specific analysis', 'Custom flow mapping', 'Integration review'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glow: 'rgba(16,185,129,0.15)',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'We Train Your AI Assistant',
    description: 'Our team trains and configures your AI with your business knowledge, brand voice, FAQs, services, and workflows. It learns to speak exactly like your business.',
    details: ['Custom voice & personality', 'Business knowledge upload', 'Workflow configuration', 'CRM & calendar integration'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glow: 'rgba(16,185,129,0.12)',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Your AI Starts Handling Customers',
    description: 'Your AI goes live and immediately starts answering calls and chats. You get full analytics, notifications for urgent items, and can adjust anything at any time.',
    details: ['48-hour setup time', 'Real-time analytics dashboard', 'Human override available', 'Ongoing optimization'],
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    glow: 'rgba(74, 222, 128, 0.15)',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-green-300 font-medium">Simple 3-Step Process</span>
          </div>
        </div>

        <AnimateInView className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            From Onboarding to
            <span className="gradient-text"> AI Going Live </span>
            in 48 Hours
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            No technical knowledge required. We handle everything from setup to training. You just approve and launch.
          </p>
        </AnimateInView>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-20 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-emerald-500/30 via-emerald-600/30 to-emerald-500/30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimateInView key={i} delay={i * 0.12}>
              <div className="relative">
                {/* Step number bubble */}
                <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
                  <div className={`relative z-10 w-14 h-14 ${step.bg} border-2 ${step.border} rounded-2xl flex items-center justify-center mb-6 lg:mb-8 transition-transform duration-300 hover:scale-110`}
                    style={{ boxShadow: `0 0 30px ${step.glow}` }}>
                    <step.icon size={22} className={step.color} />
                  </div>
                </div>

                <div className="glass border border-white/6 rounded-3xl p-7 card-hover h-full">
                  <div className={`text-5xl font-display font-800 ${step.color} opacity-20 mb-4 leading-none`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-display font-700 text-white mb-4">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{step.description}</p>

                  <div className="space-y-2.5">
                    {step.details.map((d, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${step.color} flex-shrink-0`} style={{ background: 'currentColor' }} />
                        <span className="text-sm text-slate-300">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimateInView>
            ))}
          </div>
        </div>

        {/* Timeline footer */}
        <AnimateInView delay={0.2}>
        <div className="mt-16 glass border border-white/8 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-700 text-white mb-2">Ready in 48 hours. Results from day one.</div>
            <p className="text-slate-400">No long contracts. No technical headaches. Just AI that works.</p>
          </div>
          <a
            href="#demo"
            className="flex-shrink-0 px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all duration-200 glow-button"
          >
            Start the Process →
          </a>
        </div>
        </AnimateInView>
      </div>
    </section>
  )
}
