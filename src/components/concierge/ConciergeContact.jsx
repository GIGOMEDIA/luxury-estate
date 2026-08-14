import React, { useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import { apiRequest } from '../../lib/backend'

const ConciergeContact = ({ contact }) => {
  const priorityLine = contact?.priorityLine || '+1 (800) LUXE-PRESTIGE'
  const directEmail = contact?.directEmail || 'concierge@luxeestate.com'
  const messagePrompt = contact?.messagePrompt || 'Request a confidential consultation today.'

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    serviceInterest: 'Private Aviation',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await apiRequest('/concierge/inquiry', {
        method: 'POST',
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      alert('Failed to send inquiry. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="bg-[#EEF3FB] py-18 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
        <div>
          <h2 className="text-[30px] sm:text-4xl font-bold text-[#00162E] mb-5 tracking-tight">
            Speak with an Advisor
          </h2>
          <p className="text-[#5B6470] text-sm sm:text-[15px] leading-relaxed max-w-md mb-8">
            {messagePrompt}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-white shadow-xs flex items-center justify-center text-[#00162E]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#93A0B1] mb-0.5">
                  Priority Line
                </p>
                <a href={`tel:${priorityLine}`} className="text-[#00162E] font-bold text-[15px] hover:underline">
                  {priorityLine}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-full bg-white shadow-xs flex items-center justify-center text-[#00162E]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#93A0B1] mb-0.5">
                  Direct Email
                </p>
                <a href={`mailto:${directEmail}`} className="text-[#00162E] font-bold text-[15px] hover:underline">
                  {directEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-slate-100">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <h3 className="text-2xl font-bold text-[#00162E]">Confidential Request Received</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you for reaching out. A dedicated concierge manager will review your request and contact you directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-[#4B5563] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full rounded-lg border border-[#D7DEE8] px-3.5 py-3 text-sm outline-hidden focus:border-[#00162E]"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-[#4B5563] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full rounded-lg border border-[#D7DEE8] px-3.5 py-3 text-sm outline-hidden focus:border-[#00162E]"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-[#4B5563] mb-2">
                  Service Interest
                </label>
                <select
                  value={form.serviceInterest}
                  onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
                  className="w-full rounded-lg border border-[#D7DEE8] px-3.5 py-3 text-sm outline-hidden focus:border-[#00162E] bg-white"
                >
                  <option value="Private Aviation">Private Aviation</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Legal & Tax Services">Legal & Tax Services</option>
                  <option value="Property Management">Property Management</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-[11px] font-bold tracking-[0.18em] uppercase text-[#4B5563] mb-2">
                  Confidential Message
                </label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-[#D7DEE8] px-3.5 py-3 text-sm outline-hidden focus:border-[#00162E] resize-none"
                  placeholder="How may we assist you?"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#00162E] text-white py-3.5 rounded-lg font-bold shadow-md hover:bg-[#0a2441] transition-colors cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'Transmitting Request...' : 'Send Confidential Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ConciergeContact