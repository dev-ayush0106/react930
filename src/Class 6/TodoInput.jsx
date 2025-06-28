import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    let [input, setInput] = useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(input)
        setInput('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Enter The Task...'
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoInput
