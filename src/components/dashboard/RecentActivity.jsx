import React from 'react'
import { Link } from 'react-router-dom'

const Badge = ({ text = '' }) => {
  const upper = text.toUpperCase()
  const isConfirmed = upper === 'CONFIRMED' || upper === 'APPROVED'
  const isPending = upper.includes('PENDING')

  const bg = isConfirmed ? 'bg-emerald-50 text-emerald-700' : isPending ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-700'

  return (
    <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wider uppercase ${bg}`}>
      {text}
    </span>
  )
}

const RecentActivity = ({ items = [], loading = false }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xs border border-[#EEF3FA] min-h-75">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#0B2A52]">Recent Activity</h3>
        <Link to="/inquiries" className="text-xs font-bold text-[#6B7280] hover:text-[#0B2A52] hover:underline">
          View All Transactions
        </Link>
      </div>

      {loading ? (
        <div className="space-y-3 animate-pulse">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-slate-100 rounded-xl w-full" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="py-12 text-center text-slate-400 text-sm">
          No recent user activity recorded.
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((a, i) => {
            const initials = a.name ? a.name.split(' ').map((n) => n[0]).slice(0, 2).join('') : 'U'

            return (
              <div key={a.id || a._id || i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/80 hover:bg-slate-50 rounded-xl p-3.5 border border-slate-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E6EEF9] flex items-center justify-center text-xs font-bold text-[#002045] shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#0B2A52]">{a.name || 'Anonymous User'}</div>
                    <div className="text-xs text-[#6B7280]">{a.email}</div>
                  </div>
                </div>

                <div className="text-xs font-medium text-[#334155] truncate max-w-xs">{a.property || a.item}</div>

                <div className="text-xs text-[#6B7280] font-medium">{a.type || a.action}</div>

                <div>
                  <Badge text={a.status || 'NEW'} />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default RecentActivity