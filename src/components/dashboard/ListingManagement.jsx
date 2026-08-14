import React from 'react'
import CardListing from '../CardListing'
import { resolvePropertyImage } from '../../lib/media'

const ListingManagement = ({ items = [], totalActive, totalPending, totalSold, loading = false }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xs border border-[#EEF3FA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-[#0B2A52]">Listing Management</h3>
          <p className="text-xs text-[#6B7280] mt-0.5">
            Manage {totalActive ?? items.length} active high-value properties
            {typeof totalPending === 'number' ? `, ${totalPending} pending` : ''}
            {typeof totalSold === 'number' ? `, ${totalSold} sold` : ''}
          </p>
        </div>
        <button className="text-xs font-bold px-4 py-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-lg text-[#0B2A52] cursor-pointer transition-colors w-fit">
          Filter
        </button>
      </div>

      {loading ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-72 bg-slate-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-xs italic">
          No listings currently available in management console.
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <CardListing
              key={item.id || item._id || item.title || idx}
              imagePath={resolvePropertyImage(item)}
              amount={item.amount || item.price}
              placeName={item.title || item.placeName}
              noOfBeds={item.beds || item.noOfBeds}
              noOfBaths={item.baths || item.noOfBaths}
              area={item.areaSqft ? item.areaSqft.toLocaleString('en-US') : item.area}
              slug={item.slug}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListingManagement