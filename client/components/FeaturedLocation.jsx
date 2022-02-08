import React, {useState, useEffect} from 'react'
import SearchWidget from './SearchWidget'
import FeaturesList from './FeaturesList'


function FeaturedLocation (props) {

  return (
    <div id="feature">
      <div className={props.pageType+" featureImg"}>
        <h2>{props.location.name}</h2>
        <SearchWidget />
      </div>

      <div className="bodyCopy margins">
        <FeaturesList features={props.features} />

        <p>
        {props.location.descr}
        </p>
        
      </div>
    </div>
  )
}

export default FeaturedLocation
