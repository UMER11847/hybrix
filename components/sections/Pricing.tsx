'use client'

import { CheckCircle, Zap, Building2, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '$249',
    period: '/month',
    setupFee: '$499 Setup',
    description:
      'Perfect for local businesses looking to automate lead capture and appointment scheduling.',
    features: [
      'AI Chatbot',
      'Appointment Booking Automation',
      'Lead Capture Forms',
      'Basic CRM Integration',
      'Monthly Reporting',
      'Best For: Dentists',
      'Best For: Clinics',
      'Best For: Realtors',
      'Best For: Small Businesses',
    ],
    cta: 'Get Started',
    popular: false,
    accent: 'border-white/8',
    ctaStyle:
      'bg-white/8 hover:bg-white/12 text-white border border-white/10',
  },
  {
    name: 'Growth',
    icon: TrendingUp,
    price: '$599',
    period: '/month',
    setupFee: '$1,499 Setup',
    description:
      'Designed for businesses ready to scale with AI-powered lead generation and marketing automation.',
    features: [
      'AI Chatbot',
      'Appointment Automation',
      'AI Lead Generation',
      'Social Media Automation',
      'CRM Integration',
      'Monthly Optimization',
      'Best For: Real Estate Agencies',
      'Best For: Law Firms',
      'Best For: Insurance Agencies',
      'Best For: Marketing Agencies',
    ],
    cta: 'Most Popular — Book Demo',
    popular: true,
    accent: 'border-emerald-500/40',
    ctaStyle:
      'bg-emerald-500 hover:bg-emerald-400 text-white glow-button',
  },
  {
    name: 'Pro',
    icon: Building2,
    price: '$1,499',
    period: '/month',
    setupFee: '$3,499 Setup',
    description:
      'A complete AI employee system combining customer support, lead generation, and marketing automation.',
    features: [
      'AI Chatbot',
      'AI Call Agent',
      'Lead Generation Automation',
      'Social Media Automation',
      'Generative AI Marketing',
      'CRM & Workflow Automation',
      'Priority Support',
      'Best For: Multi-Location Businesses',
      'Best For: Healthcare Groups',
      'Best For: Established Service Companies',
    ],
    cta: 'Book Strategy Call',
    popular: false,
    accent: 'border-white/8',
    ctaStyle:
      'bg-white/8 hover:bg-white/12 text-white border border-white/10',
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: '$2,499',
    period: '/month',
    setupFee: 'Starting at $4,999 Setup',
    description:
      'Enterprise-grade AI automation with custom workflows, integrations, and dedicated support.',
    features: [
      'Everything in Pro',
      'Custom AI Agents',
      'Multiple Integrations',
      'Advanced Analytics',
      'Dedicated Account Manager',
      'Custom Workflows',
      'Best For: Large Healthcare Networks',
      'Best For: Franchises',
      'Best For: Call Centers',
      'Best For: Enterprises',
    ],
    cta: 'Contact Sales',
    popular: false,
    accent: 'border-white/8',
    ctaStyle:
      'bg-white/8 hover:bg-white/12 text-white border border-white/10',
  },
]

const services = [
  {
    name: 'AI Chatbot Setup',
    setupFee: '$299',
    monthlyFee: '$99',
    features: [
      'Custom conversation flows',
      'Knowledge base integration',
      '24/7 lead capture',
    ],
  },
  {
    name: 'Appointment Automation',
    setupFee: '$349',
    monthlyFee: '$129',
    features: [
      'Calendar sync',
      'Automated reminders',
      'Booking workflows',
    ],
  },
  {
    name: 'AI Call Handling',
    setupFee: '$499',
    monthlyFee: '$199',
    features: [
      'Live call answering',
      'Lead qualification',
      'Call summaries',
    ],
  },
  {
    name: 'AI Lead Generation',
    setupFee: '$999',
    monthlyFee: '$499–$2,999/month',
    features: [
      'Lead qualification',
      'Automated follow-ups',
      'CRM integration',
      'Lead scoring',
    ],
  },
  {
    name: 'AI Social Media Content Automation',
    setupFee: '$499',
    monthlyFee: '$299–$1,499/month',
    features: [
      'Content generation',
      'Scheduling',
      'Performance reports',
      'Multi-platform posting',
    ],
  },
  {
    name: 'Generative AI Marketing',
    setupFee: '$999–$2,999',
    monthlyFee: '$499–$2,499/month',
    features: [
      'Ad copy generation',
      'Email campaigns',
      'Landing pages',
      'Marketing assets',
    ],
  },
]

