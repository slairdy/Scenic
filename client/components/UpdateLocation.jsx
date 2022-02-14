import React, { useState, useEffect } from 'react'
import { useParams, render } from 'react-router-dom';
import { getLocation, getFeatures, getLocFeatures, updateLocation, deleteLocation } from '../api'
import FeaturedLocation from './FeaturedLocation'
import FeaturesList from './FeaturesList'
import TitleBar from './TitleBar'
import LocMap from './LocMap'

function UpdateLocation () {
  const [location, setLocation] = useState([])
  const [features, setFeatures] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [name, setName] = useState('')
  const [descr, setDescr] = useState('')
  const [formLatLong, setLatLong] = useState({})
  const [latLat, setLat] = useState(0)
  const [lngLng, setLng] = useState(0)

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
      const marker = new google.maps.Marker({
        position: latLong[0],
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
      setName(location.name)
      setDescr(location.descr)
      setLatLong(latLong[0])
      setLat(latLong[0].lat)
      setLng(latLong[0].lng)
      getFeatureList(location.id)
      return location
    })
    // .then(location =>{
    //   return getLocFeatures(location.id)
    // })
    // .then(features => {
    //   setFeatures(features)
    //   return null
    // })
    .catch(err => {
      setErrorMessage(err.message)
    })
  }

  function getFeatureList(id){
    let allFeatures = getFeatures()
    let selectFeatures = getLocFeatures(id)
    const currentFeatures = allFeatures.map((curFeat,i)=>{
     // if(selectFeatures[i] && curFeat[i].id===)

      if(selectFeatures[i] &&curFeat[i].id===selectFeatures[i]){
        
      }        

    })
  }



  function handleSubmit(event){
    event.preventDefault()
    let tidyLatLong = ""+latLat+", "+lngLng+""
    updateLocation(name,tidyLatLong,descr,location.id)
    window.location.href = "/locations/"+location.id
  }

  function handleDelete(event){
    event.preventDefault()
    deleteLocation(location.id)
    window.location.href = "/"
  }

  return (
    <>
    <TitleBar name={"Update "+name} />
      <div className="updateWrap margins">
        <form action="">
          <label htmlFor="name">Update Name:</label><br/>
          <input onChange={event => setName(event.target.value)} defaultValue={name} type="text" name="name" id={location.id+"name"} /><br/><br/>
          <label htmlFor="descr">Update Description:</label><br/>
          <textarea onChange={event => setDescr(event.target.value)} id={location.id+"descr"} name="descr" defaultValue={descr}/><br/><br/>
          <input type="hidden" name="lat_long" value={formLatLong} />
          {/* <FeaturesList features={features} /> */}
          <button onClick={(e)=>{handleSubmit(e)}} type="submit">Update!</button>
          <button onClick={(e)=>{handleDelete(e)}}>Delete {name}</button>
        </form>
      </div>
      <LocMap location={location} />
    </>
  )
}

export default UpdateLocation
