import React from 'react'
import { Link } from 'react-router-dom'
import CardListing from '../CardListing'
import { resolvePropertyImage } from '../../lib/media'

const ActiveListings = ({ listings = [], loading = false }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#002045]">Active Listings</h2>
          <p className="text-sm text-[#43474E]">Curated high-value opportunities currently available.</p>
        </div>
        <Link to="/properties" className="flex items-center gap-2 text-[#002045] font-bold text-sm hover:underline">
          <span>View All</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#002045" />
          </svg>
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-80 bg-slate-200 rounded-2xl animate-pulse"></div>
          ))}
        </div>
      ) : listings.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
          <p className="text-slate-500 text-sm">No active public listings currently available for this advisor.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item, idx) => (
            <CardListing
              key={item.id || item._id || idx}
              imagePath={resolvePropertyImage(item)}
              amount={item.amount || item.price}
              placeName={item.title || item.placeName}
              noOfBeds={item.beds || item.noOfBeds}
              noOfBaths={item.baths || item.noOfBaths}
              area={item.area || item.sqft}
              badge={idx === 0 ? 'NEW LISTING' : undefined}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ActiveListings