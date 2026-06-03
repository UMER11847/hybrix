'use client'
import { useState } from 'react'
import { Shield, Clock, Zap, Globe, Phone, Mail, MessageSquare, ChevronDown, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/constants'

// --- TRUST SECTION ---
const trustItems = [
  { icon: Shield, title: 'Enterprise-Grade Security', desc: 'SOC 2 compliant infrastructure. Your customer data is always encrypted and protected.' },
  { icon: Clock, title: 'Setup in 48 Hours', desc: 'Our team handles everything. You\'re live and automated within 2 business days.' },
  { icon: Zap, title: '99.9% Uptime SLA', desc: 'Built on redundant cloud infrastructure. Your AI never goes offline.' },
  { icon: Globe, title: 'Multi-Platform Support', desc: 'Works on your website, WhatsApp, phone system, and any CRM you already use.' },
]

export function Trust() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-800 text-white mb-4">
            Built to Be <span className="gradient-text">Trusted</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">Enterprise infrastructure, professional support, and the reliability your business depends on.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {trustItems.map((item, i) => (
            <div key={i} className="glass border border-white/6 rounded-2xl p-6 card-hover">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon size={18} className="text-emerald-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Partner logos placeholder */}
        <div className="glass border border-white/6 rounded-3xl p-8">
          <div className="text-center text-xs text-slate-600 uppercase tracking-widest mb-8">Trusted Integrations</div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['HubSpot', 'Salesforce', 'Google Calendar', 'WhatsApp Business', 'Calendly', 'Twilio', 'Zoho CRM', 'Slack'].map((logo) => (
              <div key={logo} className="px-5 py-2.5 glass-light rounded-xl border border-white/5">
                <span className="text-slate-500 text-sm font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- ABOUT SECTION ---
export function About() {
  return (
    <section id="about" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 mb-8">
              <span className="text-sm text-emerald-300 font-medium">About HybrixAI</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight text-white mb-6">
              We're On a Mission to Give Every Business an
              <span className="gradient-text"> AI-Powered Team</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              HybrixAI was built because we watched too many great businesses lose customers simply because nobody answered the phone. Local clinics, real estate agencies, salons — hardworking businesses that deserve better tools.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              We build AI call assistants and chatbots that work exactly like a trained employee — just without the salary, the sick days, or the 5 PM checkout. Our mission is to make enterprise-grade AI automation accessible to every service business, not just the Fortune 500.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '500+', label: 'Businesses automated' },
                { value: '2M+', label: 'Calls handled by AI' },
                { value: '48hrs', label: 'Avg. setup time' },
                { value: '6', label: 'Industries served' },
              ].map((s, i) => (
                <div key={i} className="glass border border-white/6 rounded-2xl p-5">
                  <div className="text-3xl font-display font-800 gradient-text mb-1">{s.value}</div>
                  <div className="text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass border border-white/8 rounded-3xl p-8">
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Our Values</div>
              {[
                { title: 'Simplicity First', desc: 'AI should feel effortless for business owners, not engineers.' },
                { title: 'Real Results', desc: 'We measure success by how much time and money we save your business.' },
                { title: 'Human + AI Together', desc: 'Our AI empowers your team, never replaces the human connection that matters.' },
                { title: 'Always Improving', desc: 'Your AI assistant learns and improves continuously based on interactions.' },
              ].map((v, i) => (
                <div key={i} className="py-4 border-b border-white/5 last:border-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{v.title}</div>
                      <div className="text-sm text-slate-500">{v.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#demo"
              className="flex items-center justify-between px-7 py-5 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-semibold hover:opacity-90 transition-opacity group"
            >
              <div>
                <div className="text-base font-display font-700">Work With Us</div>
                <div className="text-emerald-200 text-sm">Book your free consultation today</div>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- FAQ SECTION ---
const faqs = [
  { q: 'Does the AI actually sound human?', a: 'Yes. Our AI voices are trained specifically to sound natural, warm, and professional — not robotic. Most customers don\'t realize they\'re speaking to AI. We customize the voice and tone to match your brand perfectly.' },
  { q: 'Can the AI transfer calls to a human?', a: 'Absolutely. You define the rules. If a customer asks for a human, or triggers a specific keyword (like "emergency" or "I want to speak to a manager"), the AI seamlessly transfers the call to the right person on your team.' },
  { q: 'Does it work outside office hours?', a: 'That\'s one of our most powerful features. Your AI works 24/7 — weekends, holidays, and at 2 AM. All calls and chats outside business hours are handled, logged, and summarized for your team to review the next morning.' },
  { q: 'Can it speak multiple languages?', a: 'Yes. HybrixAI supports multiple languages. The AI can detect the customer\'s language and respond accordingly, or you can configure specific language flows based on your customer base.' },
  { q: 'Can humans take over a conversation?', a: 'Yes, at any time. Your team has full visibility into the dashboard and can join any call or chat manually. The AI can also escalate specific conversations to human agents based on rules you define.' },
  { q: 'Can it integrate with my existing CRM?', a: 'Yes. HybrixAI integrates with HubSpot, Salesforce, Zoho, and other major CRM platforms. Lead data, call notes, and conversation summaries are automatically synced — no manual entry required.' },
  { q: 'How long does setup take?', a: 'Most businesses are live within 48 hours. Our team handles the entire setup — from integrating with your phone system to training the AI on your business. You review and approve before launch.' },
  { q: 'Is it customizable for my specific business?', a: 'Completely. The AI is trained specifically for your business — your services, your FAQs, your brand voice, your processes. It\'s not a generic AI; it\'s your AI, built to represent your business professionally.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
            <span className="text-sm text-slate-300 font-medium">Common Questions</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white mb-5">
            Everything You Need to Know
          </h2>
          <p className="text-slate-400 text-lg">No fluff. Direct answers to what business owners actually ask.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass border border-white/6 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-base font-medium text-white pr-8">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-7 pb-6">
                  <div className="h-px bg-white/5 mb-5" />
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 glass border border-white/8 rounded-3xl p-8 text-center">
          <p className="text-white font-semibold mb-2">Still have questions?</p>
          <p className="text-slate-400 text-sm mb-6">Our team will answer any specific questions about your business requirements.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@nexusai.io" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-300 hover:text-white text-sm transition-colors">
              <Mail size={15} /> Email Us
            </a>
            <a href="https://wa.me/1234567890" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/20 border border-green-500/20 text-green-300 hover:text-green-200 text-sm transition-colors">
              <MessageSquare size={15} /> WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- FOOTER ---
export function Footer() {
  return (
    <footer id="contact" className="bg-primary border-t border-white/5">
      {/* CTA Banner */}
      <div id="book-demo" className="border-b border-white/5 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="relative overflow-hidden glass border border-emerald-500/20 rounded-3xl p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 to-emerald-700/8" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-800 text-white mb-5">
                Ready to Automate Your<br />
                <span className="gradient-text">Customer Communications?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Book a free demo and we'll show you exactly how HybrixAI can be set up for your specific business in 48 hours.
              </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all duration-200 glow-button"
                >
                  Book Free Demo
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass border border-white/10 hover:border-green-500/40 text-white font-semibold transition-all duration-200"
                >
                  <MessageSquare size={17} className="text-green-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <Zap size={15} className="text-white" fill="white" />
              </div>
              <span className="font-display font-700 text-xl text-white">Hybrix<span className="gradient-text">AI</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              AI-powered call assistants and chatbots for modern service businesses.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 glass-light rounded-xl flex items-center justify-center hover:border-emerald-500/30 border border-white/5 transition-colors">
                  <Icon size={15} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: 'Product', links: [
                ['AI Call Assistant', '#solutions'],
                ['AI Chatbot', '#solutions'],
                ['Industries', '#industries'],
                ['Pricing', '#pricing'],
                ['How It Works', '#how-it-works'],
              ]
            },
            {
              title: 'Company', links: [
                ['About Us', '#about'],
                ['Case Studies', '#'],
                ['Blog', '#'],
                ['Careers', '#'],
                ['Privacy Policy', '#'],
              ]
            },
            {
              title: 'Contact', links: [
                ['hello@nexusai.io', 'mailto:hello@nexusai.io'],
                ['Book a Demo', CALENDLY_URL],
                ['WhatsApp', 'https://wa.me/1234567890'],
                ['Support', '#'],
                ['Terms of Service', '#'],
              ]
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs text-slate-600 uppercase tracking-widest mb-5 font-medium">{col.title}</div>
              <div className="space-y-3">
                {col.links.map(([label, href]) => (
                  <a key={label} href={href} className="block text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© 2024 HybrixAI. All rights reserved.</p>
          <p className="text-slate-600 text-sm">Built for businesses that refuse to miss a single customer.</p>
        </div>
      </div>
    </footer>
  )
}

// --- WHATSAPP FLOAT ---
export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.4)] transition-all duration-200 whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}
