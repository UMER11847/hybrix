'use client'
import { MessageSquare, Calendar, DollarSign, Share2, TrendingDown, PhoneMissed } from 'lucide-react'

const painPoints = [
  {
    icon: MessageSquare,
    title: 'Website Visitors Go Cold',
    description: 'Without instant responses, prospects leave your website before becoming customers.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/10',
  },
  {
    icon: Calendar,
    title: 'Booking Friction Costs Sales',
    description: 'Complicated scheduling processes cause cancellations and missed opportunities.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/10',
  },
  {
    icon: DollarSign,
    title: 'You\'re Paying For Leads You Never Capture',
    description: 'Marketing brings traffic, but poor lead capture turns ad spend into wasted money.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/10',
  },
  {
    icon: Share2,
    title: 'Your Competitors Post More Than You',
    description: 'Inconsistent social media presence makes your business easy to forget.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/10',
  },
  {
    icon: TrendingDown,
    title: 'Marketing Bottlenecks Slow Growth',
    description: 'Creating content manually limits how fast your business can scale.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/10',
  },
  {
    icon: PhoneMissed,
    title: 'Calls Don\'t Wait For Business Hours',
    description: 'Customers call when they\'re ready to buy. If nobody answers, they move on.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/10',
  },
]

export default function PainPoints() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300 font-medium">The Real Problem</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Still Losing Customers Because
            <span className="gradient-text"> Nobody Answers?</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Every business owner knows the feeling. The phone rings at the wrong time, your team is busy, and another potential customer walks away forever.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className={`glass border ${point.border} rounded-2xl p-6 card-hover group`}
            >
              <div className={`w-12 h-12 ${point.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <point.icon size={22} className={point.color} />
              </div>
              <h3 className="text-base font-semibold text-white mb-3">{point.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 glass border border-white/8 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl font-display font-700 text-white mb-4">
            The average business misses{' '}
            <span className="gradient-text">62% of incoming calls.</span>
          </p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            That's not just missed calls — that's missed appointments, missed sales, and missed revenue adding up every single day.
          </p>
        </div>
      </div>
    </section>
  )
}
