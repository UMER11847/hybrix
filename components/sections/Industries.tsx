'use client'

import { useRef } from 'react'
import { Stethoscope, Home, Scissors, UtensilsCrossed, Car, Scale } from 'lucide-react'
import SectionZone from '@/components/SectionZone'
import Card3D from '@/components/Card3D'
import { useScrollAnimation } from '@/components/animations/useScrollAnimation'

const industries = [
  { icon: Stethoscope, title: 'Clinics & Doctors', problem: "Patients call for appointments, test results, and emergencies at all hours. Reception staff can't keep up.", solution: 'AI answers every call, books appointments, sends reminders, and escalates urgent cases to medical staff instantly.', color: 'text-cyan-400', bg: 'bg-cyan-500/15', tag: 'Healthcare' },
  { icon: Home, title: 'Real Estate Agencies', problem: 'Leads call at all hours asking about listings. Missing a single call can mean losing a million-dollar deal.', solution: 'AI qualifies every inquiry, schedules property viewings, and immediately alerts agents about serious buyers.', color: 'text-violet-400', bg: 'bg-violet-500/15', tag: 'Real Estate' },
  { icon: Scissors, title: 'Salons & Spas', problem: "Stylists are with clients all day and can't answer booking calls. No-shows cost the business daily.", solution: 'AI handles all booking calls, sends reminders to reduce no-shows, and manages cancellations automatically.', color: 'text-pink-400', bg: 'bg-pink-500/15', tag: 'Beauty' },
  { icon: UtensilsCrossed, title: 'Restaurants', problem: 'Reservation calls come in during the busiest kitchen hours. Staff are too overwhelmed to answer properly.', solution: 'AI takes reservations, answers menu questions, handles delivery inquiries, and manages waitlists hands-free.', color: 'text-emerald-400', bg: 'bg-emerald-500/15', tag: 'Hospitality' },
  { icon: Car, title: 'Car Dealerships', problem: 'Customers call to ask about inventory, pricing, and test drives. Sales teams miss high-intent buyers daily.', solution: 'AI pre-qualifies buyers, schedules test drives, and routes serious customers straight to your top salespeople.', color: 'text-blue-400', bg: 'bg-blue-500/15', tag: 'Automotive' },
  { icon: Scale, title: 'Law Firms', problem: 'Potential clients need immediate responses. Missing their call means they call the next firm on their list.', solution: 'AI intakes new cases 24/7, gathers initial case details, qualifies leads, and schedules consultations instantly.', color: 'text-violet-400', bg: 'bg-violet-500/15', tag: 'Legal' },
]

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <SectionZone zone="industries" id="industries" className="section-padding overflow-hidden">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-3d border-violet-500/30">
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm text-violet-300 font-medium">Industries We Serve</span>
          </div>
        </div>

        <div data-animate className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Built For Businesses That{' '}
            <span className="gradient-text">Handle Customer Calls</span> Daily
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            No matter your industry, if your phone rings — HybrixAI is built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <Card3D key={i} intensity={10}>
              <div data-animate className={`glass-panel-3d orbit-card rounded-3xl p-7 h-full group cursor-default`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 ${ind.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <ind.icon size={24} className={ind.color} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${ind.bg} ${ind.color} border border-current/20`}>
                    {ind.tag}
                  </span>
                </div>
                <h3 className="text-xl font-display font-700 text-white mb-4">{ind.title}</h3>
                <div className="space-y-4">
                  <div className="glass-light rounded-xl p-4">
                    <div className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-medium">The Problem</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{ind.problem}</p>
                  </div>
                  <div className="glass-light rounded-xl p-4 border border-cyan-500/10">
                    <div className={`text-xs uppercase tracking-widest ${ind.color} mb-2 font-medium`}>AI Solution</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{ind.solution}</p>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        <div data-animate className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">Don&apos;t see your industry?</p>
          <a href="#demo" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors underline underline-offset-4">
            Talk to us — we build custom AI solutions for any service business
          </a>
        </div>
      </div>
    </SectionZone>
  )
}
