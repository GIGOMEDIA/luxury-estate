import React from 'react';
import { Building2, LayoutDashboard, CalendarDays, BarChart3, Users, Plus, Settings, LifeBuoy, X, Layers, Briefcase } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <aside 
        className={`w-64 bg-white border-r border-slate-200 flex flex-col justify-between fixed h-screen z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        
        <div>
          <div className="p-6 flex items-center justify-between border-b border-slate-50">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#002045] rounded-xl text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-bold text-[#002045] text-[26px] tracking-tight leading-none">Elite Portfolio</h1>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">Institutional Access</span>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-[#002045] rounded-full hover:bg-slate-50 lg:hidden transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-4 space-y-1">
            <a href="#dashboard" onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#002045] text-white text-[13px] font-bold shadow-xs transition">
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </a>

            <div className="lg:hidden space-y-1 py-1 border-b border-slate-100 mb-1">
              <span className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Management</span>
              <a href="#properties" onClick={onClose} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-[#002045] text-[13px] font-bold transition">
                <Building2 className="w-5 h-5" /> Properties
              </a>
              <a href="#collections" onClick={onClose} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-[#002045] text-[13px] font-bold transition">
                <Layers className="w-5 h-5" /> Collections
              </a>
              <a href="#agents" onClick={onClose} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-[#002045] text-[13px] font-bold transition">
                <Briefcase className="w-5 h-5" /> Agents
              </a>
            </div>

            <a href="#listings" onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-[#002045] text-[13px] font-bold transition">
              <Building2 className="w-5 h-5" /> Listings
            </a>
            <a href="#bookings" onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-[#002045] text-[13px] font-bold transition">
              <CalendarDays className="w-5 h-5" /> Bookings
            </a>
            <a href="#analytics" onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-[#002045] text-[13px] font-bold transition">
              <BarChart3 className="w-5 h-5" /> Analytics
            </a>
            <a href="#team" onClick={onClose} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-[#002045] text-[13px] font-bold transition">
              <Users className="w-5 h-5" /> Team
            </a>
          </nav>
        </div>

        <div className="p-4 pb-6 mt-5 border-t border-slate-100">
          <button className="w-full py-3.5 px-4 bg-[#002045] hover:bg-[#002a5c] text-white rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] cursor-pointer">
            <Plus className="w-5 h-5" /> New Listing
          </button>
          
          <div className="space-y-1 pt-2">
            <a href="#settings" onClick={onClose} className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-slate-500 hover:text-[#002045] hover:bg-slate-50 rounded-lg transition-all">
              <Settings className="w-5 h-5" /> Settings
            </a>
            <a href="#support" onClick={onClose} className="flex items-center gap-3 px-4 py-2.5 text-[13px]  font-bold text-slate-500 hover:text-[#002045] hover:bg-slate-50 rounded-lg transition-all">
              <LifeBuoy className="w-5 h-5" /> Support
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80" 
              alt="Alexander Sterling" 
              className="w-10 h-10 rounded-full object-cover border border-slate-100"
            />
            <div>
              <p className="text-xs font-bold text-[#002045] leading-none">Alexander Sterling</p>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mt-1.5">Managing Partner</span>
            </div>
          </div>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;