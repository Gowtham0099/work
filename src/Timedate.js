import React, { useEffect, useState } from 'react'

function Timedate() {
    
    let[dateTime,setDateTime]=useState(new Date());
    useEffect(()=>{
        let time = setInterval(()=>{
            setDateTime(new Date());
            
        },1000);
    
    
    },[]);    

    
  return (
    <div>
     <p>{dateTime.toLocaleTimeString()}</p>
     <p>{dateTime.toLocaleDateString()}</p>
    </div>
  )
}

export default Timedate
function countOccurrences(arr) {
  let occurrences = {};
  arr.forEach(element => {
      if (occurrences[element]) {
          occurrences[element]++;
      } else {
          occurrences[element] = 1;
      }
  });
  return occurrences;
}

// Example usage:
let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let result = countOccurrences(array);
console.log(result);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }
