import React, {useState, useEffect} from 'react'
import { getSearchResults, getLocations } from '../api'
import LocationListings from './LocationListings'
import TitleBar from './TitleBar'
import { getFeatures } from '../api'
import { useSearchParams } from "react-router-dom";
import {filterSearchResults } from '../api'

function SearchResults (props) {

  const [locations, setLocations] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [isResults, setisResults] = useState(false)
  const [featArr, setFeatArr] = useState([])

  useEffect(() => {
    fetchLocations()
  }, [])


  function fetchLocations () {
    return getFeatures()
    .then(features => {

      const searchquery = searchParams.get("searchquery")
      const feats = features.filter((feature)=>{
        return feature.id === parseInt(searchParams.get(feature.name+feature.id))
      })
      setFeatArr(feats.map((feat)=>{return feat.id}))
      console.log(featArr)
      return getSearchResults(searchquery)

    })
    .then(locations => {
      if(locations.length>0){setisResults(true)}
      setLocations(locations)
      return null
    })
    .catch(err => {
      setErrorMessage(err.message)
    })
  }

  return (
    <>
    <TitleBar name="Search Results" />
    {isResults
      ? <LocationListings locations={locations} featArr={featArr} />
      : <div className="noResults margins">Sorry! No results returned. <a>Try a lucky dip?</a></div>
    }
    </>
  )
}

export default SearchResults
