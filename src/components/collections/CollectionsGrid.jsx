import React from 'react'
import CollectionCard from './CollectionCard'
import { resolveMediaUrl } from '../../lib/media'

const CollectionsGrid = ({ collections = [], loading = false }) => {
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 sm:h-72 lg:h-80 bg-slate-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    )
  }

  if (!collections.length) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-[#0B2A52]">No Collections Available</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Our editorial anthologies are currently being updated with new estates. Please check back shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {collections.map((collection, idx) => (
          <CollectionCard
            key={collection.id || collection._id || collection.title || idx}
            id={collection.id || collection._id}
            title={collection.title || collection.name}
            description={collection.description}
            count={collection.count || collection.itemCount || 0}
            countLabel={collection.countLabel || 'Estates'}
            image={resolveMediaUrl(collection.image || collection.coverImage || collection.imageUrl)}
            slug={collection.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default CollectionsGrid