import React from 'react';
import { Bed, Bath, Maximize, Compass } from 'lucide-react';

const PropertyHeader = ({ property }) => {
  const specs = [
    { label: 'Bedrooms', value: property?.beds ?? '6', icon: <Bed className="w-5 h-5 text-slate-700" /> },
    { label: 'Bathrooms', value: property?.baths ?? '8', icon: <Bath className="w-5 h-5 text-slate-700" /> },
    { label: 'Square Feet', value: property?.areaSqft?.toLocaleString('en-US') || '12,450', icon: <Maximize className="w-5 h-5 text-slate-700" /> },
    { label: 'Acres', value: property?.acres || '1.2', icon: <Compass className="w-5 h-5 text-slate-700" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div>
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
            {property ? `${property.city}, ${property.state}` : 'Bel Air, Los Angeles'}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
            {property?.title || 'The Obsidian Pavilion'}
          </h1>
        </div>
        <div className="sm:text-right mt-2 sm:mt-0">
          <p className="text-3xl font-extrabold text-slate-900">{property?.amount || '$24,500,000'}</p>
          <p className="text-xs text-slate-400 mt-0.5">Est. Mortgage: $118,240 /mo</p>
        </div>
      </div>

      <hr className="border-slate-100" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50/70 rounded-2xl border border-slate-100/50">
            <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100">
              {spec.icon}
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{spec.label}</p>
              <p className="text-lg font-bold text-slate-900">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyHeader;