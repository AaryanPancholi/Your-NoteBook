import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../Context/noteContext";
const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote,deleteNote} = context;
    const [note,setNote]=useState({
        title:" ",description:"",tag:""})
     const handleClick=(e)=>{
        addNote(note.title,note.description,note.tag)
        e.preventDefault()
        setNote({
          title:" ",description:"",tag:""})

     }
     const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
     }
  return (
    <div>
      <div className="mx-2">
        <h2>Add a Note</h2>
      </div>
      <div className="container">
        <form onSubmit={ handleClick}>
          <div className="mb-3">
            <label htmlFor="tittle" className="form-label">
             title
            </label>
            <input
              type="text"
              className="form-control"
              minLength={3}
              maxLength={30} value={note.title}
              id="title" name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              minLength={5} value={note.description}
              className="form-control"
              id="description" name="description"
              onChange={onChange}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              tag
            </label>
            <input
              type="text"
              maxLength={10} value={note.tag}
              className="form-control"
              id="tag" name="tag"
              onChange={onChange}
            />
          </div>
          
          
          <button disabled={note.title.length<3||note.description.length<5||note.tag.length<3}
           type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
