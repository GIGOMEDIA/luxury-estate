import React from 'react'
import { Link } from 'react-router-dom'
import PolicyPage from '../components/PolicyPage'
import { Lock, Eye, ShieldCheck, Database, FileText } from 'lucide-react'

const PrivacyPolicy = () => (
  <PolicyPage
    title="Privacy Policy"
    subtitle="Our commitment to safeguarding client information, maintaining data integrity, and respecting user privacy across our global portfolio."
  >
    <div className="space-y-8">
      {/* Privacy Guarantee Header */}
      <div className="bg-[#002045] text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-3">
        <div className="flex items-center gap-3">
          <Lock className="w-6 h-6 text-amber-300 shrink-0" />
          <h2 className="text-xl font-bold tracking-tight">Institutional Privacy Guarantee</h2>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-normal">
          Luxe Estate respects the confidentiality of high-net-worth investors, property owners, and prospective buyers. We handle all personal information with strict discretion, enterprise-grade encryption, and adherence to international privacy standards.
        </p>
      </div>

      {/* 1. Information Collection */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#002045] flex items-center gap-2">
          <Database className="w-5 h-5 text-[#002045]" />
          1. Information We Collect
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          We collect information to provide seamless advisory services and match you with relevant real estate opportunities:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-[#002045] uppercase tracking-wider">Direct Client Inputs</h4>
            <p className="text-xs text-slate-600">Full name, contact details, inquiry messages, preferred locations, and investment budgets.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-[#002045] uppercase tracking-wider">Portfolio Interactions</h4>
            <p className="text-xs text-slate-600">Saved property collections, viewed listings, consultation requests, and virtual tour bookings.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-[#002045] uppercase tracking-wider">Technical Telemetry</h4>
            <p className="text-xs text-slate-600">Browser type, IP address, device telemetry, and functional session cookies.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-[#002045] uppercase tracking-wider">Advisory Records</h4>
            <p className="text-xs text-slate-600">Confidential communication history with licensed advisors or concierge managers.</p>
          </div>
        </div>
      </div>

      {/* 2. Information Usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#002045] flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#002045]" />
          2. How We Use Your Information
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Your information is utilized solely to facilitate high-value property transactions and maintain platform excellence:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#002045]">•</span>
            <span><strong>Advisory Coordination:</strong> Facilitating communication between clients and verified senior partners.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#002045]">•</span>
            <span><strong>Curated Matching:</strong> Recommending off-market and public estates tailored to your criteria.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#002045]">•</span>
            <span><strong>Platform Security:</strong> Preventing fraudulent inquiries, verifying identity, and protecting portfolio integrity.</span>
          </li>
        </ul>
      </div>

      {/* 3. Non-Sale & Data Protection */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#002045] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#002045]" />
          3. Absolute Commitment Against Selling Data
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          <strong>Luxe Estate does not sell, rent, or trade personal information to third-party data brokers or advertisers.</strong> Data is shared exclusively with necessary service providers (such as hosting infrastructure or designated legal advisors) strictly under non-disclosure obligations.
        </p>
      </div>

      {/* 4. Client Rights & Inquiries */}
      <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-[#002045] font-bold text-base">
          <FileText className="w-5 h-5 text-[#002045] shrink-0" />
          Your Rights & Data Access Requests
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Depending on your jurisdiction, you have the right to request access to, correction of, or permanent deletion of your personal data. You may also request a copy of the telemetry records we maintain.
        </p>
        <div className="pt-2">
          <Link
            to="/inquiries?type=privacy"
            className="inline-flex items-center gap-2 bg-[#002045] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#003366] transition-colors shadow-xs"
          >
            Submit Data Inquiry or Deletion Request
          </Link>
        </div>
      </div>
    </div>
  </PolicyPage>
)

export default PrivacyPolicy