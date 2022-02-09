import React, { useState, useEffect } from 'react'
import { useParams, render } from 'react-router-dom';
import LocMap from './LocMap'
import TitleBar from './TitleBar'
import { getLocations } from '../api'

function SearchByLoc () {
  const [features, setFeatures] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  
  useEffect(() => {
    findLocations()
  }, [])

  function initMap(locArr) {
    let locMap = new google.maps.Map(document.getElementById("locMap"), {
      center: {lat:-36.8509,lng:174.7645},
      zoom: 8,
    })
    setMarkers(locMap, locArr)
  }

  function setMarkers(locMap, locArr){
    let markers = []
    let infowindow = []
     for(let i=0;i<locArr.length;i++){

        markers[i] = new google.maps.Marker({
          position: locArr[i].latLong,
          map: locMap,
          url:'/locations/'+locArr[i].locId,
          icon:{ url: '/images/icons/mapicon.svg',scaledSize: new google.maps.Size(50, 50) }
        })
        infowindow[i] = new google.maps.InfoWindow({
          content: '<a href="/locations/'+locArr[i].locId+'"><p><h4>'+locArr[i].locName+'</h4></a></p>'
        })
        markers[i].addListener("click", () => {
          infowindow[i].open({
            anchor: markers[i],
            locMap,
            shouldFocus: false,
          })
        })
    }   
  }

  function findLocations(){
    return getLocations()
    .then(locations => {
      let locationList = []
      for(let i=0;i<locations.length;i++){
        let latLong = String(locations[i].lat_long).split(',')
        latLong = {
          lat:parseFloat(latLong[0]),
          lng:parseFloat(latLong[1])
        }
        locationList.push({latLong,locId:locations[i].id,locName:locations[i].name})
      }
      initMap(locationList)
     return null
    })
    .catch(err => {
      setErrorMessage(err.message)
    })
  }

  return (
    <>
      <TitleBar name="Search by location" />
      <LocMap location={location} />
    </>
  )
}

export default SearchByLoc
