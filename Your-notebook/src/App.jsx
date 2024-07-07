import { useState,useContext } from 'react'


import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'
import {AlertContext} from './Context/AlertContext'
function App() {
  const alertContext=useContext(AlertContext)

  const {alert,ShowAlert}=alertContext
  return (
    <>
    
      <Navbar/>

     {alert&&<Alert/>}
      <div className='container'>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/About' exact element={<About/>}/>
        <Route path='/Login' exact element={<Login/>}/>
        <Route path='/Signup' exact element={<Signup/>}/>
        </Routes>
        </div>
        
        
    </>
  )
}

export default App
