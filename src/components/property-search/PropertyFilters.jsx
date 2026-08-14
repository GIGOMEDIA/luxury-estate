import React from 'react'
import { useSearchParams } from 'react-router-dom'

const filterCategories = [
  { label: 'All Types', value: '' },
  { label: 'Waterfront', value: 'waterfront' },
  { label: 'Penthouse', value: 'penthouse' },
  { label: 'Historic', value: 'historic' },
  { label: 'Villa', value: 'villa' },
]

const PropertyFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeType = searchParams.get('type') || ''

  const handleSelectType = (val) => {
    const next = new URLSearchParams(searchParams)
    if (val) {
      next.set('type', val)
    } else {
      next.delete('type')
    }
    setSearchParams(next)
  }

  const clearFilters = () => {
    setSearchParams(new URLSearchParams())
  }

  return (
    <div className="bg-white rounded-full px-4 py-3 shadow-xs border border-[#E7EEF8] overflow-x-auto">
      <div className="flex items-center gap-2 min-w-max">
        {filterCategories.map((item) => {
          const isActive = activeType === item.value
          return (
            <button
              key={item.label}
              onClick={() => handleSelectType(item.value)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${isActive
                  ? 'bg-[#002045] text-white'
                  : 'bg-[#F1F5FB] text-[#002045] hover:bg-slate-200'
                }`}
            >
              <span>{item.label}</span>
            </button>
          )
        })}

        <div className="flex-1" />

        {searchParams.toString() && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 cursor-pointer whitespace-nowrap"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  )
}

export default PropertyFilters