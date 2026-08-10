import React from 'react';
import { Link } from 'react-router-dom';
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
              <li><Link to="/properties" className="hover:text-white transition">Global Search</Link></li>
              <li><Link to="/membership-plans" className="hover:text-white transition">Investment Guide</Link></li>
              <li><Link to="/collections" className="hover:text-white transition">City Guides</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Company</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li><Link to="/advisory" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/inquiries" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/system-admin" className="hover:text-white transition">Press</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Legal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/fair-housing" className="hover:text-white transition">Fair Housing</Link></li>
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