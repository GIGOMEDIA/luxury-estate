import React from 'react'

const StatCard = ({ title, value, delta, children }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-xs border border-[#EEF3FA] flex flex-col justify-between">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-black text-[#0B2A52] tracking-tight mt-1">{value || '0'}</p>
        </div>
        {delta && (
          <div className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
            {delta}
          </div>
        )}
      </div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  )
}

export default StatCard