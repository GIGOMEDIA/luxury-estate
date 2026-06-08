import React from 'react'

const StatCard = ({ title, value, delta, children }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#EEF3FA]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#6B7280]">{title}</p>
          <p className="text-2xl font-bold text-[#0B2A52]">{value}</p>
        </div>
        <div className="text-sm text-green-600 font-medium">{delta}</div>
      </div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  )
}

export default StatCard
