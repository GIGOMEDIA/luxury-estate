import React from 'react';
import { TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const StatCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Portfolio Value</span>
        <h3 className="text-3xl font-black text-[#002045] tracking-tight">$4.82B</h3>
        <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
          <TrendingUp className="w-3.5 h-3.5" /> 12.4% vs last quarter
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Listings</span>
        <h3 className="text-3xl font-black text-[#002045] tracking-tight">142</h3>
        <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
          <Clock className="w-3.5 h-3.5" /> 8 pending approval
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Platform Health</span>
        <h3 className="text-3xl font-black text-[#002045] tracking-tight">99.9%</h3>
        <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" /> All systems operational
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Concierge Requests</span>
        <h3 className="text-3xl font-black text-[#002045] tracking-tight">28</h3>
        <div className="flex items-center gap-1 text-[#002045] text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" /> Avg. response: 4m
        </div>
      </div>
    </section>
  );
};

export default StatCards;