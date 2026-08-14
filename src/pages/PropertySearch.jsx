import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropertyFilters from '../components/property-search/PropertyFilters'
import PropertyResultCard from '../components/property-search/PropertyResultCard'
import MapPanel from '../components/property-search/MapPanel'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'
import { resolvePropertyImage } from '../lib/media'
import { Search } from 'lucide-react'

const PropertySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // Extract active query params
  const searchQuery = searchParams.get('search') || searchParams.get('location') || ''
  const propertyType = searchParams.get('type') || ''
  const minPrice = searchParams.get('minPrice') || ''
  const maxPrice = searchParams.get('maxPrice') || ''
  const sortBy = searchParams.get('sort') || 'featured'

  const hasActiveFilter = Boolean(searchQuery || propertyType || minPrice || maxPrice)

  // Fetch search results from backend API when filters or search terms change
  const { data, loading, error } = useBackendData(async () => {
    // If no search query or explicit filters applied, default to initial discovery mode or empty query
    const params = new URLSearchParams({
      limit: '12',
      sort: sortBy,
      ...(searchQuery && { search: searchQuery }),
      ...(propertyType && { type: propertyType }),
      ...(minPrice && { minPrice }),
      ...(maxPrice && { maxPrice }),
    })

    const response = await apiRequest(`/properties?${params.toString()}`).catch(() => ({ items: [], total: 0 }))

    return {
      items: response?.items || response || [],
      total: response?.total || (Array.isArray(response) ? response.length : 0),
    }
  }, [searchQuery, propertyType, minPrice, maxPrice, sortBy])

  const handleSortChange = (newSort) => {
    const nextParams = new URLSearchParams(searchParams)
    nextParams.set('sort', newSort)
    setSearchParams(nextParams)
  }

  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#002045] flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
          {/* Top Filter Bar */}
          <div className="mt-4 sm:mt-6">
            <PropertyFilters />
          </div>

          <div className="mt-5 lg:mt-6 grid grid-cols-1 lg:grid-cols-[390px_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
            {/* Results Sidebar */}
            <div className="space-y-5 lg:space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {hasActiveFilter ? `Found ${data?.total || 0} Results` : 'Global Portfolio'}
                  </h1>
                  <p className="mt-1 text-xs sm:text-sm text-[#616B7C] font-medium">
                    {hasActiveFilter
                      ? searchQuery ? `Results for "${searchQuery}"` : 'Filtered luxury properties'
                      : 'Showing active featured estates across global destinations.'}
                  </p>
                </div>

                <div className="relative group">
                  <button className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-[#002045] whitespace-nowrap bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs cursor-pointer">
                    <span>Sort: {sortBy === 'price-desc' ? 'Price High-Low' : sortBy === 'price-asc' ? 'Price Low-High' : 'Featured'}</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 6L0 1H10L5 6Z" fill="#002045" />
                    </svg>
                  </button>
                  <div className="absolute right-0 mt-1 w-40 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-30 overflow-hidden">
                    <button
                      onClick={() => handleSortChange('featured')}
                      className="block w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Featured
                    </button>
                    <button
                      onClick={() => handleSortChange('price-desc')}
                      className="block w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Price: High to Low
                    </button>
                    <button
                      onClick={() => handleSortChange('price-asc')}
                      className="block w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Price: Low to High
                    </button>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                  Unable to connect to the properties database.
                </div>
              )}

              {/* Loading Skeletons */}
              {loading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-64 bg-slate-200 rounded-2xl animate-pulse" />
                  ))}
                </div>
              ) : data?.items?.length === 0 ? (
                /* Empty Search State */
                <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-8 text-center space-y-3 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-[#002045] flex items-center justify-center mx-auto">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#002045]">No Properties Found</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    No matching estates were found. Try clearing your search parameters or selecting a broader location.
                  </p>
                </div>
              ) : (
                /* Active Result Cards List */
                <div className="space-y-5 lg:space-y-6">
                  {data.items.map((property) => (
                    <PropertyResultCard
                      key={property.id || property._id}
                      slug={property.slug || property.id || property._id}
                      image={resolvePropertyImage(property)}
                      featured={property.featured}
                      amount={property.amount || property.price}
                      title={property.title}
                      address={`${property.address ? property.address + ', ' : ''}${property.city || ''}${property.state ? ', ' + property.state : ''}`}
                      beds={property.beds}
                      baths={property.baths}
                      area={property.areaSqft ? property.areaSqft.toLocaleString('en-US') : property.area}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Map Panel Component */}
            <MapPanel properties={data?.items || []} loading={loading} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default PropertySearch