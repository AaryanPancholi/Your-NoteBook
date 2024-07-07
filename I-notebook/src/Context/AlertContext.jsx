import React from 'react'
import { createContext,useState } from 'react'
const AlertContext=createContext()
export{AlertContext}

export default function AlertC(props) {
    const [alert, setAlert] = useState()
    const ShowAlert=(message,type)=>{
        setAlert({msg:message,type:type})
        setTimeout(()=>{
            setAlert()
        },1500)
    }
   
  return (
    <div>
      <AlertContext.Provider value={{alert,ShowAlert}}>
        {props.children}
      </AlertContext.Provider>
    </div>
  )
}
