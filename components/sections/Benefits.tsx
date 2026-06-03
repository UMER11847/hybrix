'use client'
import { DollarSign, TrendingUp, Clock, Star, Users, Zap } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Cut Staff Costs by 60%',
    description: 'Replace expensive call center staff and receptionists with AI that works 24/7 for a fraction of the cost.',
    stat: '60%',
    statLabel: 'Cost Reduction',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Never Miss Another Lead',
    description: 'Every inquiry gets captured, qualified, and routed. Midnight or Monday morning — your AI is always on.',
    stat: '3x',
    statLabel: 'More Leads',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Zap,
    title: 'Instant Response Times',
    description: 'Customers get answers in under 1 second. No hold music, no waiting, no frustration.',
    stat: '<1s',
    statLabel: 'Response Time',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Star,
    title: 'Better Customer Experience',
    description: 'Consistent, professional, and friendly responses every time. Your brand reputation is protected.',
    stat: '94%',
    statLabel: 'Satisfaction Rate',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Users,
    title: 'Scale Without Hiring',
    description: 'Handle 100 calls simultaneously without adding a single employee. Your AI scales with you.',
    stat: '∞',
    statLabel: 'Simultaneous Calls',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Weekends, holidays, after-hours — your business never closes. Customers always reach someone.',
    stat: '24/7',
    statLabel: 'Always Available',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
]

export default function Benefits() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-emerald-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300 font-medium">Business Results</span>
          </div>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Why Smart Businesses
            <span className="gradient-text"> Choose HybrixAI</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Real results. Real ROI. Businesses that switch to AI automation see immediate, measurable improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="glass border border-white/6 rounded-3xl p-7 card-hover group">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 ${b.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <b.icon size={22} className={b.color} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-display font-800 ${b.color}`}>{b.stat}</div>
                  <div className="text-xs text-slate-600">{b.statLabel}</div>
                </div>
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{b.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* ROI Calculator teaser */}
        <div className="mt-16 relative overflow-hidden glass border border-white/8 rounded-3xl p-10 md:p-14">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-700/5" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">ROI Estimate</div>
              <h3 className="font-display text-3xl md:text-4xl font-800 text-white mb-4">
                How Much Are You Losing Every Month?
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                If your business receives 200+ calls per month, you're likely losing thousands in missed revenue. Our AI pays for itself within the first week.
              </p>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 glow-button"
              >
                Calculate Your ROI
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Missed calls / month', value: '~140', note: 'industry avg at 70% miss rate' },
                { label: 'Value per missed lead', value: '$180', note: 'avg across service businesses' },
                { label: 'Monthly revenue lost', value: '$25,200', note: 'before HybrixAI' },
                { label: 'HybrixAI cost / month', value: 'From $299', note: 'full AI automation' },
              ].map((item, i) => (
                <div key={i} className="glass-light rounded-2xl p-5">
                  <div className="text-lg font-display font-700 text-white mb-1">{item.value}</div>
                  <div className="text-xs text-slate-400 font-medium mb-1">{item.label}</div>
                  <div className="text-xs text-slate-600">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
