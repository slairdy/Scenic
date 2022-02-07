import React, { useState, useEffect } from 'react'

import LocationListing from './LocationListing'

function LocationListings (props) {
//   // map through locations, return each one

return (
  <div className='locationListings'>
    {props.locations?.map(location => {
      return <LocationListing
        key={location.id}
        name={location.name}
        descr={location.descr}
        id={location.id}
        lat_long={location.lat_long}
        />
      })}
  </div>
)

}

export default LocationListings
