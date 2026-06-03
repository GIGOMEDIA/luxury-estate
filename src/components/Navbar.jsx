import React, { useState } from 'react'

const Navbar = ({ searchStyle }) => {
  const [activeNavItem, setActiveNavItem] = useState('properties')

  const handleNavItemClick = (item) => {
    setActiveNavItem(item)
  }

  const toggleMenu = () => {
    const menu = document.querySelector('.mobile-menu')
    menu.classList.toggle('hidden')
  }

  const getNavItemClass = (item) => {
    return `nav-item max-w-fit border-b-2 pb-2 font-medium pt-2 transition-colors duration-300 ${activeNavItem === item
        ? 'border-[#002045] text-[#002045]'
        : 'border-white text-[#43474E] hover:border-[#002045]'
      }`
  }

  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-4'>
      <div className='text-[#002045] font-bold text-xl'><a href="/">LUXE ESTATE</a></div>
      <div className='hidden lg:flex items-center'>
        <div className="nav-items text-[#43474E] text-lg flex gap-8">
          <div className={getNavItemClass('properties')}>
            <a href="/properties" onClick={() => handleNavItemClick('properties')}>Properties</a>
          </div>
          <div className={getNavItemClass('collections')}>
            <a href="/Collections" onClick={() => handleNavItemClick('collections')}>Collections</a>
          </div>
          <div className={getNavItemClass('concierge')}>
            <a href="/Concierge" onClick={() => handleNavItemClick('concierge')}>Concierge</a>
          </div>
          <div className={getNavItemClass('agents')}>
            <a href="/Agents" onClick={() => handleNavItemClick('agents')}>Agents</a>
          </div>
          <div className={getNavItemClass('advisory')}>
            <a href="/Advisory" onClick={() => handleNavItemClick('advisory')}>Advisory</a>
          </div>
        </div>
        <div className={`homepage-searchbar ${searchStyle} hidden`}>
          <input placeholder="Global Search..."></input>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <button className='bg-[#002045] hidden md:block text-white px-5 py-1 rounded-4xl hover:bg-[#003366] transition-colors duration-300'>Inquire</button>
        <img src="/Icon.png" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="lg:hidden size-6" onClick={toggleMenu}>
          <path fill="#002045" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path>
        </svg>
      </div>
      <div className="mobile-menu hidden lg:hidden absolute top-10 left-0 w-1/2 bg-white shadow-md rounded-md">
        <div className="nav-items text-[#43474E] text-lg flex flex-col gap-4 p-4">
          <div className={getNavItemClass('properties')}>
            <a href="/properties" onClick={() => handleNavItemClick('properties')}>Properties</a>
          </div>
          <div className={getNavItemClass('collections')}>
            <a href="/Collections" onClick={() => handleNavItemClick('collections')}>Collections</a>
          </div>
          <div className={getNavItemClass('concierge')}>
            <a href="/Concierge" onClick={() => handleNavItemClick('concierge')}>Concierge</a>
          </div>
          <div className={getNavItemClass('agents')}>
            <a href="/Agents" onClick={() => handleNavItemClick('agents')}>Agents</a>
          </div>
          <div className={getNavItemClass('advisory')}>
            <a href="/Advisory" onClick={() => handleNavItemClick('advisory')}>Advisory</a>
          </div>
          <button className='bg-[#002045] text-white px-5 py-1 rounded-4xl hover:bg-[#003366] transition-colors duration-300'>Inquire</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar