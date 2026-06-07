import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropertyFilters from '../components/property-search/PropertyFilters'
import PropertyResultCard from '../components/property-search/PropertyResultCard'
import MapPanel from '../components/property-search/MapPanel'
import WindowEstate from '../assets/primary-estate-view.png'
import CoastEstate from '../assets/villa-azure.png'
import ManorEstate from '../assets/historic.png'

const properties = [
  {
    image: WindowEstate,
    featured: true,
    amount: '$12,450,000',
    title: 'The Glass House Reserve',
    address: '742 Park Avenue, Upper East Side, NY',
    beds: '5',
    baths: '6',
    area: '4,200',
  },
  {
    image: CoastEstate,
    amount: '$8,900,000',
    title: 'Chelsea Heights Duplex',
    address: 'West 22nd Street, Manhattan, NY',
    beds: '4',
    baths: '4',
    area: '3,150',
  },
  {
    image: ManorEstate,
    amount: '$15,200,000',
    title: 'The Sovereign Estate',
    address: 'Hudson Yards, Manhattan, NY',
    beds: '6',
    baths: '8',
    area: '5,800',
  },
]

const PropertySearch = () => {
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
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Found 124 Results</h1>
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
              {properties.map((property) => (
                <PropertyResultCard key={property.title} {...property} />
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