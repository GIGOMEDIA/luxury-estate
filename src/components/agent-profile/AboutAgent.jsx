import React from 'react'
import { resolveAgentImage } from '../../lib/media'

const AboutAgent = ({ agent, loading = false }) => {
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-xs animate-pulse">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/3 h-80 bg-slate-200 rounded-2xl"></div>
            <div className="w-full lg:w-2/3 space-y-4">
              <div className="h-8 bg-slate-200 rounded-md w-1/2"></div>
              <div className="h-4 bg-slate-100 rounded-md w-1/4"></div>
              <div className="h-20 bg-slate-100 rounded-xl w-full"></div>
              <div className="h-16 bg-slate-100 rounded-md w-3/4"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!agent) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center py-12 bg-white rounded-2xl border border-slate-100">
        <p className="text-slate-500 font-medium">Agent details are currently unavailable.</p>
      </section>
    )
  }

  const agentImage = resolveAgentImage(agent)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-xs border border-slate-100">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Profile Picture */}
          <div className="relative w-full lg:w-1/3 flex items-center justify-center">
            {agentImage ? (
              <img
                src={agentImage}
                alt={agent.name || 'Agent Profile'}
                className="w-full max-w-sm h-96 rounded-2xl object-cover shadow-md bg-slate-100"
              />
            ) : (
              <div className="w-full max-w-sm h-96 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400">
                No Photo Available
              </div>
            )}

            {agent.ranking && (
              <div className="absolute -bottom-4 left-6 bg-white rounded-lg px-4 py-3 shadow-lg border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">GLOBAL RANKING</p>
                <p className="text-sm font-semibold text-[#002045]">{agent.ranking}</p>
                {agent.rankingSubtitle && <p className="text-xs text-slate-400">{agent.rankingSubtitle}</p>}
              </div>
            )}
          </div>

          {/* Bio & Information */}
          <div className="lg:w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold text-[#002045]">{agent.name}</h1>
            <p className="uppercase tracking-widest text-xs font-bold text-slate-500 mt-1">
              {agent.title || agent.role || 'Senior Advisory Partner'}
            </p>

            {agent.specializationQuote && (
              <div className="mt-6">
                <div className="bg-[#EEF6FF] border-l-4 border-[#002045] rounded-r-md p-4 max-w-xl">
                  <p className="text-sm font-bold text-[#002045]">Institutional Access</p>
                  <p className="text-sm text-slate-600 mt-0.5">{agent.specializationQuote}</p>
                </div>
              </div>
            )}

            {agent.bio && (
              <div className="mt-6 max-w-2xl text-slate-700 leading-relaxed text-sm sm:text-base">
                <p>{agent.bio}</p>
              </div>
            )}

            {/* Certifications / Highlights */}
            {agent.highlights && agent.highlights.length > 0 && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {agent.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-full">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#002045" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#002045] font-medium">{highlight}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#consultation" className="bg-[#002045] text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-[#003366] transition-colors shadow-xs">
                Request Consultation
              </a>
              {agent.portfolioPdfUrl && (
                <a href={agent.portfolioPdfUrl} target="_blank" rel="noopener noreferrer" className="border border-[#D9E8FF] text-[#002045] px-6 py-3 rounded-xl font-medium text-sm hover:bg-slate-50 transition-colors">
                  Download Portfolio
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAgent