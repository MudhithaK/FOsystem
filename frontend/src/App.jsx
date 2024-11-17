import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
     
     </BrowserRouter>
      
  )
}

export default App
