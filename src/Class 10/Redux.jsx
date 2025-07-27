import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice';

const Redux = () => {
    let count=useSelector((state)=>state.counter.value)
    let dispatch=useDispatch();

    function inc(){
        dispatch(increment())
    }
    function dec(){
        dispatch(decrement())
    }
  return (
    <div>
      <button onClick={inc}>+</button>
      <span>{count}</span>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default Redux
