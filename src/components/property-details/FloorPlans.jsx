import React, { useState } from 'react';
import { resolveMediaUrl } from '../../lib/media';

const FloorPlans = ({ property, loading = false }) => {
  const [activeLevel, setActiveLevel] = useState(1);
  const floorPlans = property?.floorPlans || [];

  if (loading || !floorPlans.length) return null;

  const currentPlan = floorPlans[activeLevel - 1]?.url;

  return (
    <div className="space-y-4 mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-950">Floor Plans</h3>
        {floorPlans.length > 1 && (
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {floorPlans.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLevel(idx + 1)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeLevel === idx + 1 ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                Level {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex items-center justify-center min-h-87.5">
        {currentPlan ? (
          <img
            src={resolveMediaUrl(currentPlan)}
            alt={`Floor Plan Level ${activeLevel}`}
            className="max-h-125 rounded-2xl object-contain mx-auto opacity-90"
          />
        ) : (
          <div className="text-slate-400 text-sm italic">
            Diagram unavailable for this level.
          </div>
        )}
      </div>
    </div>
  );
};

export default FloorPlans;