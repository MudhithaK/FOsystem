import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      
      <h1>CHECKING LOGIN...</h1>
      <form>
        <lable>User Name </lable>
        <input type="text" placeholder="Enter Name" name="name" ></input>
      </form>
        
       
      </div>
      
    </>
  )
}

export default App
