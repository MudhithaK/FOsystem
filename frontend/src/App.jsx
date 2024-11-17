import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState()
  const [password,setPassword]= useState()
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,password})
    .then(result=> console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <>
      <div>
        
      
      <h1>CHECKING LOGIN...</h1>
      <form onSubmit={handleSubmit}>
        <lable>User Name </lable>
        <input type="text" placeholder="Enter Name" name="name" autoComplete="off" onChange={(e)=>setName(e.target.value)}></input>

        <br></br>
        <lable>Password </lable>
        <input type="text" placeholder="Enter Password" name="password" autoComlete="off" onChange={(e)=>setPassword(e.target.value)}></input>
        <br></br>
        <button type="submit">Login</button>
      </form>
        
       
      </div>
      
    </>
  )
}

export default App
