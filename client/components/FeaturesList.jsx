import React, {useState, useEffect} from 'react'

function FeaturesList(props){

  function renderIcon(icon) {
    return {__html: icon};
  }
  
  return(
  <ul className="featureList">
    {props.features.map((feature, i) => {
      return(
        <li title={feature.name} key={i} className={feature.name} dangerouslySetInnerHTML={renderIcon(feature.icon)}></li>
      )
    })}
  </ul>
  )
}

export default FeaturesList