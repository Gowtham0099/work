import React, {createContext, useReducer} from 'react'
import Setcount2 from './Setcount2';
export let Usercontext=createContext();
let initialState={count:0};

let reducer=(count,action)=>{
    console.log(count);
    console.log(action);
    switch (action.type) {
        case "increment":
            return{count:count.count+1}
            case "decrement":
                return{count:count.count-1}
                case "reset":
                    return{count:0}
                    default:
                        throw new Error("invlaid case or action");
                        
            
            
    }
    
    
}
function Userreducercount() {
    let [count,action]=useReducer(reducer,initialState)
  return (
    <div>
        <p>Count:{count.count}</p>
        <button onClick={()=>action({type:"increment"})}>+</button>
        <button onClick={()=>action({type:"decrement"})}>-</button>
        <button onClick={()=>action({type:"reset"})}>reset</button>
      <Usercontext.Provider value={[count,action]}>
      <Setcount2/>
      </Usercontext.Provider>
    </div>
  )
}

export default Userreducercount
