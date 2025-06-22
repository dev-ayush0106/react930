import React, { useReducer } from 'react'

let initialState={count:0,count1:10,count2:20};
function reducer(state,action){
    switch(action.type){
        case "increase":
            return {...state,count:state.count+1};
        case "decrease":
            return {...state,count:state.count-1};
        case "reset":
            return {...state,count:0};
        case "inc10":
            return {...state,count1:state.count1+10}
        case "dec10":
            return {...state,count1:state.count1-10}
        case "inc20":
            return {...state,count2:state.count2+20}
        case "dec20":
            return {...state,count2:state.count2-20}
        
    }
}
const UseReducer1 = () => {
    let[state,dispatch]=useReducer(reducer,initialState)
    console.log(state);
  return (
    <div>
      <h1>UseReducer 1</h1>
      <h1>Count</h1>
      <h1>
      <button onClick={()=>{dispatch({type:"increase"})}}>+</button>
        {state.count}
      <button onClick={()=>{dispatch({type:"decrease"})}}>-</button>
      <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
      </h1>

      <h1>Count1</h1>
      <h1>
      <button onClick={()=>{dispatch({type:"inc10"})}}>+</button>
        {state.count1}
      <button onClick={()=>{dispatch({type:"dec10"})}}>-</button>
      </h1>

      <h1>Count2</h1>
      <h1>
      <button onClick={()=>{dispatch({type:"inc20"})}}>+</button>
        {state.count2}
      <button onClick={()=>{dispatch({type:"dec20"})}}>-</button>
      </h1>
    </div>
  )
}

export default UseReducer1
