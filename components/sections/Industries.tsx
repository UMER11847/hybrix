'use client'
import { Stethoscope, Home, Scissors, UtensilsCrossed, Car, Scale } from 'lucide-react'

const industries = [
  {
    icon: Stethoscope,
    title: 'Clinics & Doctors',
    problem: 'Patients call for appointments, test results, and emergencies at all hours. Reception staff can\'t keep up.',
    solution: 'AI answers every call, books appointments, sends reminders, and escalates urgent cases to medical staff instantly.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
    tag: 'Healthcare',
  },
  {
    icon: Home,
    title: 'Real Estate Agencies',
    problem: 'Leads call at all hours asking about listings. Missing a single call can mean losing a million-dollar deal.',
    solution: 'AI qualifies every inquiry, schedules property viewings, and immediately alerts agents about serious buyers.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
    tag: 'Real Estate',
  },
  {
    icon: Scissors,
    title: 'Salons & Spas',
    problem: 'Stylists are with clients all day and can\'t answer booking calls. No-shows cost the business daily.',
    solution: 'AI handles all booking calls, sends reminders to reduce no-shows, and manages cancellations automatically.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
    tag: 'Beauty',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    problem: 'Reservation calls come in during the busiest kitchen hours. Staff are too overwhelmed to answer properly.',
    solution: 'AI takes reservations, answers menu questions, handles delivery inquiries, and manages waitlists hands-free.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
    tag: 'Hospitality',
  },
  {
    icon: Car,
    title: 'Car Dealerships',
    problem: 'Customers call to ask about inventory, pricing, and test drives. Sales teams miss high-intent buyers daily.',
    solution: 'AI pre-qualifies buyers, schedules test drives, and routes serious customers straight to your top salespeople.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
    tag: 'Automotive',
  },
  {
    icon: Scale,
    title: 'Law Firms',
    problem: 'Potential clients need immediate responses. Missing their call means they call the next firm on their list.',
    solution: 'AI intakes new cases 24/7, gathers initial case details, qualifies leads, and schedules consultations instantly.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
    tag: 'Legal',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300 font-medium">Industries We Serve</span>
          </div>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
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
            <div
              key={i}
              className={`glass border border-white/6 ${ind.border} rounded-3xl p-7 card-hover group cursor-default`}
            >
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
                  <div className="text-xs uppercase tracking-widest text-slate-600 mb-2 font-medium">The Problem</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{ind.problem}</p>
                </div>
                <div className="glass-light rounded-xl p-4 border border-white/4">
                  <div className={`text-xs uppercase tracking-widest ${ind.color} mb-2 font-medium`}>AI Solution</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{ind.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">Don't see your industry?</p>
          <a href="#contact" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors underline underline-offset-4">
            Talk to us — we build custom AI solutions for any service business
          </a>
        </div>
      </div>
    </section>
  )
}
