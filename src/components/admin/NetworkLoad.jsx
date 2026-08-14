import React from 'react';

const NetworkLoad = ({ items = [], loading = false }) => {
  return (
    <section className="bg-[#002045] text-white rounded-2xl p-6 flex flex-col justify-between space-y-6 min-h-62.5 shadow-md relative overflow-hidden">
      <div>
        <h3 className="text-[24px] font-bold tracking-tight">Network Load</h3>
        <p className="text-[15px] text-slate-300 mt-1">Optimizing delivery across active regions.</p>
      </div>

      {loading ? (
        <div className="flex items-end gap-2.5 h-24 pt-4 justify-between animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full bg-white/10 rounded-xs h-16"></div>
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-slate-400 text-xs py-6 text-center border border-white/10 rounded-lg">
          Telemetry data unavailable
        </div>
      ) : (
        <div className="flex items-end gap-2.5 h-24 pt-4 justify-between">
          {items.map((item, index) => {
            const height = item.load || item.latencyMs || 10;
            return (
              <div key={item.region || index} className="w-full flex flex-col items-center gap-2">
                <div
                  className="w-full bg-white/20 rounded-xs hover:bg-white/40 transition"
                  style={{ height: `${Math.min(height, 90)}px` }}
                  title={`${item.region}: ${height}`}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-bold text-slate-300 pt-4 border-t border-white/10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
          Real-Time Sync
        </span>
        <span>Latency: {items[0]?.latencyMs || '--'}ms</span>
      </div>
    </section>
  );
};

export default NetworkLoad;