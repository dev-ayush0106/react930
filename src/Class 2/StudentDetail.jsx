import React from 'react'

const StudentDetail = ({stid,stname,stcourse,stcity}) => {
  return (
    <div>
       <div className="info">
                <h1>Info:{stid}</h1>
                <h2>Name:{stname}</h2>
                <h2>Course:{stcourse}</h2>
                <h2>City:{stcity}</h2>
            </div>
    </div>
  )
}

export default StudentDetail
