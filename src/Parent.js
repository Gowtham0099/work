import React from 'react'
import ParentChild from './ParentChild'

function Parent() {
    let employees=[
        {ename:"arun",eid:Date.now(),edept:"finace",doj:new Date()},
        {ename:"sabree",eid:Date.now(),edept:"banking",doj:new Date()},
    ]
  return (
    <div>
      <h1>Parent</h1>
      <ParentChild employees={employees}/>
    </div>
  )
}

export default Parent
