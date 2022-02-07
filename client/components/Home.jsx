import React, {useState, useEffect} from 'react'

import Nav from './Nav'
import FeaturedLocation from './FeaturedLocation'
import LocationListings from './LocationListings'
import { getFeatLocation } from '../api'
import { getLocFeatures } from '../api'

function Home (props) {
  const [featured, setFeatured] = useState([])
  const [features, setFeatures] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetchFeatured()
  }, [])

  function fetchFeatured () {
    return getFeatLocation()
      .then(featured => {
        setFeatured(featured)
        return featured
      })
      .then(featured =>{
        return getLocFeatures(featured.id)
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
      <Nav />
      <FeaturedLocation location={featured} features={features} pageType="" />
      <LocationListings locations={props.locations} />
    </>
  )
}

export default Home
