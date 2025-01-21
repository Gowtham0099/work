import React, { useState,useEffect } from 'react'
import axios from "axios";

function Useeffectapi() {
    let [record,setrecord]=useState([])
    useEffect(() => {
    fetchdata()
    }, [])
    let fetchdata=async () => {
        let res=await axios.get("https://fakestoreapi.com/products")
        console.log(res);
        setrecord(res.data)
        
    }
  return (
    <div>
      <ul>
        {record.map(item=>(
            <li key={item.id}>
                {item.id}-category:{item.category}<img src={item.image} style={{width:"150px"}}/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Useeffectapi
