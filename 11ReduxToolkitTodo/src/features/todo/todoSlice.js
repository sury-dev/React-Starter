import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {id: "1", text: "Learn Redux"}
    ]
}

function sayHello(){
    console.log("Hello")
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addtodo : (state, action) => {
            const todo ={
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removetodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addtodo, removetodo} = todoSlice.actions;

export default todoSlice.reducer;