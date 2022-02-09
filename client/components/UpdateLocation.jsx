import React, {useState, useEffect} from 'react'
import {Editor, EditorState} from 'draft-js'
import 'draft-js/dist/Draft.css'
import TitleBar from './TitleBar'

function UpdateLocation (props) {

  function MyEditor(event) {
    const [editorState, setEditorState] = React.useState(
      () => EditorState.createEmpty(),
    );

    function onBoldClick() {
      event.currentTarget.onChange(RichUtils.toggleInlineStyle(event.currentTarget.state.editorState, 'BOLD'));
    }
  

    return(
      <>
        <button onClick={(e) => onBoldClick.bind(e)}>Bold</button>
        <Editor
        name="locationDescr"
        editorState={editorState}
        onChange={setEditorState} 
        />      
      </>

    ) 
  }

  return (
    <>
      <TitleBar name="Update" />
      <div className="updateWrap margins">
        <form action="">
          <label htmlFor="locationName">Update Name:</label>
          <input type="text" placeholder='Location Name' name="locationName" id="" />
          <label htmlFor="locationDescr">Update Description:</label>
          <textarea />
        </form>
      </div>
    </>
  )
}

export default UpdateLocation
