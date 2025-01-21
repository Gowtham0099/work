import React, { useContext } from 'react'
import { Usercontext } from './Context'

function Context2() {
    let [name,setname]=useContext(Usercontext);
    let deleteName=()=>{
        setname('')
    }
  return (
    <div>
      <h1>Context2</h1>
      <p>{name}</p>
      <button onClick={()=>setname("watson")}>change name</button>
      <button onClick={deleteName}>Delete name</button>
    </div>
  )
}

export default Context2
