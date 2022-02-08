import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getLocFeatures } from '../api'
import FeaturesList from './FeaturesList'

function LocationListing (props) {
  const [features, setFeatures] = useState([])
  const [filterPass, setFilterPass] = useState(false)

  useEffect(() => {
    callFeatures()
  }, [])

  function callFeatures(){
    return getLocFeatures(props.id)
    .then(feature => {
      setFeatures(feature)
      return feature
    })
    .then(feature => {
      if(!props.featArr||props.featArr.length<=0){
        setFilterPass(true)
      }else{
        if((feature.filter(feat => props.featArr.includes(feat.f_id))).length>0){
          setFilterPass(true)
        }
      }
      return null
    })
    .catch(err => {
      setErrorMessage(err.message)
    })

  }

  return (
    <>
      {filterPass
        ? <Link to={'/locations/'+props.id} className="locationListing"><img src={"/images/listings/muriwai_1.png"} alt="" /><h4>{props.name}</h4><div className="bodyCopy"><p>{props.descr}</p></div><FeaturesList features={features} /></Link>
        : ""
      }
    </>
  )
}

export default LocationListing
