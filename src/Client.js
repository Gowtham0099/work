
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

function Client() {
  let navigate=useNavigate()

    let[user,setuser]=useState({
      clientName:'',address:"",clientId:""
    })
   
    let [edit,setedit]=useState(false)
    let [record,setrecord]=useState([])
    useEffect(()=>{
fetchdata()
    },[])
    let fetchdata=async()=>{
        let res=await axios.get("http://catodotest.elevadosoftwares.com/Client/GetAllClientDetails")
setrecord(res.data.clientList)
    }
        let handleInput=(e)=>{
            setuser({...user,[e.target.name]:e.target.value})
        }
        let handleSubmit=(e)=>{
            e.preventDefault()
if(edit){
    handleUpdate()
}
else{
    handleSave()
}
         
          
        }
      let handleSave=()=>{
        let data={
          clientName:user.clientName,
          address:user.address
        }
axios.post("http://catodotest.elevadosoftwares.com/Client/InsertClient",data).then(res=>{
    console.log(res.data)
    alert("data saved")
    fetchdata()
    

})
        
      }      
      let handleUpdate=()=>{
        let data={
          clientId:user.clientId,
            clientName:user.clientName,
            address:user.address
        }
axios.post("http://catodotest.elevadosoftwares.com/Client/InsertClient",data).then(res=>{
    console.log(res.data)
    alert("data updated")
    fetchdata()
})
        
      } 
      let handleDelete = (clientId) => {
        axios.post(`http://catodotest.elevadosoftwares.com/Client/RemoveClient`,{clientId}).then(res => {
            console.log(res.data);
            alert("Data deleted");
            fetchdata();
        });
    }; 
      
      let columns=[
        {name:"clientId",selector:row=>row.clientId},
        {name:"clientName",selector:row=>row.clientName},
        {name:"address",selector:row=>row.address},
        {name:"Action",cell:row=>(
            <div>
                <button onClick={()=>handleedit(row.clientId)}>Edit</button>
                <button onClick={()=>handleDelete(row.clientId)} >Delete</button>
            </div>
        )}
      ]

      let handleedit=(clientId)=>{
let editdata=record.find(item=>item.clientId===clientId)
setuser({...user,clientName:editdata.clientName,
  address:editdata.address,clientId:editdata.clientId
})
setedit(true)



      }
  return (
    <div>
        <h1>Client</h1>
        <form onSubmit={handleSubmit}>
            
         <input type="text" onChange={handleInput} name="clientName" value={user.clientName} placeholder='clientName' />
         <br></br>
         <input type='text' onChange={handleInput} name="address" value={user.address} placeholder='address
         ' />
         <br></br>
         
         <button type='submit'>submit</button>
         </form>
         <DataTable data={record}
         columns={columns}
         pagination/>
    </div>
  )
}



export default Client