'use client'
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'

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
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-200 glow-button group"
                  >
                    Book Free Demo
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Mini form */}
              <div id="form" className="glass-light rounded-2xl p-8 border border-white/6 scroll-mt-28">
                <div className="text-sm font-semibold text-white mb-6">Or, drop your info and we'll reach out:</div>
                <div className="space-y-4">
                  {[
                    { label: 'Business Name', type: 'text', placeholder: 'Ahmed Dental Clinic' },
                    { label: 'Your Name', type: 'text', placeholder: 'Dr. Ahmed' },
                    { label: 'Email Address', type: 'email', placeholder: 'ahmed@clinic.com' },
                    { label: 'Phone / WhatsApp', type: 'tel', placeholder: '+92 300 0000000' },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-xs text-slate-500 mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Industry</label>
                    <select className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-emerald-500/40 transition-colors">
                      <option value="">Select your industry</option>
                      <option>Healthcare / Clinic</option>
                      <option>Real Estate</option>
                      <option>Salon / Spa</option>
                      <option>Restaurant</option>
                      <option>Car Dealership</option>
                      <option>Law Firm</option>
                      <option>Other Service Business</option>
                    </select>
                  </div>
                    <button className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all duration-200 glow-button mt-2">
                    Request a Demo →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
