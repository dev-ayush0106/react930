import React, { useState } from 'react'


const New = () => {
    function handlingClick(){
        alert("Button Clicked");
    }

    let [data,setData]=useState(0);
    console.log(data);

    function incCount(){
        setData(data+1);
    }
    function decCount(){
        setData(data-1);
    }
    function resetCount(){
        setData(0);
    }

    let [initial,setInitial]=useState(true);
    console.log(initial)

    function updateInitial(){
        setInitial(!initial);
    }
    
  return (
    <div>
    { initial && // if intial is true then only content is visible
    <>
      <h1>Event Handling</h1>
      <button onClick={handlingClick}>Click Me</button>

      <h1>Current State: {data}</h1>
      <button onClick={incCount}>+</button>
      <button onClick={decCount} disabled={data<1}>-</button>
      <button onClick={resetCount}>Reset</button>
      </>
      }

      <button onClick={updateInitial}>Update</button>


      {(initial==true)?
      <h1>Currently initial is True</h1> :
      <h1>Currently initial is False</h1>
      }
      

    </div>
  )
}

export default New
