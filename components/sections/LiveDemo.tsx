'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, Send, Loader2 } from 'lucide-react'
import SectionZone from '@/components/SectionZone'
import { useScrollAnimation } from '@/components/animations/useScrollAnimation'

type Message = {
  role: 'user' | 'ai'
  text: string
}

const GREETING =
  "👋 Hi there! I'm the HybrixAI demo assistant. Ask me anything — try booking an appointment, asking about services, or how AI can help your business."

export default function LiveDemo() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  useScrollAnimation(sectionRef)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || isLoading) return

    const userMessage: Message = { role: 'user', text }
    const nextMessages = [...messages, userMessage]

    setMessages(nextMessages)
    setInput('')
    setError(null)
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setMessages((prev) => [...prev, { role: 'ai', text: data.text }])
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send message.'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SectionZone zone="live-demo" id="live-demo" className="section-padding overflow-hidden">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto px-6 lg:px-10 relative">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300 font-medium">Try It Live</span>
          </div>
        </div>

        <div data-animate className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight tracking-tight text-white mb-5">
            Experience the AI
            <span className="gradient-text"> Before You Commit</span>
          </h2>
          <p className="text-lg text-slate-400">
            See exactly how your customers will interact with your AI. It's this smooth, this natural, this fast.
          </p>
        </div>

        <div data-animate className="grid lg:grid-cols-2 gap-8 items-start command-console glass-panel-3d rounded-3xl p-6 lg:p-8">
          <div className="glass-light border border-white/8 rounded-3xl overflow-hidden">
            <div className="border-b border-white/6 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <MessageSquare size={14} className="text-emerald-400" />
                  <span className="text-sm text-slate-400 font-medium">AI Chat Assistant</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
                <span className={`text-xs ${isLoading ? 'text-yellow-400' : 'text-green-400'}`}>
                  {isLoading ? 'Thinking...' : 'Online'}
                </span>
              </div>
            </div>

            <div className="h-72 overflow-y-auto p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={14} className="text-emerald-400" />
                </div>
                <div className="glass-light rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-[75%]">
                  {GREETING}
                </div>
              </div>

              {messages.map((msg, i) => (
                <div key={i} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'ai' && (
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={14} className="text-emerald-400" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm max-w-[75%] whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-emerald-500/20 text-emerald-100 rounded-br-sm'
                        : 'glass-light text-slate-300 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-end gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={14} className="text-emerald-400" />
                  </div>
                  <div className="glass-light rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400/60 animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400/60 animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400/60 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {error && (
              <div className="px-6 pb-2">
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2">
                  {error}
                </p>
              </div>
            )}

            <div className="border-t border-white/6 p-4 flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="Type a message..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/40 transition-colors disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-11 h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                {isLoading ? (
                  <Loader2 size={16} className="text-white animate-spin" />
                ) : (
                  <Send size={16} className="text-white" />
                )}
              </button>
            </div>
          </div>

          <div className="glass-light border border-white/8 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">
                  Marketing Analytics
                </div>
                <h3 className="text-xl font-display font-700 text-white mt-2">
                  Real-Time Performance Dashboard
                </h3>
              </div>

              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                Live Data
              </div>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Leads', value: '941' },
                { label: 'Conversions', value: '236' },
                { label: 'CTR', value: '7.2%' },
                { label: 'ROI', value: '312%' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-light rounded-2xl p-4 border border-white/5"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Analytics Charts */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Traffic Sources */}
              <div className="glass-light rounded-2xl p-5">
                <div className="text-sm text-white font-semibold mb-4">
                  Traffic Sources
                </div>

                <div className="space-y-3">
                  {[
                    ['Google', 82],
                    ['Facebook', 65],
                    ['LinkedIn', 48],
                    ['Instagram', 35],
                  ].map(([name, value]) => (
                    <div key={name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">{name}</span>
                        <span className="text-slate-300">{value}%</span>
                      </div>

                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversions Chart */}
              <div className="glass-light rounded-2xl p-5">
                <div className="text-sm text-white font-semibold mb-4">
                  Weekly Conversions
                </div>

                <div className="flex items-end justify-between h-32">
                  {[40, 55, 48, 72, 61, 84, 95].map((h, i) => (
                    <div
                      key={i}
                      className="w-8 bg-emerald-500/70 rounded-t-lg"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="flex justify-between mt-3 text-[7px] text-slate-500">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
              </div>
            </div>

            {/* Bottom KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="glass-light rounded-2xl p-4 text-center">
                <div className="text-xl font-bold text-white">72%</div>
                <div className="text-xs text-slate-500">
                  SEO Score
                </div>
              </div>

              <div className="glass-light rounded-2xl p-4 text-center">
                <div className="text-xl font-bold text-white">25%</div>
                <div className="text-xs text-slate-500">
                  Ranking Growth
                </div>
              </div>

              <div className="glass-light rounded-2xl p-4 text-center">
                <div className="text-xl font-bold text-white">44</div>
                <div className="text-xs text-slate-500">
                  Trust Flow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionZone>
  )
}
