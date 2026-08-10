import React from 'react';
import CardListing from '../CardListing';
import { resolvePropertyImage } from '../../lib/media';

const defaultProperties = [
  {
    id: 1,
    amount: '$18,500,000',
    placeName: '1200 Bel Air Rd, Los Angeles, CA',
    noOfBeds: 6,
    noOfBaths: 8,
    area: '12,400',
    imagePath: resolvePropertyImage({ heroImageUrl: '/images/properties/featured-1.jpg' }),
  },
  {
    id: 2,
    amount: '$9,250,000',
    placeName: 'Penthouse 42B, Central Park South, NY',
    noOfBeds: 4,
    noOfBaths: 4.5,
    area: '4,800',
    imagePath: resolvePropertyImage({ heroImageUrl: '/images/properties/featured-2.jpg' }),
  },
  {
    id: 3,
    amount: '$12,000,000',
    placeName: 'Villa Azure, Saint-Jean-Cap-Ferrat, FR',
    noOfBeds: 7,
    noOfBaths: 7,
    area: '8,500',
    imagePath: resolvePropertyImage({ heroImageUrl: '/images/properties/featured-3.jpg' }),
  },
]

const FeaturedListings = ({ properties = [] }) => {
  const items = properties.length
    ? properties.map((property) => ({
        id: property.id,
        amount: property.amount,
        placeName: `${property.title}${property.address ? `, ${property.address}` : ''}`,
        noOfBeds: property.beds,
        noOfBaths: property.baths,
        area: property.areaSqft?.toLocaleString('en-US') || property.area,
        imagePath: resolvePropertyImage(property),
      }))
    : defaultProperties

  return (
    <section className="bg-slate-50/50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#002045] tracking-tight">
            Featured Listings
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
            Meticulously selected properties that represent the pinnacle of architectural design and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {items.map((property) => (
            <CardListing 
              key={property.id}
              imagePath={property.imagePath}
              amount={property.amount}
              placeName={property.placeName}
              noOfBeds={property.noOfBeds}
              noOfBaths={property.noOfBaths}
              area={property.area}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedListings;