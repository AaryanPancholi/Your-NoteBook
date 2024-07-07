import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../Context/noteContext'
import { useNavigate } from 'react-router-dom';
export default function About() {
  const Navigate=useNavigate()
  const Nav=()=>{
    Navigate('/')
  }
  const { notes, setNotes } = useContext(noteContext);
  return (
    <div className="about-container d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>
      <div className="jumbotron jumbotron-fluid bg-dark text-white pb-4"> 
        <div className="container">
          <h1 className="display-4">About Us</h1>
          <p className="lead">Welcome to our note-taking app!</p>
          <hr className="my-4" />
          <p>You currently have {notes.length} notes in our database.</p>
          <p>Our mission is to provide a seamless note-taking experience that helps you stay focused and productive.</p>
          <h2>Our Features</h2>
          <ul>
            <li>Easy note-taking with a simple and intuitive interface</li>
            <li>Organize your notes with tags and categories</li>
            <li>Search for notes quickly and easily</li>
           
          </ul>
          <p>Ready to start taking notes? Click the button below to get started!</p>
          <button onClick={Nav} className="btn btn-primary">Get Started</button>
          
        </div>
      </div>
    </div>
  )};
