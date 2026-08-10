import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ searchStyle }) => {
  const [activeNavItem, setActiveNavItem] = useState('properties')

  const toggleMenu = () => {
    const menu = document.querySelector('.mobile-menu')
    menu.classList.toggle('hidden')
  }

  const getNavItemClass = (isActive) => {
    return `nav-item max-w-fit border-b-2 pb-2 font-medium pt-2 transition-colors duration-300 ${isActive
      ? 'border-[#002045] text-[#002045]'
      : 'border-white text-[#43474E] hover:border-[#002045]'
      }`
  }

  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-4'>
      <div className='text-[#002045] font-bold text-xl'><Link to="/">LUXE ESTATE</Link></div>
      <div className='hidden lg:flex items-center'>
        <div className="nav-items text-[#43474E] text-lg flex gap-8">
          <NavLink to="/properties" className={({ isActive }) => getNavItemClass(isActive)}>Properties</NavLink>
          <NavLink to="/collections" className={({ isActive }) => getNavItemClass(isActive)}>Collections</NavLink>
          <NavLink to="/concierge" className={({ isActive }) => getNavItemClass(isActive)}>Concierge</NavLink>
          <NavLink to="/agents" className={({ isActive }) => getNavItemClass(isActive)}>Agents</NavLink>
        </div>
        <div className={`homepage-searchbar ${searchStyle} hidden`}>
          <input placeholder="Global Search..."></input>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Link to="/inquiries" className='bg-[#002045] hidden md:block text-white px-5 py-1 rounded-4xl hover:bg-[#003366] transition-colors duration-300'>Inquire</Link>
        <img src="/Icon.png" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="lg:hidden size-6" onClick={toggleMenu}>
          <path fill="#002045" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path>
        </svg>
      </div>
      <div className="mobile-menu hidden lg:hidden absolute top-10 left-0 w-1/2 bg-white shadow-md rounded-md">
        <div className="nav-items text-[#43474E] text-lg flex flex-col gap-4 p-4">
          <NavLink to="/properties" className={({ isActive }) => getNavItemClass(isActive)}>Properties</NavLink>
          <NavLink to="/collections" className={({ isActive }) => getNavItemClass(isActive)}>Collections</NavLink>
          <NavLink to="/concierge" className={({ isActive }) => getNavItemClass(isActive)}>Concierge</NavLink>
          <NavLink to="/agents" className={({ isActive }) => getNavItemClass(isActive)}>Agents</NavLink>
          <NavLink to="/agents" className={({ isActive }) => getNavItemClass(isActive)}>Advisory</NavLink>
          <Link to="/inquiries" className='bg-[#002045] text-white px-5 py-1 rounded-4xl hover:bg-[#003366] transition-colors duration-300'>Inquire</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar