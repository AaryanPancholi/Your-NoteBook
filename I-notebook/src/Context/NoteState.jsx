import React from "react";
import NoteContext from "./noteContext";
import { useState ,useContext} from "react";
import {AlertContext} from './AlertContext'

const NoteState = (props) => {
  const alertContext=useContext(AlertContext)
  const {ShowAlert}=alertContext
  const [notes, setNotes] = useState([]);

  const host = "http://localhost:3000";
 
  //Get all notes
  const getNote=async()=>{
    //api call
  
    
    const response=await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
    
      headers: {
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem('token')
      },
      
    })
    const json=await response.json()
    console.log(json)
    setNotes(json)
    localStorage.setItem('notes', JSON.stringify(json))

  }
  //Add a Note
  

  const addNote=async(title,description,tag)=>{
    //api call
    
    const response=await fetch("http://localhost:3000/api/notes/addnote/", {
      method: 'Post',
    
      headers: {
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem('token')
      },
      
    body:JSON.stringify({title,description,tag})})
  
    //Add note
   const note=
    await response.json()
  
   console.log(note);
    setNotes([...notes,note])
    ShowAlert("Note Added Successfully","Success")
     
  }  //Delete a note
  const deleteNote=async(index,id)=>{
    const response=await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
    
      headers: {
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem('token')
      }})
      const Json=response.json()
  
    
    const newNote=[...notes]

    newNote.splice(index,1)
    // const newNote=
    // notes.filter((note)=>{
    //   return note._id!==id})
    setNotes(newNote)
    ShowAlert("Note Deleted Successfully","Success")
     

  }
  //Edit a NOte
  const editNote=async(id,title,description,tag)=>{
    //api Call
    
    const response=await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
    
      headers: {
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem('token')
      },
      
    body:JSON.stringify({title,description,tag})})
    const Json=response.json()
 
      
   
    //Edit

    for(let index=0;index <notes.length;index++){
      if(notes._id==id){
        notes.title=title
        notes.description=description
        notes.tag=tag
      }

    }
    ShowAlert("Note Edited Successfully","Success")

  }

  
  return (
    <NoteContext.Provider value={{ notes, setNotes ,addNote,deleteNote,getNote,editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
