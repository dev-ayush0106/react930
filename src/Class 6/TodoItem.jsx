import React from 'react'

const TodoItem = ({todo,toggle,remove}) => {
  return (
    <div>
      <li className={todo.completed?"completed":""}>
        <span onClick={toggle(todo.id)}>{todo.task}</span>
        <button onClick={()=>{remove(todo.id)}}>Remove</button>
      </li>
    </div>
  )
}

export default TodoItem
