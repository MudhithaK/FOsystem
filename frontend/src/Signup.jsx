import {useState} from "react";
//import bootstrap from "bootstrap "

function Signup(){
    return(
        <div>
            <h1>Regiter first..</h1>

            <form>
                <label>User Name</label>
                <input type="text" placeholder="Enter Name" autoChange="off" name="name"></input>
                <br></br>

                <label>Password</label>
                <input type="text" placeholder="Enter Password" autoChange="off" name="password"></input>
                <br></br>

                <label>Email</label>
                <input type="email" placeholder="Enter Email Address" autoChange="off" name="email"></input>
                <br></br>

                <button type="submit">Register</button>
                <br></br>
                <p>Already have an account</p>
                
            </form>

              
        </div>
    )
}

export default Signup;