import React from 'react'
import AdvisorCard from './AdvisorCard'
import AdvisorImage1 from '../../assets/alexander-knight.jpg'

const advisors = [
  { name: 'Alexander Thorne', title: 'SENIOR MANAGING DIRECTOR', image: AdvisorImage1, tags: ['Institutional', 'Off-market'], featured: true },
  { name: 'Elena Moretti', title: 'GLOBAL RESIDENTIAL SPECIALIST', image: AdvisorImage1, tags: ['International', 'Concierge'] },
  { name: 'Julian Vance', title: 'VENTURE ASSETS LEAD', image: AdvisorImage1, tags: ['Commercial', 'Acquisitions'] },
  { name: 'Sarah Jenkins', title: 'ULTRA-PRIME ADVISOR', image: AdvisorImage1, tags: ['Off-market', 'Private'] },
  { name: 'Marcus Chen', title: 'PORTFOLIO STRATEGIST', image: AdvisorImage1, tags: ['Institutional', 'Global'] },
  { name: 'Isabelle Laurent', title: 'EUROPEAN CORRESPONDENT', image: AdvisorImage1, tags: ['International', 'Residential'] },
  { name: 'Viktor Kozlov', title: 'EMERGING MARKETS DIRECTOR', image: AdvisorImage1, tags: ['Global', 'Development'] },
  { name: 'Amelia Rodriguez', title: 'ACQUISITIONS SPECIALIST', image: AdvisorImage1, tags: ['Commercial', 'Off-market'] },
]

const AdvisorsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0B2A52]">Portfolio Advisors</h2>
          <p className="text-sm text-[#6B7280] mt-1">Showing 24 of 512 verified partners.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-[#E5E7EB] hover:bg-[#F3F6FC]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="7" height="7" stroke="#0B2A52" strokeWidth="1" />
              <rect x="10" y="1" width="7" height="7" stroke="#0B2A52" strokeWidth="1" />
              <rect x="1" y="10" width="7" height="7" stroke="#0B2A52" strokeWidth="1" />
              <rect x="10" y="10" width="7" height="7" stroke="#0B2A52" strokeWidth="1" />
            </svg>
          </button>
          <button className="p-2 rounded-lg border border-[#E5E7EB]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5H16M2 9H16M2 13H16" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advisors.map((advisor) => (
          <AdvisorCard key={advisor.name} {...advisor} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 px-6 py-3 border border-[#E5E7EB] rounded-lg text-[#0B2A52] font-medium hover:bg-[#F3F6FC] transition-colors">
          Load More Experts
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15M1 8H15" stroke="#0B2A52" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default AdvisorsGrid
