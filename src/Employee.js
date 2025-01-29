import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

function Employee() {

    let[user,setuser]=useState({
        employeeName:'',mobile:"",employeeId:""
    })
   
    let [edit,setedit]=useState(false)
    let [record,setrecord]=useState([])
    useEffect(()=>{
fetchdata()
    },[])
    let fetchdata=async()=>{
        let res=await axios.get("http://catodotest.elevadosoftwares.com/Employee/GetAllEmployeeDetails")
setrecord(res.data.employeeList)
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
            employeeName:user.employeeName,
            mobile:user.mobile
        }
axios.post("http://catodotest.elevadosoftwares.com/Employee/InsertEmployee",data).then(res=>{
    console.log(res.data)
    alert("data saved")
    fetchdata()
    

})
        
      }      
      let handleUpdate=()=>{
        let data={
            employeeId:user.employeeId,
          employeeName:user.employeeName,
            mobile:user.mobile
        }
axios.post("http://catodotest.elevadosoftwares.com/Employee/InsertEmployee",data).then(res=>{
    console.log(res.data)
    alert("data updated")
    fetchdata()
})
        
      } 
      let handleDelete = (employeeId) => {
        axios.post(`http://catodotest.elevadosoftwares.com/Employee/RemoveEmployee`,{employeeId}).then(res => {
            console.log(res.data);
            alert("Data deleted");
            fetchdata();
        }); 
    }; 
      
      let columns=[
        {name:"employeeId",selector:row=>row.employeeId},
        {name:"employeeName",selector:row=>row.employeeName},
        {name:"mobile",selector:row=>row.mobile},
        {name:"Action",cell:row=>(
            <div>
                <button onClick={()=>handleedit(row.employeeId)}>Edit</button>
                <button onClick={()=>handleDelete(row.employeeId)} >Delete</button>
            </div>
        )}
      ]

      let handleedit=(employeeId)=>{
let editdata=record.find(item=>item.employeeId===employeeId)
setuser({...user,employeeName:editdata.employeeName,
    mobile:editdata.mobile,employeeId:editdata.employeeId
})
setedit(true)



      }
  return (
    <div>
        <h1>Employee</h1>
        <form onSubmit={handleSubmit}>
            
         <input type="text" onChange={handleInput} name="employeeName" value={user.employeeName} placeholder='employeeName' />
         <br></br>
         <input type='text' onChange={handleInput} name="mobile" value={user.mobile} placeholder='mobile
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




export default Employee