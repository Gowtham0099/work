import React, { useContext } from 'react'
import { Usercontext } from './Userreducercount'

function Setcount2() {
  let  [count,action]=useContext(Usercontext);
  return (
    <div>
      <h3>Setcount2</h3>
      <p>Count:{count.count}</p>
        <button onClick={()=>action({type:"increment"})}>+</button>
        <button onClick={()=>action({type:"decrement"})}>-</button>
        <button onClick={()=>action({type:"reset"})}>reset</button>
      

    </div>
  )
}

export default Setcount2
