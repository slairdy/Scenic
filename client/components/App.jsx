import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Home from './Home'
import Location from './Location'
import LocationListings from './LocationListings'
import Search from './Search'
import SearchResults from './SearchResults'
import UpdateLocation from './UpdateLocation'
import SearchByLoc from './SearchByLoc'
import Footer from './Footer'

import { getLocations } from '../api'

function App () {
  const [locations, setLocations] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetchLocations()
  }, [])

  function fetchLocations () {
    return getLocations()
      .then(locations => {
        setLocations(locations)
        return null
      })
      .catch(err => {
        setErrorMessage(err.message)
      })
  }


  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home locations={locations} />} />
        <Route path='/locations' element={<LocationListings locations={locations} />} />
        <Route path='locations/:id' element={<Location locations={locations} />} />
        <Route path='search/' element={<Search locations={locations} />} />
        <Route path='search-results' element={<SearchResults locations={locations} />} />
        <Route path='update-location/:id' element={<UpdateLocation />} />
        <Route path='search-by-location' element={<SearchByLoc />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
