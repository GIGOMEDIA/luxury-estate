import React from 'react';
import CardListing from '../CardListing';
import { resolvePropertyImage } from '../../lib/media';

const FeaturedListings = ({ properties = [], loading = false }) => {
  return (
    <section className="bg-slate-50/50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002045] tracking-tight">
            Featured Listings
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
            Meticulously selected properties that represent the pinnacle of architectural design and lifestyle.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full h-80 bg-slate-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">No featured listings currently available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {properties.map((property) => (
              <CardListing
                key={property.id || property._id}
                imagePath={resolvePropertyImage(property)}
                amount={property.amount || property.price}
                placeName={`${property.title}${property.address ? `, ${property.address}` : ''}`}
                noOfBeds={property.beds || property.noOfBeds}
                noOfBaths={property.baths || property.noOfBaths}
                area={property.areaSqft ? property.areaSqft.toLocaleString('en-US') : property.area}
                slug={property.slug}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedListings;