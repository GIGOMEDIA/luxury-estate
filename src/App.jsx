import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AgentProfile from './pages/AgentProfile'
import PropertyDetails from './pages/PropertyDetails'
import PropertySearch from './pages/PropertySearch'
import Dashboard from './pages/Dashboard'
import AdvisoryAndAgents from './pages/AdvisoryAndAgents'
import CuratedCollections from './pages/CuratedCollections'
import ConciergeServices from './pages/ConciergeServices'
import Inquiries from './pages/Inquiries'
import MembershipPlans from './pages/MembershipPlans'
import SystemAdmin from './pages/SystemAdmin'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import FairHousing from './pages/FairHousing'
import CookiePreferences from './pages/CookiePreferences'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<PropertySearch />} />
      <Route path="/collections" element={<CuratedCollections />} />
      <Route path="/concierge" element={<ConciergeServices />} />
      <Route path="/Concierge" element={<ConciergeServices />} />
      <Route path="/advisory" element={<AdvisoryAndAgents />} />
      <Route path="/inquiries" element={<Inquiries />} />
      <Route path="/membership-plans" element={<MembershipPlans />} />
      <Route path="/system-admin" element={<SystemAdmin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/agents" element={<AdvisoryAndAgents />} />
      <Route path="/agent-profile" element={<AgentProfile />} />
      <Route path="/property-details" element={<PropertyDetails />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/fair-housing" element={<FairHousing />} />
      <Route path="/cookie-preferences" element={<CookiePreferences />} />
    </Routes>
  )
}

export default App
