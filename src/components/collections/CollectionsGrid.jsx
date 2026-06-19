import React from 'react'
import CollectionCard from './CollectionCard'
import CoastalImage from '../../assets/coastal-estate.png'
import PenthouseImage from '../../assets/penthouse.png'
import HistoricImage from '../../assets/historic.png'
import MountainImage from '../../assets/mountain-modern.png'

const collections = [
  {
    title: 'Coastal Moderns',
    description: 'Where geometric precision meets the organic rhythm of the shoreline',
    count: 17,
    countLabel: 'Available Estates',
    image: CoastalImage,
    featured: true
  },
  {
    title: 'Penthouse Living',
    description: 'Commanding views from the world\'s most iconic vertical landscapes',
    count: 9,
    countLabel: 'Properties',
    image: PenthouseImage
  },
  {
    title: 'Historic Manors',
    description: 'Timeless legacies preserved in stone, by and centuries of artisan craft',
    count: 8,
    countLabel: 'Properties',
    image: HistoricImage
  },
  {
    title: 'Mountain Sanctuaries',
    description: 'Elevated retreats designed for solitude, reflection, and boundless privacy',
    count: 10,
    countLabel: 'Archived Listings',
    image: MountainImage
  }
]

const CollectionsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {collections.map((collection) => (
          <CollectionCard key={collection.title} {...collection} />
        ))}
      </div>
    </section>
  )
}

export default CollectionsGrid
