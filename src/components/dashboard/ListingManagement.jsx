import React from 'react'
import CardListing from '../CardListing'
import Active1 from '../../assets/active-listing-1.png'
import Active2 from '../../assets/active-listing-2.png'
import Active3 from '../../assets/active-listing-3.png'

const ListingManagement = () => {
  const items = [
    { imagePath: Active1, amount: '$12,450,000', placeName: 'Skyview Manor', noOfBeds: '5', noOfBaths: '6', area: '4,200' },
    { imagePath: Active2, amount: '$8,900,000', placeName: 'Bal Air Sanctuary', noOfBeds: '4', noOfBaths: '4', area: '3,150' },
    { imagePath: Active3, amount: '$15,200,000', placeName: 'The Glass House', noOfBeds: '6', noOfBaths: '8', area: '5,800' },
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EEF3FA]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#0B2A52]">Listing Management</h3>
          <p className="text-sm text-[#6B7280]">Manage 42 active high-value properties</p>
        </div>
        <button className="text-sm px-3 py-2 bg-slate-50 rounded-md">Filter</button>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <CardListing key={it.placeName} {...it} />
        ))}
      </div>
    </div>
  )
}

export default ListingManagement
