import React, { useState } from 'react'

function Primeno() {
    let [num,setnum]=useState()
    let [result,setresult]=useState("")
    let primenumber=()=>{
    let isprime=true
    for(let i=2;i<num/2;i++)
        if (num%i==0) {
            isprime=false
        }if (isprime) {
            setresult(`${num} it is prime number`)
        } else {
            setresult(`${num} it is not prime number`)
        }


    }
  return (
    <div>
      <input type='text' onChange={(e)=>setnum(Number(e.target.value))}></input>
      <p>num: {num}</p>
      <button onClick={primenumber}>find</button>
      <p>{result}</p>
    </div>
  )
}

export default Primeno
