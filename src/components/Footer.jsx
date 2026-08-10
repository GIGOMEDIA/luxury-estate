import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#002045] px-4 md:px-8 py-6'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4'>
        <div className='text-white font-bold text-xl'>
          <Link to="/">LUXE ESTATE</Link>
        </div>

        <nav className="footer-links flex flex-wrap gap-3 justify-center md:justify-start">
          <Link to="/privacy-policy" className="text-white hover:text-gray-300 text-sm">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-white hover:text-gray-300 text-sm">Terms of Service</Link>
          <Link to="/fair-housing" className="text-white hover:text-gray-300 text-sm">Fair Housing</Link>
          <Link to="/cookie-preferences" className="text-white hover:text-gray-300 text-sm">Cookie Preferences</Link>
        </nav>

        <div className="text-center md:text-right text-white text-xs max-w-xs">
          <p>© 2024 LuxeEstate International. Curated Real Estate Excellence.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer