import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Listings', to: '/properties' },
  { label: 'Bookings', to: '/inquiries' },
  { label: 'Analytics', to: '/system-admin' },
  { label: 'Team', to: '/agents' },
]

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 min-h-[calc(100vh-100px)] sticky top-6 bg-white border border-[#EEF3FA] rounded-2xl px-5 py-6 shadow-xs justify-between">
      <div>
        <div className="mb-6 border-b border-slate-100 pb-4">
          <Link to="/" className="text-[#002045] font-black text-lg tracking-wider block">
            LUXE ESTATE
          </Link>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mt-1">
            Institutional Access
          </span>
        </div>

        <nav className="mt-4">
          <ul className="space-y-1.5">
            {navItems.map((it) => (
              <li key={it.label}>
                <NavLink
                  to={it.to}
                  className={({ isActive }) =>
                    `block text-xs font-bold px-4 py-3 rounded-xl transition-colors ${isActive
                      ? 'bg-[#0B2A52] text-white shadow-xs'
                      : 'text-[#334155] hover:bg-slate-50 hover:text-[#0B2A52]'
                    }`
                  }
                >
                  {it.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="pt-6 border-t border-slate-100 space-y-2">
        <Link to="/system-admin" className="block text-xs font-bold text-slate-400 hover:text-[#002045] transition-colors">
          Settings
        </Link>
        <Link to="/inquiries" className="block text-xs font-bold text-slate-400 hover:text-[#002045] transition-colors">
          Support
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar