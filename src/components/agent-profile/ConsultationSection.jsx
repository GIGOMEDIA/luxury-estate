import React, { useState } from 'react'
import PhoneIcon from '../icons/PhoneIcon'
import EmailIcon from '../icons/EmailIcon'
import LocationIcon from '../icons/LocationIcon'
import { apiRequest } from '../../lib/backend'

const ConsultationSection = ({ agent }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', type: 'Institutional Acquisition', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await apiRequest('/inquiries', {
        method: 'POST',
        body: JSON.stringify({ ...formData, agentId: agent?.id || agent?._id }),
      })
      setSubmitted(true)
    } catch {
      alert('Unable to send inquiry. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="consultation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-16">
      <div className="bg-[#002045] rounded-2xl p-8 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2">Request a Private Consultation</h3>
            <p className="text-sm text-slate-200 mb-6 leading-relaxed">
              Unlock exclusive access to off-market inventory and institutional-grade market analysis. {agent?.name || 'Our advisory team'} provides bespoke advisory services for luxury acquisitions.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <span>{agent?.phone || '+1 (212) 555-0198'}</span>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon />
                <span>{agent?.email || 'advisory@luxeestate.com'}</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationIcon />
                <span>{agent?.officeLocation || '725 Fifth Avenue, New York, NY'}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-[#002045]">
            {submitted ? (
              <div className="text-center py-8 space-y-2">
                <h4 className="text-lg font-bold text-emerald-700">Inquiry Received</h4>
                <p className="text-xs text-slate-600">
                  Thank you. A senior representative will reach out to schedule your private consultation shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border border-[#E6EEF9] p-3 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#002045]"
                  placeholder="Full name"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-[#E6EEF9] p-3 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#002045]"
                  placeholder="Email address"
                />
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full border border-[#E6EEF9] p-3 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#002045] bg-white"
                >
                  <option value="Institutional Acquisition">Institutional Acquisition</option>
                  <option value="Residential Purchase">Residential Purchase</option>
                  <option value="Off-Market Inquiry">Off-Market Inquiry</option>
                </select>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-[#E6EEF9] p-3 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-[#002045]"
                  placeholder="Briefly describe your requirements..."
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#002045] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#003366] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationSection