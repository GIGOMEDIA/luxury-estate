import React from 'react'
import { Link } from 'react-router-dom'
import PolicyPage from '../components/PolicyPage'
import { ShieldCheck, Scale, Flag, HeartHandshake } from 'lucide-react'

const FairHousing = () => (
  <PolicyPage
    title="Fair Housing & Equal Opportunity"
    subtitle="Our unwavering commitment to non-discriminatory service, equal housing opportunity, and inclusive luxury real estate standards."
  >
    <div className="space-y-8">
      {/* Commitment Banner */}
      <div className="bg-[#002045] text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-3">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-amber-300 shrink-0" />
          <h2 className="text-xl font-bold tracking-tight">Equal Housing Opportunity Guarantee</h2>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-normal">
          Luxe Estate is fully committed to the letter and spirit of the Fair Housing Act and equal opportunity laws worldwide. We uphold an environment where every client, buyer, seller, and partner receives equal access to luxury real estate opportunities without bias or distinction.
        </p>
      </div>

      {/* Core Non-Discrimination Protections */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#002045] flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#002045]" />
          Protected Characteristics & Non-Discrimination
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          We strictly prohibit discrimination in any aspect of real estate transactions—including advertising, showing, listing, leasing, financing, or property management—based on protected characteristics including, but not limited to:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {[
            'Race, Color, or Ethnicity',
            'Religion or Creed',
            'National Origin or Ancestry',
            'Sex, Gender Identity, or Expression',
            'Sexual Orientation',
            'Familial Status (Children or Pregnancy)',
            'Disability or Handicap',
            'Source of Income or Military Status',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-[#002045] shrink-0" />
              <span className="text-xs font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Platform & Advisory Conduct */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#002045] flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-[#002045]" />
          Platform Standards & Advisor Expectations
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          All real estate professionals, global advisors, and property listings hosted on the Luxe Estate platform must adhere strictly to these principles. We actively enforce:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-2">
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#002045]">•</span>
            <span><strong>Equal Advertising:</strong> Marketing materials and property descriptions must focus strictly on property characteristics and physical attributes, avoiding exclusionary language.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#002045]">•</span>
            <span><strong>Consistent Service:</strong> Uniform professional standards, touring schedules, and information distribution for all inquiring parties.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#002045]">•</span>
            <span><strong>Accessibility Compliance:</strong> Ensuring property presentation and digital channels accommodate individuals with disabilities.</span>
          </li>
        </ul>
      </div>

      {/* Reporting Violations CTA */}
      <div className="p-6 bg-amber-50/60 border border-amber-200/80 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
          <Flag className="w-5 h-5 text-amber-800 shrink-0" />
          Reporting Conduct Inconsistencies
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          If you believe a property listing, advisor, or interaction on Luxe Estate violates fair housing laws or our non-discrimination standards, please contact our compliance division immediately.
        </p>
        <div className="pt-2">
          <Link
            to="/inquiries?type=compliance"
            className="inline-flex items-center gap-2 bg-[#002045] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#003366] transition-colors shadow-xs"
          >
            Submit a Compliance Report
          </Link>
        </div>
      </div>
    </div>
  </PolicyPage>
)

export default FairHousing