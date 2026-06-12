'use client'

import { useRef } from 'react'
import { Phone, Calendar, Users, BarChart2, MessageSquare, Share2 } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import SectionZone from '@/components/SectionZone'
import Card3D from '@/components/Card3D'
import { useScrollAnimation } from '@/components/animations/useScrollAnimation'

const solutions = [
  { icon: MessageSquare, title: 'AI Chatbot Automations', desc: 'Automate customer conversations across your website, social media, and messaging platforms. AI chatbots answer questions, qualify leads, book appointments, and support customers instantly—24/7.' },
  { icon: Calendar, title: 'Appointment Booking Automation', desc: 'Eliminate scheduling headaches with intelligent appointment management. Automatically book, confirm, reschedule, and remind customers while keeping your calendar perfectly organized.' },
  { icon: Users, title: 'AI Lead Generation', desc: 'Turn more visitors into qualified opportunities automatically. AI identifies, captures, qualifies, and nurtures leads so your sales team can focus on closing deals instead of chasing prospects.' },
  { icon: Share2, title: 'AI Social Media Content Automation', desc: 'Create and publish engaging content without the manual workload. AI generates posts, schedules content, tracks performance, and helps maintain a consistent brand presence across platforms.' },
  { icon: BarChart2, title: 'Generative AI Marketing', desc: 'Launch smarter marketing campaigns powered by AI. Generate high-converting ads, emails, landing page copy, and marketing assets tailored to your audience in minutes.' },
  { icon: Phone, title: 'AI Call Agents', desc: 'Deploy human-like AI agents that handle calls around the clock. Answer inquiries, qualify leads, book appointments, and transfer important conversations to your team when needed.' },
]

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <SectionZone zone="solutions" id="solutions" className="section-padding overflow-hidden">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d border-cyan-500/30">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300 font-medium">Our AI Products</span>
          </div>
        </div>

        <div data-animate className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Powerful AI
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Deploy intelligent automation across every channel. From customer support to marketing, our AI solutions transform how you operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, i) => (
            <Card3D key={i}>
              <div data-animate className="glass-panel-3d module-card rounded-2xl p-8 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:from-cyan-600/30 group-hover:to-emerald-600/30 transition-colors duration-300">
                  <solution.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-display font-700 text-white mb-4">{solution.title}</h3>
                <p className="text-slate-400 leading-relaxed">{solution.desc}</p>
              </div>
            </Card3D>
          ))}
        </div>

        <div data-animate className="flex flex-col sm:flex-row items-center justify-center gap-4 glass-panel-3d rounded-3xl p-8">
          <div className="text-center sm:text-left">
            <div className="text-xl font-display font-700 text-white mb-1">Ready to put AI to work?</div>
            <div className="text-slate-400 text-sm">Setup takes less than 48 hours. No technical knowledge required.</div>
          </div>
          <CalendlyButton className="btn-shine flex-shrink-0 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-200 glow-button">
            Book Free Consultation
          </CalendlyButton>
        </div>
      </div>
    </SectionZone>
  )
}
