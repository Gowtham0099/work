import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Login() {
 
    let [user,setuser]=useState({
        Username:"",
        Password:"",

    })
    let handleInput=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        let storedUsername = localStorage.getItem("username");
        let storedPassword = localStorage.getItem("password");
        if (user.Username === storedUsername && user.Password === storedPassword) {
            Swal.fire('Login Success')
        } else {
            Swal.fire({
                title: "LOG IN FAILED....!",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              });
        }
        console.log(user);
        alert(`username: ${user.Username}- password:${user.Password}`)
        setuser({
            Username:"" ,Password:""
        })
        
    }

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <h1>LOG IN HERE....!</h1>
         <input type="text" onChange={handleInput} name="Username" value={user.Username} placeholder='Username' />
         <br></br>
         <input type='password' onChange={handleInput} name="Password" value={user.Password} placeholder='Password' />
         <br></br>
         
         <button type='submit'>login</button>
         {/* <p><span><a href='login'></a></span></p> */}
         </form>
      
    </div>
  )
}

export default Login
