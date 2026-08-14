import React from 'react'
import { Link } from 'react-router-dom'

const PartnershipCTA = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8">
      <div className="bg-[#0B2A52] rounded-3xl px-8 sm:px-12 py-16 text-center text-white shadow-xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Are You an Industry Leader?</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          We are strictly selective about our advisory network. If you represent the pinnacle of real estate expertise and client service, we invite you to apply for our global partnership program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/inquiries" className="bg-[#4B7BA7] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#3A5F84] transition-colors">
            Apply for Partnership
          </Link>
          <Link to="/concierge" className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-colors">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PartnershipCTA