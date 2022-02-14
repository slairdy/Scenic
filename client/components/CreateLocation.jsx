import React, { useState, useEffect } from 'react'
import { useParams, render } from 'react-router-dom';
import { getLocation } from '../api'
import { getFeatures } from '../api'
import { getLocFeatures } from '../api'
import { createLocation } from '../api'
import FeaturedLocation from './FeaturedLocation'
import FeaturesList from './FeaturesList'
import TitleBar from './TitleBar'
import LocMap from './LocMap'

function CreateLocation () {
  const [location, setLocation] = useState([])
  const [features, setFeatures] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [name, setName] = useState('')
  const [descr, setDescr] = useState('')
  const [formLatLong, setLatLong] = useState({})
  const [latLat, setLat] = useState(0)
  const [lngLng, setLng] = useState(0)
  
  useEffect(() => {
    initMap()
    setName('New Name')
    setDescr('New Description')
  }, [])

  function initMap() {
    let locMap = new google.maps.Map(document.getElementById("locMap"), {
      center: {lat:-36.8509, lng:174.7645},
      zoom: 18,
    })

    const marker = new google.maps.Marker({
      position: {lat:-36.8509, lng:174.7645},
      map: locMap,
      draggable:true,
      icon:{ url: '/images/icons/mapicon.svg',scaledSize: new google.maps.Size(50, 50) }
    })

    marker.addListener("dragend", (MapMouseEvent) => {
      let ll = {
        lat:marker.getPosition().lat(),
        lng:marker.getPosition().lng()
      }
      setLatLong(ll)
      setLat(ll.lat)
      setLng(ll.lng)
    })

    return marker
  }



  function handleSubmit(event){
    event.preventDefault()
    let tidyLatLong = ""+latLat+", "+lngLng+""
    createLocation(name,tidyLatLong,descr)
    window.location.href = "/"
  }

  return (
    <>
    <TitleBar name={name} />
      <div className="updateWrap margins">
        <form action="">
          <label htmlFor="name">Name:</label><br/>
          <input required onChange={event => setName(event.target.value)} defaultValue={name} type="text" name="name" id={location.id+"name"} /><br/><br/>
          <label htmlFor="descr">Description:</label><br/>
          <textarea required onChange={event => setDescr(event.target.value)} id={location.id+"descr"} name="descr" defaultValue={descr}/><br/><br/>
          <input type="hidden" name="lat_long" value={formLatLong} />
          <button onClick={(e)=>{handleSubmit(e)}} type="submit">Create!</button>
        </form>
      </div>
      <LocMap location={location} />
    </>
  )
}

export default CreateLocation
