import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const PolicyPage = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#002045] flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E5ECF7] shadow-xs p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="space-y-3 border-b border-slate-100 pb-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Legal Governance</p>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Updated: August 2026
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002045]">{title}</h1>
              {subtitle ? <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">{subtitle}</p> : null}
            </div>

            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {children}
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#002045] hover:underline transition-all"
              >
                ← Return to Home
              </Link>
              <Link
                to="/inquiries"
                className="text-xs font-bold text-slate-500 hover:text-[#002045] transition-colors"
              >
                Legal Inquiry?
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default PolicyPage