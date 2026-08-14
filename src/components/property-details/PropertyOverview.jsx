import React from 'react';
import { Cpu } from 'lucide-react';

const PropertyOverview = ({ property, loading = false }) => {
  if (loading) {
    return (
      <div className="space-y-6 animate-pulse mt-8">
        <div className="h-4 bg-slate-200 rounded-md w-full"></div>
        <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
      </div>
    );
  }

  const amenityList = property?.amenities || [];

  return (
    <div className="space-y-8 mt-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-950">Property Overview</h3>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          {property?.overview || property?.description || 'Detailed specifications available upon request.'}
        </p>
      </div>

      {amenityList.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-950">Elite Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenityList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 bg-linear-to-tr from-slate-50/50 to-slate-50 border border-slate-100 rounded-2xl">
                <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-xs">
                  <Cpu className="w-5 h-5 text-slate-700" />
                </div>
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyOverview;