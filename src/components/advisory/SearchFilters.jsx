import React from 'react'

const filterOptions = ['All Advisors', 'Institutional', 'Off-market', 'Residential', 'Portfolio Advisory']

const SearchFilters = ({ searchQuery, setSearchQuery, selectedFilter, setSelectedFilter }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex-1 relative w-full">
          <svg className="absolute left-3.5 top-3.5 w-5 h-5 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, title, or specialization..."
            className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2A52] bg-white"
          />
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#374151] hover:bg-slate-50 w-full sm:w-auto cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4H14M4 8H12M6 12H10" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Expertise
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {filterOptions.map((option) => {
          const isActive = selectedFilter === option
          return (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${isActive
                  ? 'bg-[#0B2A52] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#F3F6FC]'
                }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default SearchFilters