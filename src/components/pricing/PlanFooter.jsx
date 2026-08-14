import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail } from 'lucide-react';

const PlanFooter = () => {
  return (
    <footer className="bg-[#002045] text-white pt-16 pb-12 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="text-xl font-black tracking-wider">LUXE ESTATE</div>
          <p className="text-xs font-medium text-slate-400 max-w-sm">
            © 2026 LuxeEstate International. Curated Real Estate Excellence.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-slate-300">
          <Link to="/concierge" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/concierge" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/concierge" className="hover:text-white transition-colors">Fair Housing</Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition cursor-pointer" aria-label="Language">
            <Globe className="w-4 h-4 text-white" />
          </button>
          <a href="mailto:advisory@luxeestate.com" className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition cursor-pointer" aria-label="Email">
            <Mail className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PlanFooter;