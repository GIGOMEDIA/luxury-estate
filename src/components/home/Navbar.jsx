import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-slate-100 font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="shrink-0">
            <a href="/" className="text-xl font-black tracking-wider text-[#002045]">
              LUXE ESTATE
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#properties" className="text-sm font-bold text-[#002045] relative pb-7 top-3.5 border-b-2 border-[#002045]">
              Properties
            </a>
            <a href="#collections" className="text-sm font-medium text-slate-600 hover:text-[#002045] transition">
              Collections
            </a>
            <a href="#concierge" className="text-sm font-medium text-slate-600 hover:text-[#002045] transition">
              Concierge
            </a>
            <a href="#agents" className="text-sm font-medium text-slate-600 hover:text-[#002045] transition">
              Agents
            </a>
            <a href="#advisory" className="text-sm font-medium text-slate-600 hover:text-[#002045] transition">
              Advisory
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Global search..." 
                className="pl-9 pr-4 py-2 w-48 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:w-56 transition-all duration-300"
              />
            </div>

            <button className="px-6 py-2.5 bg-[#002045] hover:bg-[#002b5c] text-white text-xs font-bold rounded-full transition shadow-xs cursor-pointer">
              Inquire
            </button>

            <button className="text-[#002045] hover:text-slate-600 transition cursor-pointer">
              <User className="w-5 h-5" />
            </button>
          </div>

          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#002045] hover:text-slate-600 transition focus:outline-hidden"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-md animate-fadeIn">
          <a href="#properties" className="block text-sm font-bold text-[#002045] py-2">Properties</a>
          <a href="#collections" className="block text-sm font-medium text-slate-600 py-2">Collections</a>
          <a href="#concierge" className="block text-sm font-medium text-slate-600 py-2">Concierge</a>
          <a href="#agents" className="block text-sm font-medium text-slate-600 py-2">Agents</a>
          <a href="#advisory" className="block text-sm font-medium text-slate-600 py-2">Advisory</a>
          <hr className="border-slate-100 my-2" />
          <div className="space-y-4 pt-2">
            <div className="relative flex items-center w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3" />
              <input type="text" placeholder="Global search..." className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-xs" />
            </div>
            <button className="w-full py-3 bg-[#002045] text-white text-xs font-bold rounded-full">Inquire</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;