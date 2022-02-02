import React from 'react'

import Nav from './Nav'
import Header from './Header'
import FeaturedLocation from './FeaturedLocation'
import LocationListings from './LocationListings'
import Footer from './Footer'

function App () {
  return (
  <div className="wrapper">
    <Header />
    <Nav />
    <FeaturedLocation />
    <LocationListings />
    <Footer />
  </div>
  )
}

export default App
