import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardListing from './components/CardListing'
import AgentProfile from './pages/AgentProfile'
import { Routes, Route } from 'react-router-dom'
import PropertyDetails from './pages/PropertyDetails'

const App = () => {
  return (
    <Routes>
      <Route path="/agent-profile" element={<AgentProfile />} />
      <Route path="/property-details" element={<PropertyDetails />} />
    </Routes>
  )
}

export default App
