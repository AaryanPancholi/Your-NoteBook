import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import NoteState from './Context/NoteState.jsx'
import CountState from './Context/CountContext.jsx'
import AlertC from './Context/AlertContext.jsx'
import { AlertContext } from './Context/AlertContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertC>
    <NoteState>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </NoteState>
    </AlertC>
    
  </React.StrictMode>,
)
