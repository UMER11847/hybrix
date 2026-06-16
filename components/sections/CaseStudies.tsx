"use client"
import { useRef } from 'react'
import { TrendingUp, ArrowRight } from 'lucide-react'
import SectionZone from '@/components/SectionZone'
import Card3D from '@/components/Card3D'
import { useScrollAnimation } from '@/components/animations/useScrollAnimation'

const caseStudies = [
  {
    tag: 'Healthcare',
    headline: 'How a New York Clinic Reduced Missed Calls by 70% in 30 Days',
    problem: 'A busy family clinic with 3 doctors was missing 65–70% of incoming calls daily. Their single receptionist was overwhelmed with walk-ins, leaving calls unanswered during peak hours.',
    solution: 'HybrixAI deployed an AI Call Assistant that answered 100% of calls within 2 rings, handled appointment bookings, sent automated reminders, and escalated urgent medical queries to staff.',
    results: [
      { metric: '70%', label: 'Fewer missed calls' },
      { metric: '3x', label: 'More appointments booked' },
      { metric: '45%', label: 'Fewer no-shows' },
      { metric: '48 hrs', label: 'Setup time' },
    ],
    quote: '"We went from drowning in missed calls to having full visibility over every patient inquiry. It transformed our front desk."',
    author: 'Dr. Sarah Johnson, Clinic Owner',
    accent: 'from-emerald-500/10 to-emerald-700/10',
    border: 'border-emerald-500/20',
    tagColor: 'text-emerald-400 bg-emerald-500/10',
  },
  {
    tag: 'Real Estate',
    headline: 'Real Estate Agency Captures $400K+ in After-Hours Leads',
    problem: 'A mid-size real estate agency was losing high-value leads after 6 PM when agents went home. Competitors with 24/7 response were winning deals simply by answering the phone first.',
    solution: 'HybrixAI Chatbot and Call Assistant captured all after-hours inquiries, qualified buyers by budget and property type, and sent real-time alerts to the right agents.',
    results: [
      { metric: '$400K+', label: 'Leads captured after hours' },
      { metric: '5', label: 'New deals in first month' },
      { metric: '100%', label: 'Lead capture rate' },
      { metric: '2min', label: 'Avg response time' },
    ],
    quote: '"Three of our biggest deals this quarter came from AI-captured leads we would have completely missed. The ROI is extraordinary."',
    author: 'Agency Director, Prime Realty Group',
    accent: 'from-emerald-500/10 to-emerald-700/10',
    border: 'border-emerald-500/20',
    tagColor: 'text-emerald-400 bg-emerald-500/10',
  },
]

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useScrollAnimation(sectionRef)

  return (
    <SectionZone zone="case-studies" className="section-padding overflow-hidden">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20">
            <TrendingUp size={13} className="text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">Success Stories</span>
          </div>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Proven Results,
            <span className="gradient-text"> Real Businesses</span>
          </h2>
          <p className="text-lg text-slate-400">
            Case studies from businesses that have deployed HybrixAI and measured the difference.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <Card3D key={i} intensity={6}>
            <div data-animate className={`glass-panel-3d rounded-3xl overflow-hidden`}>
              <div className={`h-1 w-full bg-gradient-to-r ${cs.accent}`} />
              
              <div className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${cs.tagColor}`}>
                    {cs.tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-700 text-white mb-10">
                  {cs.headline}
                </h3>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <div>
                    <div className="text-xs text-slate-600 uppercase tracking-widest mb-3 font-medium">The Problem</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 uppercase tracking-widest mb-3 font-medium">Our Solution</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 uppercase tracking-widest mb-3 font-medium">The Results</div>
                    <div className="grid grid-cols-2 gap-3">
                      {cs.results.map((r, j) => (
                        <div key={j} className="glass-light rounded-xl p-3">
                          <div className="text-xl font-display font-800 text-white mb-0.5">{r.metric}</div>
                          <div className="text-xs text-slate-500">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
                  <div className="text-3xl text-slate-700 leading-none font-serif">"</div>
                  <div>
                    <p className="text-slate-300 text-sm italic leading-relaxed mb-2">{cs.quote.replace(/^"|"$/g, '')}</p>
                    <div className="text-xs text-slate-500">— {cs.author}</div>
                  </div>
                </div>
              </div>
            </div>
            </Card3D>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#demo" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors group">
            Book a demo to see results like these for your business
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </SectionZone>
  )
}
