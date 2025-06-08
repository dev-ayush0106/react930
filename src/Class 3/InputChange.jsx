import React, { useState } from 'react'

const InputChange = () => {
    let [firstinputEl,setFirstInputEl]=useState("");
    let [middleinputEl,setMiddleInputEl]=useState("");
    let [lastinputEl,setLastInputEl]=useState("");
    
  return (
    <div>
      <h1>My First name is {firstinputEl}</h1>
      <h1>My Middle name is {middleinputEl}</h1>
      <h1>My Last name is {lastinputEl}</h1>
      <input type="text" placeholder='Enter your firstname'
        onChange={(e)=>{setFirstInputEl(e.target.value)}}
      /> <br />
      <input type="text" placeholder='Enter your middlename'
        onChange={(e)=>{setMiddleInputEl(e.target.value)}}
      /> <br />
      <input type="text" placeholder='Enter your lastname'
        onChange={(e)=>{setLastInputEl(e.target.value)}}
      />
    </div>
  )
}

export default InputChange
