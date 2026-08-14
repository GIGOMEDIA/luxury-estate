import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p className="text-sm font-semibold tracking-widest text-[#6B7280] mb-4 uppercase">THE ADVISORY NETWORK</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#002045] leading-tight mb-6">
            Expertise Beyond<br />Transactional<br />Boundaries.
          </h1>
          <p className="text-lg text-[#4B5563] mb-8 leading-relaxed max-w-md">
            Connect with the world's most sophisticated real estate advisors. Our elite network specializes in off-market acquisitions, institutional portfolio management, and global residential excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#search-advisors" className="bg-[#0B2A52] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#0A1F3A] transition-colors">
              Find an Advisor
            </a>
            <Link to="/inquiries" className="border-2 border-[#0B2A52] text-[#0B2A52] text-center px-6 py-3 rounded-lg font-medium hover:bg-[#F3F6FC] transition-colors">
              Join the Network
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden h-96 lg:h-112.5 bg-slate-900 shadow-xl relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Advisory Architecture"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="absolute bottom-6 right-6 bg-[#0B2A52] text-white px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1" />
              <path d="M10 5V10L13 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div>
              <p className="text-xs font-semibold text-slate-300">Global Reach</p>
              <p className="text-sm font-bold">500+ Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection