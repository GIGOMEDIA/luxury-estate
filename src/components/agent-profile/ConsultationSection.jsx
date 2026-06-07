import React from 'react'
import PhoneIcon from '../icons/PhoneIcon'
import EmailIcon from '../icons/EmailIcon'
import LocationIcon from '../icons/LocationIcon'

const ConsultationSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-16">
      <div className="bg-[#002045] rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2">Request a Private Consultation</h3>
            <p className="text-sm text-slate-200 mb-6">Unlock exclusive access to off-market inventory and institutional-grade market analysis. Alexander Vance provides bespoke advisory services for acquisitions exceeding $5M.</p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <span>+1 (212) 555-0198</span>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon />
                <span>vance@luxeestate.com</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationIcon />
                <span>725 Fifth Avenue, New York, NY</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-[#002045]">
            <form className="space-y-4">
              <input className="w-full border border-[#E6EEF9] p-3 rounded" placeholder="Full name" />
              <input className="w-full border border-[#E6EEF9] p-3 rounded" placeholder="Email address" />
              <select className="w-full border border-[#E6EEF9] p-3 rounded">
                <option>Institutional Acquisition</option>
                <option>Residential Purchase</option>
                <option>Other</option>
              </select>
              <textarea className="w-full border border-[#E6EEF9] p-3 rounded" placeholder="Briefly describe your requirements..."></textarea>
              <button className="w-full bg-[#002045] text-white py-3 rounded">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationSection
