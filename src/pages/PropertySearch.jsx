import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropertyFilters from '../components/property-search/PropertyFilters'
import PropertyResultCard from '../components/property-search/PropertyResultCard'
import MapPanel from '../components/property-search/MapPanel'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'
import { resolvePropertyImage } from '../lib/media'

const PropertySearch = () => {
  const { data } = useBackendData(async () => {
    const response = await apiRequest('/properties?limit=12&sort=featured')

    return {
      items: response.items || [],
      total: response.total || 0,
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F3F6FC] text-[#002045]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
        <div className="mt-4 sm:mt-6">
          <PropertyFilters />
        </div>

        <div className="mt-5 lg:mt-6 grid grid-cols-1 lg:grid-cols-[390px_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
          <div className="space-y-5 lg:space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Found {data?.total || 0} Results</h1>
                <p className="mt-1 text-sm text-[#616B7C]">Elite listings in Manhattan, NY</p>
              </div>

              <button className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#002045] whitespace-nowrap">
                <span>Sort By: Featured</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 6L0 1H10L5 6Z" fill="#002045" />
                </svg>
              </button>
            </div>

            <div className="space-y-5 lg:space-y-6">
              {(data?.items || []).map((property) => (
                <PropertyResultCard
                  key={property.id}
                  slug={property.slug}
                  image={resolvePropertyImage(property)}
                  featured={property.featured}
                  amount={property.amount}
                  title={property.title}
                  address={`${property.address}, ${property.city}, ${property.state}`}
                  beds={property.beds}
                  baths={property.baths}
                  area={property.areaSqft?.toLocaleString('en-US')}
                />
              ))}
            </div>
          </div>

          <MapPanel />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PropertySearch