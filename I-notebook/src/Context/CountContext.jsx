import { createContext, useState } from "react";
export const CountContext=createContext()
import React from 'react'

export default function CountState(props) {
    const [count,setCount]=useState(0)
  return (
    <div>
      <CountContext.Provider value={count}>
        {props.children}
      </CountContext.Provider>
    </div>
  )
}
