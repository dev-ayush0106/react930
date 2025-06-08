import React from 'react'
import { Outlet } from 'react-router'

const Course = () => {
  return (
    <div>
      <h1>Courses Page</h1>
      <Outlet/>
    </div>
  )
}

export default Course
