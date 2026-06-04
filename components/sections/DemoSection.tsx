'use client'
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import EmailForm from '@/components/EmailForm'

export default function DemoSection() {
  return (
    <section id="demo" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/8 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="glass border border-emerald-500/20 rounded-3xl overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-400" />
          
          <div className="p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 mb-8">
                  <Calendar size={13} className="text-emerald-400" />
                  <span className="text-sm text-emerald-300 font-medium">Free 30-Minute Demo</span>
                </div>

                <h2 className="font-display text-4xl font-800 text-white mb-5 leading-tight">
                  See Your AI in Action Before You Decide
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  We'll walk you through exactly how your AI would handle calls and chats for your specific business. No pressure, no commitment. Just a powerful demonstration.
                </p>

                <div className="space-y-3 mb-10">
                  {[
                    'Live AI demo customized to your industry',
                    'ROI calculation for your business',
                    'See integration with your existing tools',
                    'Full Q&A with our team',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CalendlyButton
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-200 glow-button group"
                  >
                    Book Free Demo
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </CalendlyButton>
                </div>
              </div>

              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
