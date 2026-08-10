import React from 'react'
import CollectionCard from './CollectionCard'
import { resolveMediaUrl } from '../../lib/media'

const defaultCollections = [
  {
    title: 'Coastal Moderns',
    description: 'Where geometric precision meets the organic rhythm of the shoreline',
    count: 17,
    countLabel: 'Available Estates',
    image: resolveMediaUrl('/images/collections/coastal-moderns/cover.jpg'),
    featured: true
  },
  {
    title: 'Penthouse Living',
    description: 'Commanding views from the world\'s most iconic vertical landscapes',
    count: 9,
    countLabel: 'Properties',
    image: resolveMediaUrl('/images/collections/penthouse-living/cover.jpg')
  },
  {
    title: 'Historic Manors',
    description: 'Timeless legacies preserved in stone, by and centuries of artisan craft',
    count: 8,
    countLabel: 'Properties',
    image: resolveMediaUrl('/images/collections/historic-manors/cover.jpg')
  },
  {
    title: 'Mountain Sanctuaries',
    description: 'Elevated retreats designed for solitude, reflection, and boundless privacy',
    count: 10,
    countLabel: 'Archived Listings',
    image: resolveMediaUrl('/images/collections/mountain-sanctuaries/cover.jpg')
  }
]

const CollectionsGrid = ({ collections = [] }) => {
  const items = collections.length
    ? collections
    : defaultCollections

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {items.map((collection) => (
          <CollectionCard key={collection.title} {...collection} />
        ))}
      </div>
    </section>
  )
}

export default CollectionsGrid
