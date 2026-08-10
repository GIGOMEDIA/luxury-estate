import React from 'react';
import { TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const StatCards = ({ cards = [] }) => {
  const defaultCards = [
    { title: 'Total Portfolio Value', value: '$4.82B', delta: '12.4% vs last quarter' },
    { title: 'Active Listings', value: '142', delta: '8 pending approval' },
    { title: 'Platform Health', value: '99.9%', delta: 'All systems operational' },
    { title: 'Concierge Requests', value: '28', delta: 'Avg. response: 4m' },
  ]

  const items = cards.length ? cards : defaultCards

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{item.title}</span>
          <h3 className="text-3xl font-black text-[#002045] tracking-tight">{item.value}</h3>
          <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
            {item.title === 'Total Portfolio Value' ? <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> : item.title === 'Platform Health' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Clock className="w-3.5 h-3.5" />}
            {item.delta}
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatCards;