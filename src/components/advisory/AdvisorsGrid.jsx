import React from 'react'
import AdvisorCard from './AdvisorCard'
import { resolveAgentImage } from '../../lib/media'

const AdvisorsGrid = ({ advisors = [], stats, loading = false, searchQuery = '', selectedFilter = 'All Advisors' }) => {
  const totalLabel = stats?.featuredAgents || stats?.activeAgents
    ? `Showing ${advisors.length} of ${stats.activeAgents || stats.featuredAgents} verified partners.`
    : `Showing ${advisors.length} verified partners.`

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0B2A52]">Portfolio Advisors</h2>
          {!loading && <p className="text-sm text-[#6B7280] mt-1">{totalLabel}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-[#E5E7EB] hover:bg-[#F3F6FC] transition-colors" aria-label="Grid view">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="7" height="7" stroke="#0B2A52" strokeWidth="1" />
              <rect x="10" y="1" width="7" height="7" stroke="#0B2A52" strokeWidth="1" />
              <rect x="1" y="10" width="7" height="7" stroke="#0B2A52" strokeWidth="1" />
              <rect x="10" y="10" width="7" height="7" stroke="#0B2A52" strokeWidth="1" />
            </svg>
          </button>
          <button className="p-2 rounded-lg border border-[#E5E7EB] hover:bg-[#F3F6FC] transition-colors" aria-label="List view">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5H16M2 9H16M2 13H16" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-[#E5E7EB] space-y-4 p-4 animate-pulse">
              <div className="h-64 bg-slate-200 rounded-lg w-full"></div>
              <div className="h-5 bg-slate-200 rounded-md w-3/4"></div>
              <div className="h-3 bg-slate-100 rounded-md w-1/2"></div>
              <div className="flex gap-2">
                <div className="h-6 bg-slate-100 rounded-full w-16"></div>
                <div className="h-6 bg-slate-100 rounded-full w-20"></div>
              </div>
            </div>
          ))}
        </div>
      ) : advisors.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-[#0B2A52]">No advisors found</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            {searchQuery || selectedFilter !== 'All Advisors'
              ? `No advisors found matching your search "${searchQuery || selectedFilter}". Try clearing your filters.`
              : 'Our advisory network directory is currently being updated. Please check back shortly.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor) => (
            <AdvisorCard
              key={advisor.id || advisor._id || advisor.name}
              id={advisor.id || advisor._id}
              name={advisor.name}
              title={advisor.title || advisor.role || 'PORTFOLIO ADVISOR'}
              image={resolveAgentImage(advisor)}
              tags={advisor.tags || (advisor.featured ? ['ELITE PARTNER'] : ['Verified'])}
              slug={advisor.slug}
            />
          ))}
        </div>
      )}

      {!loading && advisors.length > 0 && (
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-6 py-3 border border-[#E5E7EB] rounded-lg text-[#0B2A52] font-medium hover:bg-[#F3F6FC] transition-colors cursor-pointer">
            Load More Experts
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1V15M1 8H15" stroke="#0B2A52" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default AdvisorsGrid