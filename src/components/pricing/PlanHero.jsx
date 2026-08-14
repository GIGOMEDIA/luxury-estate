import React from 'react';

const PlanHero = ({ isAnnual, setIsAnnual, content }) => {
  const title = content?.title || 'Elevate Your Real Estate Portfolio';
  const description = content?.description || "Choose a plan that aligns with your ambitions. From private investors to global institutions, Estate Elite provides the data, access, and tools to navigate the world's most prestigious markets.";
  const savingsNote = content?.savingsNote || 'Save 20% on annual billing';

  return (
    <section className="pt-28 pb-20 px-6 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-black text-[#002045] tracking-tight mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
        {description}
      </p>

      <div className="flex items-center justify-center gap-5 text-xs font-bold tracking-widest text-slate-400">
        <span className={!isAnnual ? "text-[#002045] font-extrabold" : ""}>MONTHLY</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          aria-label="Toggle annual or monthly billing"
          className="w-14 h-7 bg-[#002045] rounded-full p-1 relative flex items-center transition-all cursor-pointer"
        >
          <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
        <span className={isAnnual ? "text-[#002045] font-extrabold" : ""}>
          ANNUAL ({savingsNote})
        </span>
      </div>
    </section>
  );
};

export default PlanHero;