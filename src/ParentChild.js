import React from 'react'
import ParentNestedchild from './ParentNestedchild';

 function ParentChild({employees}) {
    console.log(employees)
    let [e1,e2]=employees
    console.log(e1)
    console.log(e2)
    let {ename:ename1,eid:eid1,edept:edept1,doj:doj1}=e1
    console.log(ename1,eid1,edept1,doj1)
    
    let{ename:ename2,eid:eid2,edept:edept2,doj:doj2}=e2
    console.log(ename2,eid2,edept2,doj2)
    
    
    
  return (
    <div>
      <h1>Child</h1>
      <h4>Employee 1</h4>
      <p>{ename1}-{eid1}-{edept1}-{doj1.toDateString()}</p>
      
      <h4>Employee 2</h4>
      <p>{ename2}-{eid2}-{edept2}-{doj2.toDateString()}</p>
      <ParentNestedchild doj1={doj1}/>
      
    </div>
  )
}

export default ParentChild
