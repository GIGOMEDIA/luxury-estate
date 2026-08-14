import React from 'react';
import { Link } from 'react-router-dom';

const ConciergeServices = () => {
  return (
    <section className="w-full bg-[#002045] py-16 px-4 sm:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 w-full h-87.5 sm:h-112.5 rounded-2xl overflow-hidden shadow-2xl relative bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
              alt="Elevated Real Estate Advisor"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-left lg:pl-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Exclusive Access
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Elevated Real Estate <br className="hidden sm:inline" /> Concierge Services
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              From off-market acquisitions to global portfolio management, our advisory team provides the insight and discretion required for world-class real estate transactions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/agents"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-[#002045] font-bold text-sm rounded-full transition shadow-md text-center"
              >
                Speak with an Advisor
              </Link>
              <Link
                to="/concierge"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-sm rounded-full border border-slate-600 transition text-center"
              >
                Our Process
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConciergeServices;