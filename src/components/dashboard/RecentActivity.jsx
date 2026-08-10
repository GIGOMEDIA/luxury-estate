import React from 'react'
import { Link } from 'react-router-dom'

const defaultActivities = [
  { name: 'Julianne Deville', email: 'julianne@vanguard.com', property: 'Azure Penthouse, Monaco', type: 'Viewing Request', status: 'CONFIRMED' },
  { name: 'Marcus Rossi', email: 'm.rossi@luxe.ch', property: "Villa d'Este Estate, Como", type: 'Financing Inquiry', status: 'PENDING REVIEW' },
  { name: 'Sarah Landeau', email: 's.landeau@paris.me', property: '6th Arr. Duplex, Paris', type: 'Purchase Offer', status: 'ACTION REQUIRED' },
]

const Badge = ({ text }) => (
  <span className="text-[11px] px-2 py-1 rounded-full font-semibold" style={{ background: text === 'CONFIRMED' ? '#E6FAF0' : text === 'PENDING REVIEW' ? '#FFF5E6' : '#EEF6FF', color: text === 'CONFIRMED' ? '#016639' : text === 'PENDING REVIEW' ? '#A65A00' : '#003366' }}>{text}</span>
)

const RecentActivity = ({ items = [] }) => {
  const activityItems = items.length
    ? items.map((item) => ({
        name: item.name,
        email: item.email,
        property: item.property,
        type: item.type,
        status: item.status,
      }))
    : defaultActivities

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EEF3FA]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#0B2A52]">Recent Activity</h3>
        <Link to="/inquiries" className="text-sm text-[#6B7280]">View All Transactions</Link>
      </div>

      <div className="mt-4 space-y-4">
        {activityItems.map((a, i) => (
          <div key={i} className="flex items-center justify-between gap-4 bg-slate-50 rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E6EEF9] flex items-center justify-center text-sm font-medium text-[#002045]">{a.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
              <div>
                <div className="font-medium text-[#0B2A52]">{a.name}</div>
                <div className="text-sm text-[#6B7280]">{a.email}</div>
              </div>
            </div>

            <div className="flex-1 text-sm text-[#334155]">{a.property}</div>

            <div className="text-sm text-[#6B7280]">{a.type}</div>

            <div><Badge text={a.status} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity
