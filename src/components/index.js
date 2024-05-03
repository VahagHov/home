import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, onDelete } from '../redux/todoSlice'

export const Index = () => {

    const [text , setText] = useState()


    const todos = useSelector(({todos}) => todos) // kam el senc ((state => state.todos))
    const dispatch = useDispatch()

    const handleChangeDescription = (e) => {
        setText(e.target.value)
    }

    const handleAdd = () => {
      dispatch(addTodo({
        text
      }))
      setText('')
    }
  
  return (
    <div>
        <div>
          <input value={text} type='text' placeholder='Enter Task' onChange={handleChangeDescription}/>
          <button onClick={handleAdd}>Add Task</button>
        </div>
        

        {todos.map((e)=> {
            return (
                <div  key={e.id}>
                    <ul >
                        <li>
                            {e.text} 
                            <button onClick={() => () => dispatch(onDelete())}>X</button>
                        </li>
                        
                    </ul>

                </div>
            )
        })}
    </div>
  )
}
