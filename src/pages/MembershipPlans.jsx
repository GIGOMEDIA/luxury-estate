import React, { useState } from 'react';
import PlanHero from '../components/pricing/PlanHero';
import PlanCards from '../components/pricing/PlanCards';
import PlanTable from '../components/pricing/PlanTable';
import PlanCTA from '../components/pricing/PlanCTA';
import PlanFooter from '../components/pricing/PlanFooter';
import Navbar from '../components/Navbar'

const MembershipPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased">
      <Navbar/>
      <PlanHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <PlanCards isAnnual={isAnnual} />
      <PlanTable />
      <PlanCTA />
      <PlanFooter />
    </div>
  );
};

export default MembershipPlans;