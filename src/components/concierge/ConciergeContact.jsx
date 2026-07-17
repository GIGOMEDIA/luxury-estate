import React from 'react'

const ConciergeContact = () => {
  return (
    <section className="bg-[#EEF3FB] py-18 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
        <div>
          <h2 className="text-[30px] sm:text-4xl font-medium text-[#00162E] mb-5 tracking-tight">Speak with an Advisor</h2>
          <p className="text-[#5B6470] text-sm sm:text-[15px] leading-relaxed max-w-136 mb-8">
            Our concierge specialists are available 24/7 to provide discreet, high-performance solutions for your lifestyle needs. Request a confidential consultation today.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#00162E] text-sm">☎</div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#93A0B1] mb-0.5">Priority Line</p>
                <p className="text-[#00162E] font-medium text-[15px]">+1 (800) LUXE-PRESTIGE</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#00162E] text-sm">✉</div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#93A0B1] mb-0.5">Direct Email</p>
                <p className="text-[#00162E] font-medium text-[15px]">concierge@luxeestate.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.12)] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#4B5563] mb-2">First Name</label>
              <input className="w-full rounded-md border border-[#D7DEE8] px-3 py-3 text-sm outline-none focus:border-[#00162E]" placeholder="Enter first name" />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#4B5563] mb-2">Last Name</label>
              <input className="w-full rounded-md border border-[#D7DEE8] px-3 py-3 text-sm outline-none focus:border-[#00162E]" placeholder="Enter last name" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#4B5563] mb-2">Service Interest</label>
            <select className="w-full rounded-md border border-[#D7DEE8] px-3 py-3 text-sm outline-none focus:border-[#00162E] bg-white">
              <option>Private Aviation</option>
              <option>Interior Design</option>
              <option>Legal & Tax Services</option>
              <option>Property Management</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#4B5563] mb-2">Confidential Message</label>
            <textarea className="w-full min-h-36 rounded-md border border-[#D7DEE8] px-3 py-3 text-sm outline-none focus:border-[#00162E] resize-none" placeholder="How may we assist you?" />
          </div>

          <button className="w-full bg-[#00162E] text-white py-3.5 rounded-md font-semibold shadow-md hover:bg-[#0a2441] transition-colors">
            Send Confidential Request
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConciergeContact
