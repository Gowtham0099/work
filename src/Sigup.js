import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Sigup() {
    let [user, setusername] = useState({
        username: "",
        newpassword: "",
        confirmpassword: "",
        gender: "",
        gmail: "",
        phonenumber: "",
    })

    let handleInput = (e) => {
        setusername({ ...user, [e.target.name]: e.target.value })
    }
    let handlesubmit = (e) => {
        e.preventDefault()
        console.log(user)
        localStorage.setItem("username",user.username)
        localStorage.setItem("password",user.newpassword)
        // alert(`username: ${username.username} - newpassword:${username.newpassword}`)
        setusername({
            username: "", newpassword: "", confirmpassword: "", gender: "", gmail: "", phonenumber: ""
        })
    }

    
    let handleCancel = () => {
        setusername({
            username: "", newpassword: "", confirmpassword: "", gender: "", gmail: "", phonenumber: ""
        })
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <h1>Sigup page.....!</h1>
                <h3>Username</h3>
                <input type='text' onChange={handleInput} name="username" value={user.username} placeholder='Username' />
                <h3>New Password</h3>
                <input type='password' onChange={handleInput} name="newpassword" value={user.newpassword} placeholder='newpassword' />
                <h3>Confirm Password</h3>
                <input type='password' onChange={handleInput} name="confirmpassword" value={user.confirmpassword} placeholder='confirmpassword' />
                <h3>Gender</h3>

                <input type='radio' name='gender' value="Male" onChange={handleInput} />Male
                <input type='radio' name='gender' value="Female" onChange={handleInput} />Female
                <input type='radio' name='gender' value="Others" onChange={handleInput} />Others


                <h3>Email Address</h3>
                <input type='text' onChange={handleInput} name="gmail" value={user.gmail} placeholder='gmail' />
                <h3>Phone Number</h3>
                <input type='number' onChange={handleInput} name="phonenumber" value={user.phonenumber} placeholder='phonenumber' />
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancel}>Cancel</button>





            </form>

        </div>
    )
}

export default Sigup
