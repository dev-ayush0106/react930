import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // syntax
    // useEffect(()=>{
    // 
    // },dependency)

    // useEffect Hook works on three types
    // 1. Without any Dependency
    //      this means whenever the page will re-render useEffect will be run
    let [count,setCount]=useState(0);

    // useEffect(()=>{
    //     document.title=count;
    // })

    // 2. Dependency With a varaible
    //      this means it will only re-render when the dependency varaible is updated
    let [count1,setCount1]=useState(20);
    // useEffect(()=>{
    //     document.title=`${count1} Notifications`
    // },[count1])

    // 3. With empty array
    //      this means it will only runs first render
    useEffect(()=>{
        document.title=`${count1} Notifications`
    },[])
  return (
    <div>
        {count}
      <button onClick={()=>{setCount(count+1)}}>IncCount</button>

      <br />

      {count1}
      <button onClick={()=>{setCount1(count1+10)}}>IncCount1</button>
    </div>
  )
}

export default UseEffect
