import React from 'react'

const items = [
  'Dashboard',
  'Listings',
  'Bookings',
  'Analytics',
  'Team',
]

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-white border-r border-[#EEF3FA] px-4 py-6">
      <div className="mb-6">
        <div className="text-[#002045] font-bold text-lg">LUXE ESTATE</div>
        <p className="text-sm text-slate-500 mt-2">Elite Portfolio<br/>Institutional Access</p>
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it} className={`px-3 py-2 rounded-lg ${it === 'Dashboard' ? 'bg-[#0B2A52] text-white' : 'text-[#334155] hover:bg-slate-50'}`}>
              <a href="#" className="block text-sm font-medium">{it}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <div className="text-sm text-slate-500 mb-4">Settings</div>
        <div className="text-sm text-slate-500">Support</div>
      </div>
    </aside>
  )
}

export default Sidebar
