import React, { useEffect, useState } from 'react'

function Timedate() {
    
    let[dateTime,setDateTime]=useState(new Date());
    useEffect(()=>{
        let time = setInterval(()=>{
            setDateTime(new Date());
            
        },1000);
    
    
    },[]);    

    
  return (
    <div>
     <p>{dateTime.toLocaleTimeString()}</p>
     <p>{dateTime.toLocaleDateString()}</p>
    </div>
  )
}

export default Timedate
