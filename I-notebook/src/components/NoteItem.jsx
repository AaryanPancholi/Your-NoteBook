import React,{useContext} from "react";
import noteContext from "../Context/noteContext";

const NoteItem = ({ note ,index,updateNote}) => {
  const context = useContext(noteContext);
const { notes, setNotes ,addNote,deleteNote} = context;
  return (
    <div className="col-md-3">
    <div className="card my-3" >
  
  <div className="card-body">
    <div className="d-flex align-items-center">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-trash mx-2"onClick={()=>{deleteNote(index,note._id)}} ></i>
    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>updateNote(note)} > </i>
    </div>
    <p className="card-text">{note.description}</p>
    <p className="card-text">{note.tag}</p>
    
    
  </div>
</div>
    </div>
  );
};

export default NoteItem;
