import React from 'react'
import Navbar from '../components/Navbar'
import CardListing from '../components/CardListing'
import ActiveListing1 from '../assets/active-listing-1.png'
import ActiveListing2 from '../assets/active-listing-2.png'
import ActiveListing3 from '../assets/active-listing-3.png'
import Footer from '../components/Footer'
import AboutAgent from '../components/agent-profile/AboutAgent'

const AgentProfile = () => {
  return (
    <>
      <Navbar />
      <AboutAgent />
      <div className='active'>
        <p>Active Listings</p>
        <div>
          <p>Curated high-value opportunities currently available.</p>
          <div>
            <p>View All</p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#002045" />
            </svg>
          </div>
        </div>
        <div>
          <CardListing imagePath={ActiveListing1} amount="$14, 500,000" placeName="The Glass Pavilion, Bel Air" noOfBeds="6" noOfBaths="8" area="12,400" />
          <CardListing imagePath={ActiveListing2} amount="$8,250,000" placeName="Azure Waterfront Villa, Miami" noOfBeds="4" noOfBaths="5" area="6,800 sq ft" />
          <CardListing imagePath={ActiveListing3} amount="$22,000,000" placeName="The Crown Residence, Manhattan" noOfBeds="5" noOfBaths="6" area="8,500 sq ft" />
        </div>
      </div>
    </>
  )
}

export default AgentProfile