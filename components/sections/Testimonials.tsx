'use client'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Ben',
    role: 'Owner, Stephens Family Clinic',
    industry: 'Healthcare',
    text: 'We were missing nearly 40% of our appointment calls. Within the first week of HybrixAI, our scheduling was fully automated and we saw an immediate increase in booked appointments. The AI sounds completely professional.',
    rating: 5,
    stat: '40% more appointments',
    color: 'border-emerald-500/20',
  },
  {
    name: 'Sarah Lee',
    role: 'Director, Prime Realty Group',
    industry: 'Real Estate',
    text: 'High-value property leads used to slip through the cracks after hours. Now the AI captures every single inquiry, qualifies them, and sends me an instant summary. I\'ve closed 3 deals that would have been missed.',
    rating: 5,
    stat: '3 deals from after-hours leads',
    color: 'border-emerald-500/20',
  },
  {
    name: 'Layla Kane',
    role: 'Manager, Glow Beauty Studio',
    industry: 'Salon & Spa',
    text: 'My stylists can\'t pick up calls during appointments. HybrixAI handles all our bookings now. Our no-show rate dropped by 60% because the AI sends reminders. It paid for itself in the first month.',
    rating: 5,
    stat: '60% fewer no-shows',
    color: 'border-emerald-500/20',
  },
  {
    name: 'Harald Schmidt',
    role: 'GM, AutoHub Car Dealership',
    industry: 'Automotive',
    text: 'Customers ask detailed questions about vehicles all the time. The AI handles FAQs, qualifies serious buyers, and schedules test drives automatically. Our sales team now only talks to hot leads.',
    rating: 5,
    stat: '2.5x more qualified leads',
    color: 'border-emerald-500/20',
  },
  {
    name: 'Salena Jones',
    role: 'Founder, Legal Law Associates',
    industry: 'Legal',
    text: 'Client intake used to be a mess. The AI now handles initial consultations at all hours, gathers case details, and only escalates cases that match our practice areas. Incredibly efficient and professional.',
    rating: 5,
    stat: '80% reduction in intake time',
    color: 'border-emerald-500/20',
  },
  {
    name: 'Nade Campos',
    role: 'Owner, Spice Route Restaurant',
    industry: 'Hospitality',
    text: 'Friday nights were chaos — the phone never stopped and we kept missing calls. HybrixAI handles all reservations, answers menu questions, and manages our waitlist. It\'s like having a full-time host.',
    rating: 5,
    stat: 'Zero missed reservations',
    color: 'border-emerald-500/20',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20">
            <Star size={12} className="text-emerald-400" fill="currentColor" />
            <span className="text-sm text-emerald-300 font-medium">5-Star Reviews</span>
          </div>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Businesses Love
            <span className="gradient-text"> What AI Does For Them</span>
          </h2>
          <p className="text-lg text-slate-400">
            Real business owners sharing real results after switching to HybrixAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className={`glass border ${t.color} rounded-3xl p-7 card-hover flex flex-col`}>
              {/* Quote icon */}
              <Quote size={20} className="text-slate-700 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-emerald-400" fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-1">
                "{t.text}"
              </p>

              {/* Result badge */}
              <div className="glass-light rounded-xl px-4 py-2.5 mb-5 border border-white/5">
                <div className="text-xs text-slate-500 mb-0.5">Key Result</div>
                <div className="text-sm font-semibold text-white">{t.stat}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 border border-white/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-2.5 py-1 rounded-full glass border border-white/8 text-slate-400">
                    {t.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
