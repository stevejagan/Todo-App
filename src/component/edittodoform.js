import { useState } from "react"
import React  from 'react'


export const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue] = useState(task.task)

    const HandleSubmit = e => {
        e.preventDefault();
        editTodo(value,task.id)

        setValue("")
    }
    return(
        <form className='TodoForm' onSubmit={HandleSubmit}>
            <input type='text' className='todoinput' value={value} placeholder='update task'onChange=
            {(e) => setValue(e.target.value)} /> 
            <button type='submit' className='todobtn'>Update Task</button>

        </form>
    )
}
