import React, {useState, useEffect} from 'react'


function TitleBar (props) {

  function renderIcon(icon) {
    return {__html: icon};
  }
  

  return (
    <div id="feature">
      <div className="titleBar">
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default TitleBar
