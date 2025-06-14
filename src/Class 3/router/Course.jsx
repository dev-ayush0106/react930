import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Course = () => {
  let navigate=useNavigate();
  return (
    <div>
      <h1>Courses Page</h1>
      <Outlet/>
      <button onClick={()=>navigate("javafs")}>Navigate to Java</button>
      <button onClick={()=>navigate("pythonfs")}>Navigate to Python</button>
      <button onClick={()=>navigate("mern")}>Navigate to MERN</button>
    </div>
  )
}

export default Course
