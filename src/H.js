import { useState } from "react";
export let Usercontext=createContext()

function Context() {
    let[name,setname]=useState("hari")
    return (
        <div>
            <h1>Context</h1>
            <p>{name}</p>
            <Usercontext.Provider value={[name,setname]}>
                <Context1/>
            </Usercontext.Provider>
        </div>
    )
    
}


