import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = () => {
    let [todos,setTodos]=useState([]);

    const adding=(task)=>{
        setTodos([...todos,{id:Date.now(),task,completed:false}])
    }

    const toggleComplete=(id)=>{
        setTodos(
            todos.map((todo)=>
            todo.id===id?{...todo, completed:!todo.completed}:todo
        )
        )
    }

    const removeTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    }

    console.log(todos)

  return (
    <div>
      <h2>Todo App</h2>
      <TodoInput addTodo={adding}/>
      <TodoList todo={todos} toggle={toggleComplete} remove={removeTodo}/>
    </div>
  )
}

export default Todo
