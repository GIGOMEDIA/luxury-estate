import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AgentProfile from './pages/AgentProfile'
import PropertyDetails from './pages/PropertyDetails'
import PropertySearch from './pages/PropertySearch'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/properties" replace />} />
      <Route path="/properties" element={<PropertySearch />} />
      <Route path="/agent-profile" element={<AgentProfile />} />
      <Route path="/property-details" element={<PropertyDetails />} />
    </Routes>
  )
}

export default App
