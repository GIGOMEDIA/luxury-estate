import React, { useState } from 'react';
import FloorPlan from '../../assets/floor-plans.png';

const FloorPlans = () => {
  const [activeLevel, setActiveLevel] = useState(1);

  return (
    <div className="space-y-4 mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-950">Floor Plans</h3>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setActiveLevel(1)}
            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeLevel === 1 ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Level 1
          </button>
          <button 
            onClick={() => setActiveLevel(2)}
            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeLevel === 2 ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Level 2
          </button>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex items-center justify-center min-h-87.5">
        {activeLevel === 1 ? (
          <div className="text-center space-y-4">
            <img 
              src={FloorPlan} 
              alt="Floor Plan Level 1" 
              className="max-h-150 rounded-2xl object-contain mx-auto mix-blend-multiply opacity-80"
            />
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-64 h-64 border-2 border-dashed border-slate-200 rounded-2xl mx-auto flex items-center justify-center text-slate-400">
               LEVEL 2 DIAGRAM WIDGET
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloorPlans;