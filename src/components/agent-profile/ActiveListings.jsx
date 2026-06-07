import React from 'react'
import CardListing from '../CardListing'
import ActiveListing1 from '../../assets/active-listing-1.png'
import ActiveListing2 from '../../assets/active-listing-2.png'
import ActiveListing3 from '../../assets/active-listing-3.png'

const ActiveListings = () => {
  const listings = [
    { imagePath: ActiveListing1, amount: '$14,500,000', placeName: 'The Glass Pavilion, Bel Air', noOfBeds: '6', noOfBaths: '8', area: '12,400' },
    { imagePath: ActiveListing2, amount: '$8,250,000', placeName: 'Azure Waterfront Villa, Miami', noOfBeds: '4', noOfBaths: '5', area: '6,800' },
    { imagePath: ActiveListing3, amount: '$22,000,000', placeName: 'The Crown Residence, Manhattan', noOfBeds: '5', noOfBaths: '6', area: '8,500' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-12">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#002045]">Active Listings</h2>
          <p className="text-sm text-[#43474E]">Curated high-value opportunities currently available.</p>
        </div>
        <div className="flex items-center gap-2 text-[#002045] font-medium cursor-pointer">
          <span>View All</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#002045" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((l, idx) => (
          <CardListing key={idx} {...l} badge={idx === 0 ? 'NEW LISTING' : undefined} />
        ))}
      </div>
    </section>
  )
}

export default ActiveListings
