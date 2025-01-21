import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
function My() {

    let [name,setname]=useState({
        clientId:"",clientName:"",address:""
    })
    
    let [detail,setdetail]=useState([])
    useEffect(()=>{
        fetchdata()
    },[])
    let fetchdata=async () => {
        let res=await axios.get("http://catodotest.elevadosoftwares.com/Client/GetAllClientDetails")
        setdetail(res.data.clientList)
    }
    let columns=[
        {name:"clientId",selector:row=>row.clientId,sortable:true},
        {name:"clientName",selector:row=>row.clientName,sortable:true},
        {name:"address",selector:row=>row.address,sortable:true}
    ]
    
    let handleinputChange=(e)=>{
        setname({...name,[e.target.name]:e.target.value})
    }
    
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name);
        handleSave()
        
    }
    
    let handleSave=()=>{
    let data={
        clientName:name.clientName,
        address:name.address
    }
    axios.post("http://catodotest.elevadosoftwares.com/Client/InsertClient",data).then(res=>{
    console.log(res.data)
    alert("infomation i saved...")
    fetchdata()
    })
    }
  return (
    <div>
      <div>
 <form onSubmit={handleSubmit}>

    <input type='text' onChange={handleinputChange} name="clientName" value={name.clientName}placeholder='clientName'/>
    <input type='text' onChange={handleinputChange} name="address" value={name.address}placeholder='address'/>
    <button type='submit'>submit</button>
    <button>cancel</button>
    </form> 
</div>
    </div>
  )
}

export default My
