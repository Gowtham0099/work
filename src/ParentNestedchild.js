import React from 'react'

function ParentNestedchild({doj1}) {
    console.log(doj1);
    let year=doj1.getFullYear()
    let month=doj1.toLocaleString('en-US',{month :'long'})
    let date=doj1.getDate()
    let day=doj1.toLocaleString('en-US',{weekday :'long'})
    
  return (
    <div>
      <h1>ParentNestedchild</h1>
      
      <p>Year:{year} Month {month} Date:{date} Day:{day}</p>
     
    </div>
  )
}

export default ParentNestedchild
