import React from 'react';
import { Check } from 'lucide-react';

const PlanCards = ({ isAnnual }) => {
  const tiers = [
    {
      name: "Individual",
      desc: "For discerning private investors.",
      monthlyPrice: 450,
      annualPrice: 360,
      features: ["Priority Access to new listings", "Off-market property alerts", "HD House Recordings", "Basic Portfolio Tracking"],
      cta: "Choose Individual",
      isPopular: false
    },
    {
      name: "Professional",
      desc: "For elite brokers and advisors.",
      monthlyPrice: 1200,
      annualPrice: 960,
      features: ["Everything in Individual", "Full Virtual Tour Suite", "Market Insight Analytics", "Direct Concierge Link", "Team Management (up to 5)"],
      cta: "Choose Professional",
      isPopular: true
    },
    {
      name: "Institutional",
      desc: "For firms and major funds.",
      priceLabel: "Custom",
      subLabel: "/annual only",
      features: ["Unlimited HD Recordings", "API Access for Data Teams", "White-label Listing Portals", "Dedicated Account Manager"],
      cta: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {tiers.map((tier, idx) => (
        <div 
          key={idx}
          className={`rounded-3xl p-10 border-2 relative flex flex-col justify-between 
            transition-all duration-300 ease-out cursor-pointer
            ${
              tier.isPopular 
                ? 'bg-[#002045] text-white border-[#002045] shadow-2xl md:-translate-y-6 hover:-translate-y-8 hover:shadow-blue-950/20' 
                : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:-translate-y-4 hover:shadow-xl hover:border-slate-200/85'
            }`}
        >
          {tier.isPopular && (
            <span className="absolute top-0 right-0 bg-slate-400/30 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-bl-xl rounded-tr-[22px] backdrop-blur-md">
              Most Popular
            </span>
          )}

          <div>
            <h2 className={`text-3xl font-black tracking-tight mb-2 pt-2 ${tier.isPopular ? 'text-slate-300' : 'text-[#002045]'}`}>
              {tier.name}
            </h2>
            
            <p className={`text-sm mb-10 font-bold ${tier.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
              {tier.desc}
            </p>

            <div className="flex items-baseline gap-1 mb-10">
              <span className={`text-4xl font-black tracking-tight ${tier.isPopular ? 'text-white' : 'text-slate-900'}`}>
                {tier.priceLabel ? tier.priceLabel : `$${isAnnual ? tier.annualPrice : tier.monthlyPrice}`}
              </span>
              <span className={`text-xs font-semibold ${tier.isPopular ? 'text-slate-400/80' : 'text-slate-500'}`}>
                {tier.subLabel ? tier.subLabel : '/month'}
              </span>
            </div>

            <ul className="space-y-5 mb-12 text-sm font-bold tracking-wide">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-4">
                  <Check className={`w-5 h-5 shrink-0 stroke-[3px] ${tier.isPopular ? 'text-slate-300' : 'text-[#002045]'}`} />
                  <span className={tier.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button className={`w-full py-4 px-6 rounded-xl text-sm font-black border-2 transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer ${
            tier.isPopular 
              ? 'bg-slate-400/30 text-white border-transparent hover:bg-slate-400/40' 
              : 'bg-white text-[#002045] border-[#002045] hover:bg-[#002045] hover:text-white hover:border-transparent'
          }`}>
            {tier.cta}
          </button>
        </div>
      ))}
    </section>
  );
};

export default PlanCards;