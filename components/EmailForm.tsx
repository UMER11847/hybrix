'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from '@/lib/constants'

const initialFormState = {
  businessName: '',
  name: '',
  email: '',
  phone: '',
  industry: '',
}

type Toast = {
  type: 'success' | 'error'
  message: string
}

export default function EmailForm() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [toast, setToast] = useState<Toast | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const isConfigured = Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const showToast = (message: string, type: Toast['type']) => {
    setToast({ message, type })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setSubmitted(true)

    if (!isConfigured) {
      setStatus('error')
      const message = 'EmailJS is not configured. Add your keys to your environment variables.'
      setErrorMessage(message)
      showToast(message, 'error')
      return
    }

    setStatus('sending')
    showToast('Sending your demo request...', 'success')
    setErrorMessage('')

    const templateParams = {
      business_name: formData.businessName,
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      industry: formData.industry,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormData(initialFormState)
      showToast('Thanks! Your demo request was sent successfully.', 'success')
    } catch (error) {
      setStatus('error')
      const message = 'Unable to send your request. Please try again later.'
      setErrorMessage(message)
      showToast(message, 'error')
      console.error('EmailJS send error:', error)
    }
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="glass-light relative rounded-2xl p-8 border border-white/6 scroll-mt-28"
    >
      <div className="text-sm font-semibold text-white mb-6">Or, drop your info and we'll reach out:</div>

      <div className="space-y-4">
        {[
          { label: 'Business Name', name: 'businessName', type: 'text', placeholder: 'Ahmed Dental Clinic' },
          { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Dr. Ahmed' },
          { label: 'Email Address', name: 'email', type: 'email', placeholder: 'ahmed@clinic.com' },
          { label: 'Phone / WhatsApp', name: 'phone', type: 'tel', placeholder: '+92 300 0000000' },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-xs text-slate-500 mb-1.5">{field.label}</label>
            <input
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              type={field.type}
              placeholder={field.placeholder}
              onChange={handleChange}
              className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-xs text-slate-500 mb-1.5">Industry</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-purple-500/50 transition-colors"
            required
          >
            <option value="">Select your industry</option>
            <option>Healthcare / Clinic</option>
            <option>Real Estate</option>
            <option>Salon / Spa</option>
            <option>Restaurant</option>
            <option>Car Dealership</option>
            <option>Law Firm</option>
            <option>Other Service Business</option>
          </select>
        </div>

        {submitted ? (
          <div className={`w-full rounded-xl border p-4 text-sm font-semibold mt-2 ${toast?.type === 'success' ? 'border-emerald-300/40 bg-emerald-500/10 text-emerald-100' : 'border-red-400/30 bg-red-500/10 text-red-100'}`}>
            {toast?.message ?? 'Request submitted...'}
          </div>
        ) : (
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm transition-all duration-200 glow-button mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Request a Demo →'}
          </button>
        )}

        {!isConfigured && (
          <p className="text-yellow-300 text-sm">
            EmailJS needs setup before this form can send email. Add your keys to environment variables.
          </p>
        )}
      </div>
    </form>
  )
}
