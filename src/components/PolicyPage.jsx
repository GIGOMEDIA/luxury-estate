import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const PolicyPage = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#002045] flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E5ECF7] shadow-sm p-6 sm:p-10 space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h1>
            {subtitle ? <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{subtitle}</p> : null}
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            {children}
          </div>

          <div className="pt-2">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#002045] hover:opacity-80 transition-colors">
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PolicyPage