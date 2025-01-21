import React from 'react'
import Call from './call'
import Parent from './Parent'
import Task from './Task'
import Agefinder from './Agefinder'
import Primeno from './Primeno'
import Sigup from './Sigup'
import Login from './Login'
import Timedate from './Timedate'
import Context from './Context'
import Userreducercount from './Userreducercount'
import Useeffectapi from './Useeffectapi'
import Userreducecrud1 from './Userreducecrud1'




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
    {/* <Timedate/> */}
    {/* <Context/> */}
    {/* <Userreducercount/> */}
    {/* <Useeffectapi/> */}
    {/* <Userreducecrud1/> */}
    <My/>
  
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
