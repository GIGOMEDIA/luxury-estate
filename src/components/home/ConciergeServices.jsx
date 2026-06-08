import React from 'react';
import AdvisorImg from '../../assets/advisor.png';

const ConciergeServices = () => {
  return (
    <section className="w-full bg-[#002045] py-1 px-4 sm:px-12 lg:px-24 font-sans mb-1">
      <div className="max-w-7xl mx-auto bg-[#002045] overflow-hidden p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 w-full h-87.5 sm:h-112.5 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={AdvisorImg} 
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
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-950 font-bold text-sm rounded-full transition shadow-md cursor-pointer text-center">
                Speak with an Advisor
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 text-white font-bold text-sm rounded-full border border-slate-700/80 transition cursor-pointer text-center">
                Our Process
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConciergeServices;