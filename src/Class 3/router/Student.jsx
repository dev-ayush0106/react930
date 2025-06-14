import React from 'react'
import { useParams } from 'react-router'

const Student = () => {
    let data=useParams()
    // console.log(id)
  return (
    <div>
      <h1>Student Details:{data.id}</h1>
    </div>
  )
}

export default Student