function TrendingUp(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding bg-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 blur-[100px] pointer-events-none" />

        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300 font-medium">
              HYBRIX AI PRICING
            </span>
          </div>
        </div>

        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Build Your
            <span className="gradient-text"> AI Workforce</span>
          </h2>

          <p className="text-lg text-slate-400">
            From AI chatbots and appointment booking to AI call agents and
            complete marketing automation, Hybrix helps businesses capture
            more leads, automate operations, and scale without hiring more
            staff.
          </p>
        </div>

        <div className="mb-12 rounded-3xl border border-emerald-500/20 glass p-8 text-center">
          <h3 className="text-2xl font-display font-700 text-white mb-3">
            Most Clients Save 20–40 Hours Per Week
          </h3>

          <p className="text-slate-400 mb-6">
            Recover more leads, automate repetitive work, and generate ROI
            within weeks—not months.
          </p>

          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-200 glow-button"
          >
            Book Free Strategy Call
            <ArrowRight size={16} />
          </a>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400 font-semibold mb-3">
            Recommended Hybrix Packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative glass border ${plan.accent} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'ring-1 ring-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.12)]'
                  : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-emerald-500/20' : 'bg-white/5'
                  }`}
                >
                  <plan.icon
                    size={18}
                    className={
                      plan.popular
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                    }
                  />
                </div>

                <span className="text-lg font-display font-700 text-white">
                  {plan.name}
                </span>
              </div>

              <div className="mb-5">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-emerald-400">
                    {plan.setupFee}
                  </span>
                </div>

                <span className="text-4xl font-display font-800 text-white">
                  {plan.price}
                </span>

                <span className="text-slate-500 text-sm ml-1">
                  {plan.period}
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-7 leading-relaxed min-h-[72px]">
                {plan.description}
              </p>

              <a
                href="#demo"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 mb-8 ${plan.ctaStyle}`}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </a>

              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="text-emerald-400 flex-shrink-0 mt-0.5"
                    />

                    <span className="text-sm text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Individual Services */}
        <div className="mt-32">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h3 className="font-display text-4xl font-800 text-white mb-4">
              Individual
              <span className="gradient-text"> Service Pricing</span>
            </h3>

            <p className="text-slate-400 text-lg">
              Need a specific solution instead of a complete package? Choose
              individual AI services tailored to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="glass border border-white/8 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <h4 className="text-xl font-display font-700 text-white mb-4">
                  {service.name}
                </h4>

                <div className="mb-6">
                  <div className="text-emerald-400 text-sm font-semibold mb-1">
                    Setup Fee
                  </div>

                  <div className="text-2xl font-display font-800 text-white mb-3">
                    {service.setupFee}
                  </div>

                  <div className="text-emerald-400 text-sm font-semibold mb-1">
                    Monthly Management
                  </div>

                  <div className="text-lg font-semibold text-slate-200">
                    {service.monthlyFee}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle
                        size={15}
                        className="text-emerald-400 flex-shrink-0 mt-0.5"
                      />

                      <span className="text-sm text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#demo"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 bg-white/8 hover:bg-white/12 text-white border border-white/10"
                >
                  Book Consultation
                  <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          All plans include onboarding, strategy consultation, AI setup,
          optimization, and ongoing support.
        </p>
      </div>


    </section>
  )
}