import React from 'react';
import { Globe, Mail } from 'lucide-react';

const PlanFooter = () => {
  return (
    <footer className="bg-[#002045] text-white pt-20 pb-12 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 ">
        
        <div className="space-y-3">
          <div className="text-2xl font-black tracking-wider">LUXE ESTATE</div>
          <p className="text-[13px] font-bold text-slate-400 tracking-wide max-w-sm leading-relaxed">
            © 2026 LuxeEstate International. Curated Real Estate Excellence.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-black text-slate-300 tracking-wider">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#housing" className="hover:text-white transition-colors">Fair Housing</a>
          <a href="#cookies" className="hover:text-white transition-colors">Cookie Preferences</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition cursor-pointer">
            <Globe className="w-4 h-4 text-white" />
          </button>
          <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition cursor-pointer">
            <Mail className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
      
    </footer>
  );
};

export default PlanFooter;