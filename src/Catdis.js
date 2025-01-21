
    import axios from 'axios'
    import React, { useEffect, useState } from 'react'
    import DataTable from 'react-data-table-component'
    function Catdis() {
      let [cat,setcat]=useState({
        category:"",description:""
      })
    
    
      let [record,setrecord]=useState([])
      useEffect(()=>{
    fetchdata()
      },[])
      let fetchdata=async()=>{
        let res=await axios.get("http://catodotest.elevadosoftwares.com//Category/GetAllCategories")
        setrecord(res.data.categoryList)
      }
      let columns=[
        {name:"CategoryId",selector:row=>row.categoryId,sortable:true},
        {name:"Category",selector:row=>row.category},
        {name:"Description",selector:row=>row.description},
      ]
      let customStyles={
        headRow:{style:{backgroundColor:"black",color:"white"}}
      }
      let handleinputChange=(e)=>{
    setcat({...cat,[e.target.name]:e.target.value})
      }
    
      let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(cat)
        handleSave()
      }
    
      let handleSave=()=>{
        let data={
          category:cat.category,
          description:cat.description
        }
        axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory",data).then(res=>{
          console.log(res.data)
          alert("data saved...")
          fetchdata()
        })
      }
      return (
        <div>
          <form onSubmit={handleSubmit}>
    
        
          <input type='text'  onChange={handleinputChange} name="category" value={cat.category}placeholder='Category'/>
          <input type='text' onChange={handleinputChange} name="description" value={cat.description} placeholder='Discription'/>
          <button type='submit'>submit</button>
          <button>cancel</button>
          </form>
          <DataTable 
          data={record}
          columns={columns}
          customStyles={customStyles}
          pagination/>
        </div>
      )
    }
    
    export default Catdis
    

