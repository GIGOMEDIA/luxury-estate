import React from 'react'

const filterItems = [
  'Price Range',
  'Beds & Baths',
  'Property Type',
  'Pool',
  'Gym',
  'Smart Home',
]

const PropertyFilters = () => {
  return (
    <div className="bg-white rounded-full px-4 py-3 shadow-sm border border-[#E7EEF8] overflow-x-auto">
      <div className="flex items-center gap-2 min-w-max">
        {filterItems.map((item, index) => (
          <button
            key={item}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${index < 3 ? 'bg-[#F1F5FB] text-[#002045]' : 'text-[#5C6677] hover:bg-[#F1F5FB] hover:text-[#002045]'}`}
          >
            <span>{item}</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 6L0 1H10L5 6Z" fill="#5C6677" />
            </svg>
          </button>
        ))}

        <div className="flex-1" />

        <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#002045] hover:bg-[#F1F5FB] whitespace-nowrap">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.5H17M1 9H17M1 14.5H17" stroke="#002045" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5 1.5V5.5M13 7V11M8 12.5V16.5" stroke="#002045" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="5" cy="3.5" r="1.5" fill="white" stroke="#002045" strokeWidth="1.4" />
            <circle cx="13" cy="9" r="1.5" fill="white" stroke="#002045" strokeWidth="1.4" />
            <circle cx="8" cy="14.5" r="1.5" fill="white" stroke="#002045" strokeWidth="1.4" />
          </svg>
          <span>More Filters</span>
        </button>
      </div>
    </div>
  )
}

export default PropertyFilters