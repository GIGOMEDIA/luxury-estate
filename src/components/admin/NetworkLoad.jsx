import React from 'react';

const NetworkLoad = () => {
  return (
    <section className="bg-[#002045] text-white rounded-2xl p-6 lg:col-span-4 space-y-6 min-h-[250px] shadow-md relative overflow-hidden">
      <div>
        <h3 className="text-[24px] font-bold tracking-tight">Network Load</h3>
        <p className="text-[15px] text-slate-300 mt-1">Optimizing delivery across 12 global regions.</p>
      </div>
      
      <div className="flex items-end gap-2.5 h-24 pt-4 justify-between">
        <div className="w-full bg-white/20 h-10 rounded-xs hover:bg-white/40 transition" />
        <div className="w-full bg-white/20 h-16 rounded-xs hover:bg-white/40 transition" />
        <div className="w-full bg-white/20 h-12 rounded-xs hover:bg-white/40 transition" />
        <div className="w-full bg-white/40 h-24 rounded-xs hover:bg-white/60 transition" />
        <div className="w-full bg-white/20 h-20 rounded-xs hover:bg-white/40 transition" />
        <div className="w-full bg-white/20 h-18 rounded-xs hover:bg-white/40 transition" />
      </div>

      <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-bold text-slate-300 pt-4 border-t border-white/10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" /> 
          Real-Time Sync
        </span>
        <span>Latency: 24ms</span>
      </div>
    </section>
  );
};

export default NetworkLoad;