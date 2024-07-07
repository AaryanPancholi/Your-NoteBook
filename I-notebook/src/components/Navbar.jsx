import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
export default function Navbar() {
 const  Navigate=useNavigate()
  let location = useLocation();
  const handleLogout=()=>{
    localStorage.removeItem('token')
    Navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-light">
  <div className="container-fluid text-light">
    <Link className="navbar-brand text-light" to="#">Your-NoteBook</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation ">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=='/'?'active':""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname=='/about'?'active':""}`}  to="/About">About</Link>
        </li>
        
        
      </ul>
      {!localStorage.getItem('token')?
      <form className="d-flex" role="search">
       
      <Link to="/Login" className="btn btn-primary btn-lg active mx-1" role="button" aria-pressed="true">Login</Link>
      <Link to="Signup" className="btn btn-primary btn-lg active mx-1" role="button" aria-pressed="true">SignUp</Link>
      </form>:
      <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
      }
    </div>
  </div>
</nav>
    </div>
  )
}
