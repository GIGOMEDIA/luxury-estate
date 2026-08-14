import React from 'react'

const PerformanceCard = ({ items = [], insight, loading = false }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xs border border-[#EEF3FA] flex flex-col justify-between min-h-75">
      <div>
        <h3 className="text-lg font-bold text-[#0B2A52]">Performance</h3>
        <p className="text-xs text-[#6B7280] mt-0.5">Lead conversion by source</p>

        {loading ? (
          <div className="mt-6 space-y-4 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="h-3 bg-slate-200 rounded-md w-1/2"></div>
                <div className="h-2 bg-slate-100 rounded-full w-full"></div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="text-xs text-slate-400 py-6 text-center">No performance metrics recorded.</p>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map((it, idx) => (
              <div key={it.label || idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#334155]">
                  <span>{it.label}</span>
                  <span>{it.pct || it.percentage || 0}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-[#0B2A52] transition-all duration-500"
                    style={{ width: `${it.pct || it.percentage || 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {insight && (
        <div className="mt-6 bg-[#0B2A52] text-white p-4 rounded-xl text-xs leading-relaxed shadow-sm">
          <strong className="block text-amber-200 uppercase tracking-wider text-[10px] mb-1">AI Insight</strong>
          <p className="text-slate-200">{insight}</p>
        </div>
      )}
    </div>
  )
}

export default PerformanceCard