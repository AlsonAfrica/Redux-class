import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodoItem: (state, action) => {
            state.push(action.payload);
        },
        deleteTodoItem: (state, action) => {
            return state.filter(list => list.id !== action.payload);
        },
        editTodoItem: (state, action) => {
            const { id, updatedFields } = action.payload; 
            // id: The unique identifier of the todo item you want to update.
           // updatedFields: An object containing the fields you want to update in the todo item.
            const existingTodo = state.find(todo => todo.id === id);
            // state.find() searches through the state array (which contains the list of todo items) and returns the first item where the id matches the id provided in the action payload.
            if (existingTodo) {
                // The if (existingTodo) check ensures that the code inside the block only runs if a matching todo item was found.
                Object.assign(existingTodo, updatedFields);
                // Object.assign(existingTodo, updatedFields) is used to update the properties of existingTodo with the values from updatedFields.
            }
        }
    }
});

export const { addTodoItem, deleteTodoItem, editTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
