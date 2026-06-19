import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AgentProfile from './pages/AgentProfile'
import PropertyDetails from './pages/PropertyDetails'
import PropertySearch from './pages/PropertySearch'
import Dashboard from './pages/Dashboard'
import AdvisoryAndAgents from './pages/AdvisoryAndAgents'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<PropertySearch />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/agents" element={<AdvisoryAndAgents />} />
      <Route path="/agent-profile" element={<AgentProfile />} />
      <Route path="/property-details" element={<PropertyDetails />} />
    </Routes>
  )
}

export default App
