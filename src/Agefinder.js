import React, { useState } from 'react'

function Agefinder() {
    let [age,setage]=useState()
      let [date,setdate]=useState()
  
      let handlefind=(e)=>{
        let dob=e.target.value
        setdate(dob)

        let currentyear=new Date().getFullYear()
        let bornyear=new Date(dob).getFullYear()
        setage(currentyear-bornyear)
      }
  return (
    <div>
      <h1>Age finder</h1>
      <input type='date' onChange={handlefind}/>
      <p>age is: {age}</p>
      <p>date is :{date}</p>
    </div>
  )
}

export default Agefinder
