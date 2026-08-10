import React from 'react'

const PerformanceCard = ({ items = [], insight }) => {
  const defaultItems = [
    { label: 'Direct Inquiries', pct: 64 },
    { label: 'Agent Referrals', pct: 28 },
    { label: 'Social Platforms', pct: 12 },
  ]

  const chartItems = items.length ? items : defaultItems
  const insightText = insight || 'Direct inquiries for Mediterranean properties are up 14% this week. Prioritize Monaco-based listings in next digest.'

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EEF3FA]">
      <h3 className="text-lg font-semibold text-[#0B2A52]">Performance</h3>
      <p className="text-sm text-[#6B7280] mt-1">Lead conversion by source</p>

      <div className="mt-4 space-y-3">
        {chartItems.map((it) => (
          <div key={it.label} className="space-y-1">
            <div className="flex items-center justify-between text-sm text-[#334155]"><span>{it.label}</span><span>{it.pct}%</span></div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="h-2 rounded-full bg-[#0B2A52]" style={{ width: `${it.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-[#0B2A52] text-white p-3 rounded-lg text-sm">
        <strong>AI Insight</strong>
        <p className="mt-2 text-sm">{insightText}</p>
      </div>
    </div>
  )
}

export default PerformanceCard
