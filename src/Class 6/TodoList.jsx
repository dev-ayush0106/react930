import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo,toggle,remove}) => {
  return (
    <div>
      <ul>
        {
            todo.map((todo)=>(
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggle={toggle}
                    remove={remove}
                />
            ))
        }
      </ul>
    </div>
  )
}

export default TodoList
