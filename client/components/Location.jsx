import React, { useState, useEffect } from 'react'
import { useParams, render } from 'react-router-dom';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { getLocation } from '../api'
import { getLocFeatures } from '../api'
import FeaturedLocation from './FeaturedLocation'
import LocMap from './LocMap'

function Location () {
  const [location, setLocation] = useState([])
  const [features, setFeatures] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  let curId = useParams()
  curId = parseInt(curId.id)
  
  useEffect(() => {
    findLocation()
  }, [])

  function initMap(latLong) {
    let locMap = new google.maps.Map(document.getElementById("locMap"), {
      center: latLong[0],
      zoom: 18,
    })
    for(let i=0;i<latLong.length;i++){
      return(
        new google.maps.Marker({
          position: latLong[0],
          map: locMap,
          icon:{ url: '/images/icons/mapicon.svg',scaledSize: new google.maps.Size(50, 50) }
        })        
      )
    }

  }
  

  function findLocation(){
    return getLocation(curId)
    .then(location => {
     setLocation(location)
     let latLong = String(location.lat_long).split(',')
     latLong = [{
       lat:parseFloat(latLong[0]),
       lng:parseFloat(latLong[1])
     }]
      initMap(latLong)

      return location
    })
    .then(location =>{
      return getLocFeatures(location.id)
    })
    .then(features => {
      setFeatures(features)
      return null
    })
    .catch(err => {
      setErrorMessage(err.message)
    })
  }

  return (
    <>
      <FeaturedLocation location={location} features={features} pageType="content" />
      <LocMap location={location} />
    </>
  )
}

export default Location