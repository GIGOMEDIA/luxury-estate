import React from 'react';

const PlanHero = ({ isAnnual, setIsAnnual }) => {
  return (
    <section className="pt-32 pb-28 px-6 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-black text-[#002045] tracking-tight mb-6 leading-tight">
        Elevate Your Real Estate Portfolio
      </h1>
      <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
        Choose a plan that aligns with your ambitions. From private investors to global 
        institutions, Estate Elite provides the data, access, and tools to navigate the 
        world's most prestigious markets.
      </p>

      <div className="flex items-center justify-center gap-5 text-sm font-bold tracking-widest text-slate-400">
        <span className={!isAnnual ? "text-[#002045]" : ""}>MONTHLY</span>
        <button 
          onClick={() => setIsAnnual(!isAnnual)}
          className="w-14 h-7 bg-[#002045] rounded-full p-1 relative flex items-center transition-all cursor-pointer"
        >
          <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
        <span className={isAnnual ? "text-[#002045]" : ""}>ANNUAL (SAVE 20%)</span>
      </div>
    </section>
  );
};

export default PlanHero;