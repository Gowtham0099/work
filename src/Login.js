import React, { useState } from 'react'
import { ErrorMessage, Formik } from 'formik'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"

function Login() {

  let navigate=useNavigate()
 
    let [user,setuser]=useState({
        Username:"",
        Password:"",

    })

    let schema=yup.object().shape({
      Username:yup.string().required(),
      Password:yup.string().required()
   })
    let handleInput=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    let handleSubmit=()=>{
        
        let storedUsername = localStorage.getItem("username");
        let storedPassword = localStorage.getItem("password");
        if (user.Username === storedUsername && user.Password === storedPassword) {
            Swal.fire('Login Success')
            navigate('/Category')
            
        } else {
            Swal.fire({
                title: "LOG IN FAILED....!",
                width: 600,
                padding: "3em",
                color: "#716add",
                
              
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
       <Formik
      initialValues={user}
      validationSchema={schema}
      onSubmit={handleSubmit}>
        {({handleSubmit,handleChange})=>(
         <form onSubmit={handleSubmit}>
          <div className='log1'>
            <h1>LOG IN</h1>
            <br></br>
            <h4>Username</h4>
         <input className='up' type="text" name="Username" placeholder='Username' onChange={(e)=>{handleInput(e);handleChange(e)}} value={user.Username} />
         <ErrorMessage name='Username' component="div"/>
         <br></br>
         <h4>Password</h4>
         <input className='up' type='password' name="Password"  placeholder='Password'onChange={(e)=>{handleInput(e);handleChange(e)}} value={user.Password}  />
         <ErrorMessage name='Password' component="div"/>
         <br></br>
         
         <button className='su'  type='submit'>login</button>
         
         <br></br>
         <p className='a' href='#' onClick={(e)=>{e.preventDefault();navigate('/Sigup');}}>Create a account..</p>
         </div>
         </form>
        )}
          </Formik>
    </div>
  )


}

export default Login
