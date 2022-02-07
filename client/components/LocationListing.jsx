import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getLocFeatures } from '../api'
import FeaturesList from './FeaturesList'

function LocationListing (props) {
  const [features, setFeatures] = useState([])

  useEffect(() => {
    callFeatures()
  }, [])

  function callFeatures(){
    return getLocFeatures(props.id)
    .then(feature => {
      setFeatures(feature)
      return null
    })
    .catch(err => {
      setErrorMessage(err.message)
    })

  }

  return (
    <>
    <Link to={'/locations/'+props.id} className="locationListing">
      <img src={"/images/listings/muriwai_1.png"} alt="" />
      <h4>{props.name}</h4>
      <div className="bodyCopy">
        <p>
            {props.descr}
        </p>
      </div>
      <FeaturesList features={features} />
    </Link>
    </>
  )
}

export default LocationListing
