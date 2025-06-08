import React from 'react'
import { useLocation } from 'react-router'

const PageNotFound = () => {
    let loc=useLocation();
    console.log(loc)
  return (
    <div>
      <h1>No Page Found as {loc.pathname}</h1>
    </div>
  )
}

export default PageNotFound
