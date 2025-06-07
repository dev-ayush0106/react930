import React from 'react'
import "./Card.css"
import StudentDetail from './StudentDetail'

const Card = ({id,name,course,city}) => { // destructring object
    // console.log(data); // object
    return (
        <div>
           <StudentDetail stid={id} stname={name} stcourse={course} stcity={city}/>
        </div>
    )
}

export default Card
