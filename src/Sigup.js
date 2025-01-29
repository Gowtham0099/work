import { ErrorMessage, Formik } from 'formik'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

import * as yup from "yup"

function Sigup() {
    let navigate=useNavigate()
    let [user, setusername] = useState({
        username: "",
        newpassword: "",
        confirmpassword: "",
        gmail: "",
        phonenumber: "",
    })

    let validation=yup.object().shape({
        username:yup.string().required(),
        newpassword:yup.string().matches(/[A-Z][a-z]+[0-9]{1,}\W/,"it should contain special character,uppercase,number").min(8,"password should be in minimum length of 8").required(),
        confirmpassword:yup.string().oneOf([yup.ref("newpassword"),null],"password should to be matched").required(),
        gmail:yup.string().email("Email is required").required(),
        phonenumber:yup.string().matches(/[0-9]{10}/,"enter vaild mobile number").max(10).required()



                                                                                                                                            


    })

    let handleInput = (e) => {
        setusername({ ...user, [e.target.name]: e.target.value })
    }
    let handleSubmit = () => {
        
        console.log(user)
        navigate('/')
        localStorage.setItem("username",user.username)
        localStorage.setItem("password",user.newpassword)
        
        setusername({
            username: "", newpassword: "", confirmpassword: "",  gmail: "", phonenumber: ""
        })
    }

    
    // let handleCancel = () => {
    //     setusername({
    //         username: "", newpassword: "", confirmpassword: "",  gmail: "", phonenumber: ""
    //     })
    // }
    return (
        <div>
            <Formik
             initialValues={user}
             validationSchema={validation}
             onSubmit={handleSubmit}>
                 {({handleSubmit,handleChange})=>(
             
            <form onSubmit={handleSubmit}>
                <h1>Sigup👀.....!</h1>
                <h3>Username</h3>
                <input className='t' type='text' onChange={(e)=>{handleInput(e);handleChange(e)}} name="username" value={user.username} placeholder='Username' />
                <ErrorMessage name='username' component="div" className='text-danger'/>
                <h4>New Password</h4>
                <input className='t' type='password' onChange={(e)=>{handleInput(e);handleChange(e)}} name="newpassword" value={user.newpassword} placeholder='newpassword' />
                <ErrorMessage name='newpassword' component="div" className='text-danger'/>
                <h4>Confirm Password</h4>
                <input className='t' type='password' onChange={(e)=>{handleInput(e);handleChange(e)}} name="confirmpassword" value={user.confirmpassword} placeholder='confirmpassword' />
                <ErrorMessage name='confirmpassword' component="div" className='text-danger'/>
                
                <h4>Email Address</h4>
                <input className='t' type='text'onChange={(e)=>{handleInput(e);handleChange(e)}} name="gmail" value={user.gmail} placeholder='gmail' />
                <ErrorMessage name='gmail' component="div" className='text-danger'/>
                <h4>Phone Number</h4>
                <input className='t' type='number' onChange={(e)=>{handleInput(e);handleChange(e)}} name="phonenumber" value={user.phonenumber} placeholder='phonenumber' />
                 <ErrorMessage name='phonenumber' component="div" className='text-danger'/>
                <br></br>
                <br></br>
                <button className='t' type="submit">Submit</button>



                
                {/* <button className='t' type="button" onClick={handleCancel}>Cancel</button> */}
                <p>Already have account?</p>
                <p href='#' onClick={(e)=>{e.preventDefault();navigate('/')}}>login</p>
               <br></br>

                





            </form>
                 )}
                 </Formik>
                 </div>

       
    )
}

export default Sigup
