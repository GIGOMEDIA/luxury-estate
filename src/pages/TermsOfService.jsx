import React from 'react'
import { Link } from 'react-router-dom'
import PolicyPage from '../components/PolicyPage'
import { Scale, ShieldAlert, FileCheck2, AlertCircle, HelpCircle } from 'lucide-react'

const TermsOfService = () => (
  <PolicyPage
    title="Terms of Service"
    subtitle="The binding rules and guidelines governing your access to and use of the Luxe Estate platform, portfolio listings, and advisory tools."
  >
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-[#002045] text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-3">
        <div className="flex items-center gap-3">
          <Scale className="w-6 h-6 text-amber-300 shrink-0" />
          <h2 className="text-xl font-bold tracking-tight">Terms of Use & Agreement</h2>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-normal">
          By accessing or utilizing Luxe Estate, you agree to comply with these Terms of Service. These terms apply to all visitors, buyers, sellers, brokers, and institutional partners who interact with our platform.
        </p>
      </div>

      {/* 1. Acceptable Platform Use */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#002045] flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-[#002045]" />
          1. Acceptable Platform Usage
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          You agree to use Luxe Estate strictly for lawful real estate search, portfolio management, and advisory purposes. Users must not:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-[#002045] uppercase tracking-wider">Scraping & Extraction</h4>
            <p className="text-xs text-slate-600">Scrape, crawl, or extract property listings, image media, or agent data using automated systems.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-[#002045] uppercase tracking-wider">Misrepresentation</h4>
            <p className="text-xs text-slate-600">Provide fraudulent contact details or impersonate institutional investors, agents, or buyers.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-[#002045] uppercase tracking-wider">System Interference</h4>
            <p className="text-xs text-slate-600">Disrupt network architecture, introduce malware, or bypass authentication measures.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-[#002045] uppercase tracking-wider">Unsolicited Contact</h4>
            <p className="text-xs text-slate-600">Use agent profiles or contact points for unsolicited marketing or commercial spam.</p>
          </div>
        </div>
      </div>

      {/* 2. Listing Verification & Disclaimers */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#002045] flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-[#002045]" />
          2. Property Information Disclaimer
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          While Luxe Estate applies rigorous verification standards to all featured listings and house recordings, property information—including valuation, square footage, amenities, and availability—is subject to change without prior notice.
        </p>
        <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
          <strong>Independent Due Diligence:</strong> All property data is provided for informational purposes. Buyers and investors are advised to verify key property details, legal titles, and financial disclosures independently through certified legal counsel.
        </div>
      </div>

      {/* 3. Intellectual Property Rights */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#002045] flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[#002045]" />
          3. Intellectual Property Rights
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          All proprietary branding, high-resolution house recordings, virtual walkthroughs, curatorial articles, and software user interfaces are protected under international copyright and trademark laws. Unauthorized reproduction or redistribution is strictly prohibited.
        </p>
      </div>

      {/* 4. Support & Inquiries */}
      <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-[#002045] font-bold text-base">
          <HelpCircle className="w-5 h-5 text-[#002045] shrink-0" />
          Questions Regarding Our Terms?
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          If you have questions regarding legal compliance, terms updates, or account privileges, please contact our legal advisory team.
        </p>
        <div className="pt-2">
          <Link
            to="/inquiries?type=legal"
            className="inline-flex items-center gap-2 bg-[#002045] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#003366] transition-colors shadow-xs"
          >
            Contact Legal Advisory
          </Link>
        </div>
      </div>
    </div>
  </PolicyPage>
)

export default TermsOfService