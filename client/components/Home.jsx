import React from 'react'

import Nav from './Nav'
import FeaturedLocation from './FeaturedLocation'
import LocationListings from './LocationListings'

function Home (props) {
  return (
    <>
      <Nav />
      <FeaturedLocation />
      <LocationListings />
    </>
  )
}

export default Home
