import React from 'react';
import { Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#002045] text-white font-sans pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          <div className="lg:col-span-5 space-y-4 max-w-sm">
            <h3 className="text-xl font-black tracking-wider">LUXE ESTATE</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
              The world's premier platform for exceptional residential and commercial property investments. Curated by experts, verified for excellence.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Explore</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li><a href="#search" className="hover:text-white transition">Global Search</a></li>
              <li><a href="#guide" className="hover:text-white transition">Investment Guide</a></li>
              <li><a href="#guides" className="hover:text-white transition">City Guides</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Company</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="#press" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Legal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#fair-housing" className="hover:text-white transition">Fair Housing</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 font-medium text-center sm:text-left">
            © 2026 LuxeEstate International. Curated Real Estate Excellence.
          </p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <button className="hover:text-white transition cursor-pointer">
              <Globe className="w-4 h-4" />
            </button>
            <button className="hover:text-white transition cursor-pointer">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;