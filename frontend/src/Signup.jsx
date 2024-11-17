import {useState} from "react";
//import bootstrap from "bootstrap "
import Login from "./Login";
import App from "./App";
import axios from "axios";

function Signup(){

    const [name, setName]= useState()
    const [password, setPassword]= useState()
    const [email, setEmail]= useState()

    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('',{name,password,email})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <h1>Regiter first..</h1>

            <form onSubmit={handleSubmit}>
                <label>User Name</label>
                <input type="text" placeholder="Enter Name" autoChange="off" name="name" onChange={(e)=> setName(e.target.value)}></input>
                <br></br>

                <label>Password</label>
                <input type="text" placeholder="Enter Password" autoChange="off" name="password" onChange={(e)=> setPassword(e.target.value)}></input>
                <br></br>

                <label>Email</label>
                <input type="email" placeholder="Enter Email Address" autoChange="off" name="email" onChange={(e)=> setEmail(e.target.value)}></input>
                <br></br>

                <button type="submit">Register</button>
                <br></br>
                <p>Already have an account</p>
                
            </form>
            <link to="/login">
            </link>

              
        </div>
    )
}

export default Signup;