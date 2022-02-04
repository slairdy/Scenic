import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Home from './Home'
import Location from './Location'
import Search from './Search'
import SearchResults from './SearchResults'
import Footer from './Footer'

function App () {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='locations/:name' element={<Location />} />
        <Route path='search/' element={<Search />} />
        <Route path='search-results' element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
