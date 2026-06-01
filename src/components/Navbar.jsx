import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div><Link to="/">LUXE ESTATE</Link></div>
      <div>
        <div className="nav-items">
          <div className="nav-item"><Link to="/properties">Properties</Link></div>
          <div className="nav-item"><Link to="/about">Collections</Link></div>
          <div className="nav-item"><Link to="/about">Concierge</Link></div>
          <div className="nav-item"><Link to="/about">Agents</Link></div>
          <div className="nav-item"><Link to="/about">Advisory</Link></div>
        </div>
        <div className="homepage-searchbar">
          <input placeholder="Global Search..."></input>
        </div>
      </div>
      <div>
        <button></button>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Navbar