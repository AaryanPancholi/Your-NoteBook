import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {AlertContext} from '../Context/AlertContext'


export default function Signup() {
  const alertContext=useContext(AlertContext)
  const {alert,ShowAlert}=alertContext
  const [credentials, setcredentials] = useState({email:"",password:"",name:"",cpassword:""})
   let Navigate=useNavigate()
  
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {name,email,password,cpassword}=credentials
        if (password !== cpassword) {
          ShowAlert("Passwords do not match");
          return;}
        const response=await fetch("http://localhost:3000/api/auth/createuser",{
            
                method: "POST",
              
                headers: {
                  "Content-Type":"application/json",
                  
                },body:JSON.stringify({name,email,password})
                
              
        })
        const json=await response.json()
    if(json.success){
        localStorage.setItem('token',json.jwt_Data)
        
        Navigate("/login")
        ShowAlert("Account Created Succesfully","Success")

    }
    else{
      ShowAlert("Account alerady exist","danger")
      
    }
   
    }
        

    
    const onChange = (e)=>{
        setcredentials({...credentials, [e.target.name]: e.target.value})}
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input name= "name"   type="Name" className="form-control" id="Name" autoComplete='' aria-describedby="emailHelp"onChange={onChange} value={credentials.name}></input>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name= "email"value={credentials.email}  type ="email" className="form-control" autoComplete='' id="exampleInputEmail1"aria-describedby="emailHelp"onChange={onChange}></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name= "password"  type  ="password" className="form-control" value={credentials.password} id="MainPassowrd"onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input name= "cpassword"  type  ="password" className="form-control"value={credentials.cpassword} id="InputPassword1"onChange={onChange}/>
  </div>
  
   
  <button  type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
