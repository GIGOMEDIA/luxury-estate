import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center h-25 justify-between px-4 md:px-8 py-4 bg-[#002045]'>
      <div className='text-white font-bold text-xl'><a href="/">LUXE ESTATE</a></div>
      <div className="footer-links flex gap-6">
        <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
        <a href="#" className="text-white hover:text-gray-300">Terms of Service</a>
        <a href="#" className="text-white hover:text-gray-300">Fair Housing</a>
        <a href="#" className="text-white hover:text-gray-300">Cookie Preferences</a>
      </div>
      <div className="max-w-xs">
        <p className="text-white text-xs">
          © 2024 LuxeEstate International. Curated Real Estate
          Excellence.
        </p>
      </div>
    </div>
  )
}

export default Footer