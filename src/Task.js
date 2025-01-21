import React, { useState } from 'react'

function Task() {
    let [mark,setmark]=useState()
    let [result,setresult]=useState("")

    let handlefind=()=>{

        if (mark>=90) {
            setresult("you got a A+ Grade")
        }else if (mark>=70) {
            setresult("you got a A Grade")
        }else if (mark>=50) {
            setresult("you got a B+ Grade")
        }else if (mark>=35) {
            setresult("you got a pass mark at low")
            
        }else  {
            setresult("you are fail in exam")
            
        }
    }


  return (
    <div>
      <input type='text' onChange={(e)=>setmark(Number(e.target.value))}></input>
      <p>mark: {mark}</p>
      <button onClick={handlefind}>find</button>
      <p>{result}</p>
    </div>
  )
}

export default Task

