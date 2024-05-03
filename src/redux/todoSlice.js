import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {

        addTodo: (state , action) => {
            const {text } = action.payload
            if(state !== '') {
              state.push({id: Date.now() , text , completed: false})
            }
             
        } ,

        onDelete: (state ,action) => {
            const {id } = action.payload
            return state.filter((e) => e.id !== id)
            
        }
    }
})

export const {addTodo, onDelete } = todoSlice.actions
export default todoSlice.reducer