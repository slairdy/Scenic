import React, {useState, useEffect} from 'react'
import { getSearchResults, getLocations } from '../api'
import LocationListings from './LocationListings'
import TitleBar from './TitleBar'
import { getFeatures } from '../api'
import { useSearchParams } from "react-router-dom";


function SearchResults (props) {

  const [locations, setLocations] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [features, setFeatures] = useState([])


  useEffect(() => {
    getLocations()
    fetchLocations()
  }, [])


  function fetchLocations () {
    return getFeatures()
    .then(features => {
      setFeatures(features)
      const searchquery = searchParams.get("searchquery")
      const feats = features.filter((feature)=>{
        return feature.id === parseInt(searchParams.get(feature.name+feature.id))
      })
      const featArr = feats.map((feat)=>{
        return feat.id
      })
      console.log(featArr)
      return getSearchResults(searchquery,featArr)
    })
    .then(locations => {
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
      <LocationListings locations={locations} />
    </>
  )
}

export default SearchResults
