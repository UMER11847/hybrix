'use client'
import { CheckCircle, Zap, Building2, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses ready to stop missing calls and start capturing leads.',
    features: [
      'AI Call Assistant (up to 500 calls/mo)',
      'AI Chatbot for your website',
      'Appointment booking integration',
      'Lead capture & notifications',
      'Analytics dashboard',
      'WhatsApp integration',
      'Email support',
      '48-hour setup',
    ],
    cta: 'Get Started',
    popular: false,
    accent: 'border-white/8',
    ctaStyle: 'bg-white/8 hover:bg-white/12 text-white border border-white/10',
  },
  {
    name: 'Growth',
    icon: TrendingUp,
    price: '$599',
    period: '/month',
    description: 'For growing businesses that need a complete AI communication system.',
    features: [
      'AI Call Assistant (unlimited calls)',
      'Advanced AI Chatbot',
      'Multi-language support (5 languages)',
      'CRM integration (HubSpot, Salesforce)',
      'Call transfer to human agents',
      'Custom AI voice & personality',
      'Advanced analytics & reporting',
      'Priority support',
      '24-hour setup',
    ],
    cta: 'Most Popular — Book Demo',
    popular: true,
    accent: 'border-emerald-500/40',
    ctaStyle: 'bg-emerald-500 hover:bg-emerald-400 text-white glow-button',
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    period: 'pricing',
    description: 'For large businesses or chains needing full custom AI automation at scale.',
    features: [
      'Everything in Growth',
      'Multi-location support',
      'Unlimited languages',
      'Custom AI workflows',
      'Dedicated AI infrastructure',
      'Full API access',
      'White-label options',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
    accent: 'border-white/8',
    ctaStyle: 'bg-white/8 hover:bg-white/12 text-white border border-white/10',
  },
]

function TrendingUp(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300 font-medium">Simple Pricing</span>
          </div>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Transparent Pricing,
            <span className="gradient-text"> Serious ROI</span>
          </h2>
          <p className="text-lg text-slate-400">
            No hidden fees. No long-term contracts required. Cancel anytime. Most clients see full ROI within 2 weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative glass border ${plan.accent} rounded-3xl p-8 transition-all duration-300 ${
                plan.popular ? 'ring-1 ring-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.12)]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-emerald-500/20' : 'bg-white/5'}`}>
                  <plan.icon size={18} className={plan.popular ? 'text-emerald-400' : 'text-slate-400'} />
                </div>
                <span className="text-lg font-display font-700 text-white">{plan.name}</span>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-display font-800 text-white">{plan.price}</span>
                <span className="text-slate-500 text-sm ml-1">{plan.period}</span>
              </div>

              <p className="text-sm text-slate-400 mb-7 leading-relaxed">{plan.description}</p>

              <a
                href="#demo"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </a>

              <div className="space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-10">
          All plans include a free setup consultation and 14-day satisfaction guarantee.
        </p>
      </div>
    </section>
  )
}
