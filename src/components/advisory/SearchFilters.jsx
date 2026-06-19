import React from 'react'

const filterOptions = ['All Advisors', 'Institutional', 'Off-market', 'Residential', 'Portfolio Advisory']

const SearchFilters = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-3 w-5 h-5 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search by name, city, or firm" className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2A52]" />
        </div>

        <button className="flex items-center gap-2 px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#374151]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4H14M4 8H12M6 12H10" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Expertise
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {filterOptions.map((option) => (
          <button key={option} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${option === 'All Advisors' ? 'bg-[#0B2A52] text-white' : 'bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#F3F6FC]'}`}>
            {option}
          </button>
        ))}
      </div>
    </section>
  )
}

export default SearchFilters
