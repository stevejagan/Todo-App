import { useState } from "react"
import React  from 'react'


export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")

    const HandleSubmit = e => {
        e.preventDefault();
        addTodo(value)

        setValue("")
    }
    return(
        <form className='TodoForm' onSubmit={HandleSubmit}>
            <input type='text' className='todoinput' value={value} placeholder='what is the task today?'onChange=
            {(e) => setValue(e.target.value)} /> 
            <button type='submit' className='todobtn'>Add Task</button>

        </form>
    )
}
