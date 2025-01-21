import React, { useReducer, useState } from 'react'
let reducer=(state,action)=>{
    console.log(action);
    switch (action.type) {
        case "add":
            return[...state,{id:Date.now(),item:action.item,amount:action.amount}]
            case "delete":
                return state.filter(ele=>ele.id!=action.id)
    case "update":
        return state.map(data=>data.id==action.id?{...data,item:action.item,amount:action.amount}:data)


            
         
    }
    
}

function Userreducecrud1() {
    let [cart,setcart]=useReducer(reducer,[])
    let [item,setitem]=useState("")
    let [edit,setedit]=useState("")
    let [amount,setamount]=useState("")

    let handleadd=()=>{
        if (edit) {
            setcart({type:"update",id:edit,item,amount})
            
        } else {
            setcart({type:"add",item,amount})
        }
        setedit("")
        setitem("")

        setamount("")
    }
    console.log(cart);
    let handledelete=(id)=>{
        setcart ({type:"delete",id})
    }

    let handleedit=(id,item,amount)=>{
        setedit(id)
        setitem(item)
        setamount(amount)
    }
    
  return (
    <div>
        <h1>Usereducer Crud1</h1>
      <input type='text'  onChange={(e)=>setitem(e.target.value)} placeholder='enter item' value={item}/>
      <input type='number'  onChange={(e)=>setamount(e.target.value)} placeholder='enter amount' value={amount}/>
      <button onClick={handleadd}>add</button>
      <ol>
        {cart.map(data=>(
            <li>
                {data.item} {data.amount}
                <button onClick={()=>handledelete(data.id)}>delete</button>
                <button onClick={()=>handleedit(data.id,data.item,data.amount)}>edit</button>
            </li>
        ))}
      </ol>
    </div>
  )
}

export default Userreducecrud1         
