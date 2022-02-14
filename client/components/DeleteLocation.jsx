import React, { useState, useEffect } from 'react'
import { useParams, render } from 'react-router-dom';
import { deleteLocation } from '../api'
import TitleBar from './TitleBar'

function DeleteLocation () {
  const [errorMessage, setErrorMessage] = useState('')

  let curId = useParams()
  curId = parseInt(curId.id)
  

  function handleDelete(event){
    event.preventDefault()
    deleteLocation(curId)
    //window.location.href = "/"
  }

  return (
    <>
    <TitleBar name={"Delete"} />
      <div className="updateWrap margins">
        <form action="">
          <button onClick={(e)=>{handleDelete(e)}}>Delete</button>
        </form>
      </div>
    </>
  )
}

export default DeleteLocation
