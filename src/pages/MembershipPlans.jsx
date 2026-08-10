import React, { useState } from 'react';
import PlanHero from '../components/pricing/PlanHero';
import PlanCards from '../components/pricing/PlanCards';
import PlanTable from '../components/pricing/PlanTable';
import PlanCTA from '../components/pricing/PlanCTA';
import PlanFooter from '../components/pricing/PlanFooter';
import Navbar from '../components/Navbar'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'

const MembershipPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { data } = useBackendData(async () => {
    const [hero, plans, comparison] = await Promise.all([
      apiRequest('/membership/hero'),
      apiRequest('/membership'),
      apiRequest('/membership/comparison'),
    ])

    return {
      hero,
      plans: plans.items || [],
      comparison,
    }
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased">
      <Navbar/>
      <PlanHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} content={data?.hero} />
      <PlanCards isAnnual={isAnnual} plans={data?.plans || []} />
      <PlanTable comparison={data?.comparison} />
      <PlanCTA />
      <PlanFooter />
    </div>
  );
};

export default MembershipPlans;