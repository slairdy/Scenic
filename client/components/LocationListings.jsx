import React, { useState, useEffect } from 'react'

import LocationListing from './LocationListing'
// import { getTable } from '../../server/db'

function LocationListings () {
//   // map through locations, return each one
//   // const locs = getTable('locations')
  return (
    <>
      <div className="locationListings">
      List of locations
        <LocationListing />
      </div>
    </>
  )
}

export default LocationListings
