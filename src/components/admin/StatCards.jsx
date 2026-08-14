import React from 'react';
import { TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const StatCards = ({ cards = [], loading = false }) => {
  if (loading) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-3 animate-pulse">
            <div className="h-3 bg-slate-200 rounded-md w-1/2"></div>
            <div className="h-8 bg-slate-200 rounded-md w-3/4"></div>
            <div className="h-3 bg-slate-100 rounded-md w-2/3"></div>
          </div>
        ))}
      </section>
    );
  }

  if (!cards.length) return null;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((item, index) => (
        <div key={item.title || index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{item.title}</span>
          <h3 className="text-3xl font-black text-[#002045] tracking-tight">{item.value}</h3>
          {item.delta && (
            <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
              {item.title?.toLowerCase().includes('value') ? (
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              ) : item.title?.toLowerCase().includes('health') ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Clock className="w-3.5 h-3.5" />
              )}
              {item.delta}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default StatCards;