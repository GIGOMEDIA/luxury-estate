import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ searchStyle = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const getNavItemClass = (isActive) =>
    `nav-item max-w-fit border-b-2 pb-1 pt-1 font-medium transition-colors duration-300 ${isActive
      ? 'border-[#002045] text-[#002045]'
      : 'border-transparent text-[#43474E] hover:border-[#002045]'
    }`

  return (
    <header className="relative flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-xs">
      {/* Brand Logo */}
      <div className="text-[#002045] font-bold text-xl">
        <Link to="/" onClick={closeMenu}>
          LUXE ESTATE
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <nav className="nav-items text-[#43474E] text-lg flex gap-8">
          <NavLink to="/properties" className={({ isActive }) => getNavItemClass(isActive)}>
            Properties
          </NavLink>
          <NavLink to="/collections" className={({ isActive }) => getNavItemClass(isActive)}>
            Collections
          </NavLink>
          <NavLink to="/concierge" className={({ isActive }) => getNavItemClass(isActive)}>
            Concierge
          </NavLink>
          <NavLink to="/agents" className={({ isActive }) => getNavItemClass(isActive)}>
            Agents
          </NavLink>
        </nav>

        {/* Search Bar */}
        <div className={`homepage-searchbar ${searchStyle}`}>
          <input
            type="text"
            placeholder="Global Search..."
            className="border px-3 py-1 rounded-md text-sm"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Link
          to="/inquiries"
          className="bg-[#002045] hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#003366] transition-colors duration-300 text-sm font-medium"
        >
          Inquire
        </Link>

        <img src="/Icon.png" alt="User Profile" className="size-6 object-contain" />

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden p-1 text-[#002045] focus:outline-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full md:w-1/2 bg-white shadow-lg rounded-b-md z-50">
          <nav className="nav-items text-[#43474E] text-lg flex flex-col gap-4 p-6">
            <NavLink
              to="/properties"
              onClick={closeMenu}
              className={({ isActive }) => getNavItemClass(isActive)}
            >
              Properties
            </NavLink>
            <NavLink
              to="/collections"
              onClick={closeMenu}
              className={({ isActive }) => getNavItemClass(isActive)}
            >
              Collections
            </NavLink>
            <NavLink
              to="/concierge"
              onClick={closeMenu}
              className={({ isActive }) => getNavItemClass(isActive)}
            >
              Concierge
            </NavLink>
            <NavLink
              to="/agents"
              onClick={closeMenu}
              className={({ isActive }) => getNavItemClass(isActive)}
            >
              Agents
            </NavLink>
            <Link
              to="/inquiries"
              onClick={closeMenu}
              className="bg-[#002045] text-center text-white px-5 py-2 rounded-full hover:bg-[#003366] transition-colors duration-300 text-sm font-medium mt-2"
            >
              Inquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar