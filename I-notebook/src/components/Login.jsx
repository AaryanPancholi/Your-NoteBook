import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {AlertContext} from '../Context/AlertContext'

export default function Login() {
  const alertContext=useContext(AlertContext)
  const {alert,ShowAlert}=alertContext
    const [credentials, setcredentials] = useState({email:"",password:""})
   let Navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch("http://localhost:3000/api/auth/login",{
            
                method: "POST",
              
                headers: {
                  "Content-Type":"application/json",
                  
                },body:JSON.stringify({email:credentials.email,password:credentials.password})
                
              
        })
        const json=await response.json()
    if(json.success){
        localStorage.setItem("token",json.jwt_Data)
        
        Navigate("/")
        ShowAlert("Logged in Succesfully","Succesfully")
        

    }
    else{
       ShowAlert("Invalid Details","danger")
    }
    }
        

    
    const onChange = (e)=>{
        setcredentials({...credentials, [e.target.name]: e.target.value})}
  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1" >Email address</label>
    <input type="email"value={credentials.email} className="form-control" onChange={onChange} id="exampleInputEmail1/" name="email"aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password"value={credentials.password} className="form-control" onChange={onChange} id="exampleInputPassword1" name="password"placeholder="Password"/>
  </div>
  <div className="form-check">
    
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}
