import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

const AdminHeader = ({ onMenuClick }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20 w-full">
      
      <div className="flex items-center gap-2">
        <button 
          onClick={onMenuClick}
          className="p-2 text-slate-600 hover:text-[#002045] rounded-full hover:bg-slate-50 lg:hidden transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="text-xl font-black tracking-wider text-[#002045]">
          LUXE ESTATE
        </div>
      </div>

      <div className="flex items-center gap-8">
        
        <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold text-slate-500">
          <a href="#properties" className="hover:text-[#002045] transition-colors">Properties</a>
          <a href="#collections" className="hover:text-[#002045] transition-colors">Collections</a>
          <a href="#agents" className="hover:text-[#002045] transition-colors">Agents</a>
        </nav>

        <div className="flex items-center gap-4">
          
          <div className="relative hidden sm:flex items-center">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-4 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search portfolio..." 
              className="pl-10 pr-4 py-2 w-48 md:w-64 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-700 placeholder-slate-400 focus:outline-hidden focus:bg-slate-100/70 transition-all"
            />
          </div>

          <button className="p-2 text-slate-600 hover:text-[#002045] rounded-full hover:bg-slate-50 relative transition-colors cursor-pointer">
            <Bell className="w-4 h-4" />
          </button>

          <button className="p-2 text-slate-600 hover:text-[#002045] rounded-full hover:bg-slate-50 transition-colors cursor-pointer">
            <User className="w-4 h-4" />
          </button>

        </div>

      </div>

    </header>
  );
};

export default AdminHeader;