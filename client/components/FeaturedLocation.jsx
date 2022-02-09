import React, {useState, useEffect} from 'react'
import SearchWidget from './SearchWidget'
import FeaturesList from './FeaturesList'


function FeaturedLocation (props) {

  function hackyPhoto(){
    let filepath = ''
    switch (props.location.id) {
      case 5:
      filepath = 'piha_1.png'
      break;
      case 3:
      filepath = 'mteden_1.png'
      break;
      case 4:
      filepath = 'northhead_1.png'
      break;
      default:
        filepath = 'muriwai_1.jpg'
    }
    return filepath
  }

  return (
    <div id="feature">
      <div style={{backgroundImage:"url('/images/feature/"+hackyPhoto()+"')"}} className={props.pageType+" featureImg"}>
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
