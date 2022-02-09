import React, { useState, useEffect } from 'react'
import { getFeatures } from '../api'
import { useSearchParams } from "react-router-dom";

function SearchWidget () {
  const [features, setFeatures] = useState([])

  useEffect(() => {
    callFeatures()
  }, [])

  function callFeatures(){
    return getFeatures()
    .then(feature => {
      setFeatures(feature)
      return null
    })
    .catch(err => {
      setErrorMessage(err.message)
    })

  }

  function renderIcon(icon) {
    return {__html: icon};
  }

  function featSelect(event,id){
    let fillVal = event.currentTarget.value
    let curInput = document.getElementById('feat-'+id)
    if(event.currentTarget.hasAttribute('class')){
      curInput.removeAttribute('value')
      event.currentTarget.removeAttribute('class')
    }else{
      curInput.setAttribute('value',fillVal)
      event.currentTarget.setAttribute('class','active')         
    }
  }


  return (
    <div id="searchWidget">
      
      <button className="searchByLoc"><a href="/search-by-location">Search by location &#9654;</a></button>
      <h3>Find a scenic spot</h3>
      <p>Filter by:</p>

      <ul className="featureList">
        {features.map((feature, i) => {
          return(
            <li value={feature.id} onClick={(e) => featSelect(e, feature.id)}  id={'searchfeat-'+feature.id} title={feature.name} key={i} dangerouslySetInnerHTML={renderIcon(feature.icon)}></li>
          )
        })}
      </ul>

      <form action="/search-results" id="searchForm">
        {features.map((feature, i) => {
          return(
            <input key={i} type="hidden" id={'feat-'+feature.id} name={feature.name+feature.id} value="" />
          )
        })}
        <input placeholder="Search..." type="text" name="searchquery" required/>
        <button type="submit">Go &#9654;</button>
      </form>

    </div>
  )
}

export default SearchWidget
