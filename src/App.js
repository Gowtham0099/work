import React from 'react'
import Call from './call'
import Parent from './Parent'
import Task from './Task'
import Agefinder from './Agefinder'
import Primeno from './Primeno'
import Sigup from './Sigup'
import Login from './Login'
import './App.css'

 
    

import Timedate from './Timedate'
import Context from './Context'
import Userreducercount from './Userreducercount'
import Useeffectapi from './Useeffectapi'
import Userreducecrud1 from './Userreducecrud1'

import My from './My'
import Category from './Category'
import Client from './Client'
import Test from './Test'
import Employee from './Employee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  let document=[
{
  name :"yuga",
  id :2211,
  salary : 50000,
  dept : 'developer',
  doj : 22-2-2021

},
{
   name :'hari',
    id :8811,
   salary :50000,
   dept : 'support',
   doj : 22-11-2020
}]
  return (
    
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/Sigup'element={<Sigup/>}></Route>
        <Route path='/Category'element={<Category/>}></Route>
        <Route path='/Client'element={<Client/>}></Route>
        <Route path='/Employee'element={<Employee/>}></Route>

      </Routes>
      </BrowserRouter>



        
    
      {/* <Category/> */}
      {/* <Client/>
      <Employee/> */}

      {/* <Test/> */}
      {/* <Email/> */}
      
    {/* <Timedate/> */}
    {/* <Context/> */}
    {/* <Userreducercount/> */}
    {/* <Useeffectapi/> */}
    {/* <Userreducecrud1/> */}
    {/* <My/> */}
  
    {/* <Task/> */}
    {/* <Agefinder/> */}
    {/* <Sigup/> */}
    {/* <Login/> */}
    {/* <Primeno/> */}
    {/* <h2>App</h2> */}
    {/* {document.map(document=>(
     <Call document={document}/>
     

    ))} */}
    {/* <p>{JSON.stringify(details)}</p> */}

   {/* <Parent/> */}
      
    </div>
  )
}

export default App
